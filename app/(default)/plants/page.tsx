import React from 'react';
import type { Metadata } from 'next';
import {
  Box,
  SimpleGrid,
  Card,
  Image,
  Float,
} from '@chakra-ui/react';
import { MdFilter } from 'react-icons/md';

const title = 'Plants｜CJ Plants';

export const metadata: Metadata = {
  title,
  openGraph: {
    title,
  },
};

export default async function Page() {
  const items = Array.from({ length: 26 }, (_, i) => ({
    id: i,
    title: `CJ - ${i + 1}`,
    image:
      'https://placehold.co/1200x900/3f3f46/3f3f46',
  }));

  return (
    <Box>
      <SimpleGrid gap="10px" columns={[2, 3]}  maxW="640px">
        {items.map((item) => (
          <Card.Root key={item.id} maxW="sm" overflow="hidden">
            <Image src={item.image} alt={item.title} />
            <Card.Body padding="10px">
              <Card.Title color="gray.300" fontSize="sm" textAlign="center">
                {item.title}
              </Card.Title>
              <Float offset="20px" color="gray.300">
                <MdFilter size="16px" />
              </Float>
            </Card.Body>
          </Card.Root>
        ))}
      </SimpleGrid>
    </Box>
  );
}
