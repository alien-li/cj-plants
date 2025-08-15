import type { Metadata } from 'next';
import { Box } from '@chakra-ui/react';
import { PlantsGrid } from './plants-grid';

const title = 'Plants｜CJ Plants';

export const metadata: Metadata = {
  title,
  openGraph: {
    title,
  },
};

export default async function Page() {
  const items = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    title: `CJ - ${i + 1}`,
    image:
      'https://placehold.co/1200x900/3f3f46/3f3f46',
  }));

  return (
    <Box>
      <PlantsGrid items={items} />
    </Box>
  );
}
