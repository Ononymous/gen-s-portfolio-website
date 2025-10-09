import { Card, Code, CardBody, Heading, Text, Image, Link, Stack } from '@chakra-ui/react';
import type { FC, ReactNode } from 'react';

interface ExpCardsProps {
  title: string;
  description: string[];
  image: string;
  links: { text: string; url: string }[];
  tags: string[];
}

const renderList = <T,>(items: T[], renderItem: (item: T, index: number) => ReactNode) =>
  items.map((item, index) => renderItem(item, index));

const ExpCards: FC<ExpCardsProps> = ({ title, description, image, links, tags }) => {
  return (
    <Card
      direction={{ base: 'column', md: 'row' }}
      overflow="hidden"
      variant="outline"
      rounded="2xl"
      mb="10"
      mr="2"
      ml="2"
    >
      <Image
        objectFit="cover"
        w={{ base: '100%', md: '40%' }}
        maxH={{ base: '30vh', md: '100%' }}
        src={`/projects/${image}`}
        alt={`${title} project preview`}
      />

      <Stack flex={1}>
        <CardBody>
          <Heading size="md">{title}</Heading>
          {renderList(description, (text, index) => (
            <Text key={index} pt="1">
              {text}
            </Text>
          ))}
          {renderList(links, (link, index) => (
            <Text key={index}>
              [
              <Link isExternal color="teal.300" href={link.url}>
                {link.text}
              </Link>
              ]
            </Text>
          ))}

          <Text py="1" fontSize="sm">
            Tags: {renderList(tags, (tag) => (
              <Code key={tag} ml="2">
                {tag}
              </Code>
            ))}
          </Text>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default ExpCards;
