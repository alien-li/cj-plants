'use client';

import { useState } from 'react';
import {
  Card,
  Image,
  Float,
  SimpleGrid,
  Dialog,
  Portal,
  CloseButton,
} from '@chakra-ui/react';
import { MdFilter } from 'react-icons/md';
import EmblaCarousel from '@/components/embla/embla-carousel';

interface Item {
  id: number;
  title: string;
  image: string;
}

export function PlantsGrid({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(false);
  const images = Array.from({ length: 10 }, (_, i) => `https://placehold.co/1200x900/3f3f46/ffffff?text=${i + 1}`);

  return (
    <>
      <SimpleGrid gap="10px" columns={[2, 3]} maxW="640px">
        {items.map((item) => (
          <Card.Root key={item.id} maxW="sm" overflow="hidden" onClick={() => setOpen(true)}>
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

      <Dialog.Root
        placement="center"
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
      >
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner padding="4">
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>CJ - 1</Dialog.Title>
                <Dialog.CloseTrigger asChild>
                  <CloseButton size="sm" />
                </Dialog.CloseTrigger>
              </Dialog.Header>
              <Dialog.Body>
                <EmblaCarousel slides={images} />
              </Dialog.Body>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  );
}
