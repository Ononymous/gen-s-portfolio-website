import { useEffect, useRef, useState, useMemo } from 'react';
import * as d3 from 'd3';
import {
  Box,
  VStack,
  Image,
  Text,
  Heading,
  Link,
  Code,
  useColorModeValue,
  Card,
  CardBody,
  Stack,
  Button,
  HStack
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import type { GraphData, GraphNode, ViewMode, Project } from '../utils/graphUtils';
import { getCategoryColor } from '../utils/graphUtils';

interface NetworkGraphProps {
  data: GraphData;
  viewModes: ViewMode[];
}

interface D3Node extends d3.SimulationNodeDatum {
  id: string;
  group: string;
  type: 'project' | 'category';
  project?: Project;
  label: string;
  image?: string;
  x?: number;
  y?: number;
}

interface D3Link extends d3.SimulationLinkDatum<D3Node> {
  source: string | D3Node;
  target: string | D3Node;
  value: number;
}

const NetworkGraph: React.FC<NetworkGraphProps> = ({ data, viewModes }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<GraphNode | null>(null);
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);
  const [dimensions, setDimensions] = useState({ width: 928, height: 680 });

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const textColor = useColorModeValue('black', 'white');

  // Calculate node sizes based on connections
  const nodeSizes = useMemo(() => {
    const sizes: Record<string, number> = {};
    const connectionCount: Record<string, number> = {};
    
    // Count connections for each category node
    data.links.forEach(link => {
      const targetId = typeof link.target === 'string' ? link.target : (link.target as any).id || '';
      connectionCount[targetId] = (connectionCount[targetId] || 0) + 1;
    });
    
    // Calculate sizes (smaller base, more dramatic scaling)
    data.nodes.forEach(node => {
      if (node.type === 'category') {
        const connections = connectionCount[node.id] || 0;
        // Smaller nodes for fewer connections, much bigger for more
        sizes[node.id] = 30 + (connections * 12); // Base 30 + 12px per connection
      } else {
        sizes[node.id] = 45; // Project nodes bigger (was 35)
      }
    });
    
    return sizes;
  }, [data]);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width: width || 928, height: height || 680 });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (!svgRef.current || !data.nodes.length) return;

    const { width, height } = dimensions;

    // Clear previous graph
    d3.select(svgRef.current).selectAll('*').remove();

    // Create copies of nodes and links
    const nodes: D3Node[] = data.nodes.map(d => ({ ...d }));
    const links: D3Link[] = data.links.map(d => ({ ...d }));

    // Create force simulation with dynamic distances
    const simulation = d3.forceSimulation<D3Node>(nodes)
      .force('link', d3.forceLink<D3Node, D3Link>(links)
        .id(d => d.id)
        .distance(link => {
          // Scale distance based on node sizes - access nodes after initialization
          const source = link.source as D3Node;
          const target = link.target as D3Node;
          const sourceSize = nodeSizes[source.id] || 45;
          const targetSize = nodeSizes[target.id] || 45;
          return 150 + sourceSize + targetSize; // Base distance + combined node sizes
        })
        .strength(1) // Stronger enforcement of distance
        .iterations(3) // More iterations for better distance enforcement
      )
      .force('charge', d3.forceManyBody().strength(-400))
      .force('x', d3.forceX(0).strength(0.05))
      .force('y', d3.forceY(0).strength(0.05))
      .force('collision', d3.forceCollide().radius(d => {
        const node = d as D3Node;
        return (nodeSizes[node.id] || 45) + 20; // More padding for better spacing
      }).strength(1).iterations(3));

    // Create SVG
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [-width / 2, -height / 2, width, height].join(' '))
      .attr('style', 'max-width: 100%; height: auto;');

    // Add zoom behavior
    const g = svg.append('g');
    
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 4])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
      });

    svg.call(zoom);

    // Add links
    const link = g.append('g')
      .attr('stroke', '#999')
      .attr('stroke-opacity', 0.6)
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('stroke-width', 2);

    // Add nodes group
    const nodeGroup = g.append('g')
      .selectAll('g')
      .data(nodes)
      .join('g')
      .attr('cursor', 'pointer');
    
    // Apply drag behavior
    nodeGroup.call(
      d3.drag<any, D3Node>()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended)
    );

    // Add circles for category nodes or images for project nodes
    nodeGroup.each(function(d) {
      const node = d3.select(this);
      const size = nodeSizes[d.id] || 45;
      
      if (d.type === 'category') {
        // Category nodes: dynamically sized circles
        node.append('circle')
          .attr('r', size)
          .attr('fill', getCategoryColor(d.group))
          .attr('stroke', 'none');
        
        // Add category label inside circle - scale font with node size
        const fontSize = size / 3.5;
        node.append('text')
          .attr('text-anchor', 'middle')
          .attr('dominant-baseline', 'middle')
          .attr('fill', 'white')
          .attr('font-size', fontSize + 'px')
          .attr('font-weight', 'bold')
          .attr('pointer-events', 'none')
          .each(function() {
            const text = d3.select(this);
            const words = d.label.split(/\s+/);
            const lineHeight = fontSize * 1.2;
            const y = -(words.length - 1) * lineHeight / 2;
            
            words.forEach((word, i) => {
              text.append('tspan')
                .attr('x', 0)
                .attr('y', y + i * lineHeight)
                .text(word);
            });
          });
      } else {
        // Project nodes: circular image that covers entire node (no white background)
        const clipId = `clip-${d.id}`;
        
        // Create a clip path for circular image
        svg.append('defs')
          .append('clipPath')
          .attr('id', clipId)
          .append('circle')
          .attr('r', size);
        
        node.append('image')
          .attr('xlink:href', `/projects/${d.image}`)
          .attr('x', -size)
          .attr('y', -size)
          .attr('width', size * 2)
          .attr('height', size * 2)
          .attr('clip-path', `url(#${clipId})`)
          .attr('preserveAspectRatio', 'xMidYMid slice')
          .attr('pointer-events', 'none');
        
        // Add invisible circle for hover/click detection
        node.append('circle')
          .attr('r', size)
          .attr('fill', 'transparent')
          .attr('stroke', 'none');
      }
    });

    // Add hover and click interactions
    nodeGroup
      .on('mouseenter', function(_event, d) {
        if (d.type === 'project') {
          // Add a circle overlay for hover effect
          d3.select(this).append('circle')
            .attr('class', 'hover-ring')
            .attr('r', nodeSizes[d.id] || 45)
            .attr('fill', 'none')
            .attr('stroke', '#3498db')
            .attr('stroke-width', 4)
            .attr('pointer-events', 'none');
          setHoveredNode(d as GraphNode);
        }
      })
      .on('mouseleave', function(_event, d) {
        if (d.type === 'project') {
          d3.select(this).select('.hover-ring').remove();
          setHoveredNode(null);
        }
      })
      .on('click', function(event, d) {
        if (d.type === 'project') {
          setSelectedNode(d as GraphNode);
          event.stopPropagation();
        }
      });

    // Close detail view when clicking on background
    svg.on('click', () => {
      setSelectedNode(null);
    });

    // Update positions on simulation tick
    simulation.on('tick', () => {
      link
        .attr('x1', d => (d.source as D3Node).x || 0)
        .attr('y1', d => (d.source as D3Node).y || 0)
        .attr('x2', d => (d.target as D3Node).x || 0)
        .attr('y2', d => (d.target as D3Node).y || 0);

      nodeGroup.attr('transform', d => `translate(${d.x || 0},${d.y || 0})`);
    });

    // Drag functions
    function dragstarted(event: d3.D3DragEvent<SVGGElement, D3Node, D3Node>) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event: d3.D3DragEvent<SVGGElement, D3Node, D3Node>) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: d3.D3DragEvent<SVGGElement, D3Node, D3Node>) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return () => {
      simulation.stop();
    };
  }, [data, viewModes, dimensions, textColor, nodeSizes]);

  const renderProjectDetail = (node: GraphNode) => {
    if (!node.project) return null;
    const { title, description, image, links, tags } = node.project;

    return (
      <Card
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        maxW="90%"
        w="800px"
        maxH="85vh"
        overflow="auto"
        zIndex={1000}
        bg={bgColor}
        boxShadow="2xl"
        border="2px"
        borderColor={borderColor}
      >
        <CardBody>
          <HStack justify="space-between" mb={4}>
            <Heading size="md">{title}</Heading>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setSelectedNode(null)}
            >
              <CloseIcon />
            </Button>
          </HStack>
          
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Image
              src={`/projects/${image}`}
              alt={title}
              maxW={{ base: '100%', md: '200px' }}
              maxH="200px"
              objectFit="cover"
              rounded="md"
            />
            
            <VStack align="start" flex={1} spacing={2}>
              {description.map((text, index) => (
                <Text key={index} fontSize="sm">
                  {text}
                </Text>
              ))}
              
              <Box>
                {links.map((link, index) => (
                  <Text key={index} fontSize="sm">
                    [
                    <Link isExternal color="teal.300" href={link.url}>
                      {link.text}
                    </Link>
                    ]
                  </Text>
                ))}
              </Box>
              
              <Text fontSize="sm">
                Tags:{' '}
                {tags.map((tag) => (
                  <Code key={tag} ml={2} fontSize="xs">
                    {tag}
                  </Code>
                ))}
              </Text>
            </VStack>
          </Stack>
        </CardBody>
      </Card>
    );
  };

  return (
    <Box ref={containerRef} position="relative" w="100%" h="70vh">
      <svg ref={svgRef} style={{ width: '100%', height: '100%' }} />
      
      {hoveredNode && !selectedNode && hoveredNode.project && (
        <Box
          position="absolute"
          bottom={4}
          left="50%"
          transform="translateX(-50%)"
          bg={bgColor}
          p={3}
          rounded="md"
          boxShadow="lg"
          border="1px"
          borderColor={borderColor}
          maxW="400px"
          zIndex={999}
        >
          <Heading size="sm" mb={1}>
            {hoveredNode.project.title}
          </Heading>
          <Text fontSize="xs" noOfLines={2}>
            {hoveredNode.project.description[0]}
          </Text>
          <Text fontSize="xs" color="gray.500" mt={1}>
            Click to see full details
          </Text>
        </Box>
      )}
      
      {selectedNode && renderProjectDetail(selectedNode)}
    </Box>
  );
};

export default NetworkGraph;
