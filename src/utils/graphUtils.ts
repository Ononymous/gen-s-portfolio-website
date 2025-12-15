export type ViewMode = 'category' | 'date' | 'workType' | 'library';

export interface ProjectLink {
  text: string;
  url: string;
}

export interface Project {
  title: string;
  description: string[];
  image: string;
  links: ProjectLink[];
  tags: string[];
  type: string[];
}

export interface GraphNode {
  id: string;
  group: string;
  type: 'project' | 'category';
  project?: Project;
  label: string;
  image?: string;
}

export interface GraphLink {
  source: string;
  target: string;
  value: number;
}

export interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}

// Extract categories from projects based on view mode
const extractCategories = (projects: Project[], viewMode: ViewMode): Set<string> => {
  const categories = new Set<string>();
  
  projects.forEach(project => {
    switch (viewMode) {
      case 'category':
        project.type.forEach(type => categories.add(getCategoryLabel(type)));
        break;
      case 'date':
        project.tags.forEach(tag => {
          if (tag.match(/^\d{4}-\d{2}$/)) { // Match year format like "2023-24"
            categories.add(tag);
          }
        });
        break;
      case 'workType':
        project.tags.forEach(tag => {
          if (['Internship', 'Small Team', 'Large Team'].includes(tag)) {
            categories.add(tag);
          }
        });
        break;
      case 'library':
        project.tags.forEach(tag => {
          // Filter out work types and years, keep libraries/languages
          if (!tag.match(/^\d{4}-\d{2}$/) && 
              !['Internship', 'Small Team', 'Large Team'].includes(tag)) {
            categories.add(tag);
          }
        });
        break;
    }
  });
  
  return categories;
};

// Get user-friendly category labels
const getCategoryLabel = (type: string): string => {
  const labels: Record<string, string> = {
    'ai': 'Machine Learning',
    'system': 'System',
    'front': 'Frontend',
    'back': 'Backend',
    'mobile': 'Mobile'
  };
  return labels[type] || type;
};

// Get categories for a specific project based on view mode
const getProjectCategories = (project: Project, viewMode: ViewMode): string[] => {
  switch (viewMode) {
    case 'category':
      return project.type.map(type => getCategoryLabel(type));
    case 'date':
      return project.tags.filter(tag => tag.match(/^\d{4}-\d{2}$/));
    case 'workType':
      return project.tags.filter(tag => ['Internship', 'Small Team', 'Large Team'].includes(tag));
    case 'library':
      return project.tags.filter(tag => 
        !tag.match(/^\d{4}-\d{2}$/) && 
        !['Internship', 'Small Team', 'Large Team'].includes(tag)
      );
    default:
      return [];
  }
};

// Transform projects data into graph nodes and links (now supports multiple view modes)
export const transformProjectsToGraph = (
  projects: Project[],
  viewModes: ViewMode[] = ['category']
): GraphData => {
  const nodes: GraphNode[] = [];
  const links: GraphLink[] = [];
  const categorySet = new Set<string>();
  
  // Extract unique categories from all selected view modes
  viewModes.forEach(viewMode => {
    const categories = extractCategories(projects, viewMode);
    categories.forEach(cat => categorySet.add(`${viewMode}:${cat}`));
  });
  
  // Create category nodes with viewMode prefix
  categorySet.forEach(categoryKey => {
    const [viewMode, ...categoryParts] = categoryKey.split(':');
    const category = categoryParts.join(':');
    nodes.push({
      id: `cat-${categoryKey}`,
      group: `${viewMode}:${category}`,
      type: 'category',
      label: category
    });
  });
  
  // Create project nodes and links
  projects.forEach((project, index) => {
    const projectId = `proj-${index}`;
    
    nodes.push({
      id: projectId,
      group: 'project',
      type: 'project',
      project: project,
      label: project.title,
      image: project.image
    });
    
    // Create links between project and its categories for each view mode
    viewModes.forEach(viewMode => {
      const projectCategories = getProjectCategories(project, viewMode);
      projectCategories.forEach(category => {
        links.push({
          source: projectId,
          target: `cat-${viewMode}:${category}`,
          value: 1
        });
      });
    });
  });
  
  return { nodes, links };
};

// Get color for category based on view mode (standardized colors per type)
export const getCategoryColor = (group: string): string => {
  // Extract view mode from group (format: "viewMode:category")
  const [viewMode] = group.split(':');
  
  if (viewMode === 'category') {
    // Orange for all categories
    return '#f39c12';
  } else if (viewMode === 'date') {
    // Blue for all year nodes
    return '#3498db';
  } else if (viewMode === 'workType') {
    // Red for all work type nodes
    return '#e74c3c';
  } else if (viewMode === 'library') {
    // Green for all library nodes
    return '#2ecc71';
  }
  
  return '#95a5a6';
};
