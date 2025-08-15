'use client';

import { useState, Fragment } from 'react';
import NextLink from 'next/link';
import {
  Text,
  Flex,
  Icon,
  Image,
  Drawer,
  Portal,
  Separator,
  useBreakpointValue,
} from '@chakra-ui/react';
import { HiMiniBars3BottomRight } from 'react-icons/hi2';

export function Header() {
  const [open, setOpen] = useState(false);
  const placement = useBreakpointValue<'bottom' | 'end'>({ base: 'bottom', md: 'end' });

  const links = [{
    href: '/plants',
    label: 'Plants',
  }, {
    href: '/news',
    label: 'News',
  }, {
    href: '/about',
    label: 'About',
  }];

  return (
    <Flex
      as="header"
      position="sticky"
      bg="black"
      top="0"
      align="center"
      justify="space-between"
      zIndex="100"
      textAlign="right"
      padding="8px 16px"
      borderBottomColor="gray.700"
      borderBottomWidth="1px"
      borderBottomStyle="solid"
    >
      <NextLink href="/">
        <Image
          src="/images/logo-icon.png"
          boxSize="38px"
          borderRadius="full"
          alt="CJ Plants"
        />
      </NextLink>
      <Drawer.Root
        open={open}
        placement={placement}
        onOpenChange={(e) => setOpen(e.open)}
      >
        <Drawer.Trigger>
          <Icon size="lg">
            <HiMiniBars3BottomRight />
          </Icon>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner padding="4">
            <Drawer.Content rounded="md">
              <Drawer.Body marginY="4">
                <Flex gap="4" direction="column">
                  {links.map((link, index) => (
                    <Fragment key={index}>
                      <Text asChild onClick={() => setOpen(false)}>
                        <NextLink href={link.href}>
                          {link.label}
                        </NextLink>
                      </Text>
                      {index < links.length - 1 && (
                        <Separator />
                      )}
                    </Fragment>
                  ))}
                </Flex>
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </Flex>
  );
}
