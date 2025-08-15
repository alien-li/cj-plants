import React from 'react';
import NextLink from 'next/link';
import {
  Link,
  Flex,
  Image,
  HStack,
  Separator,
} from '@chakra-ui/react';
import { Footer } from '@/components/layout/footer';

export default async function Page() {
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
      direction="column"
      minHeight="100vh"
      fontSize="md"
    >
      <Flex
        flex="1"
        align="center"
        justify="center"
        direction="column"
      >
        <Image
          // src="https://blocks.astratic.com/img/general-img-square.png"
          src="/images/logo.png"
          boxSize="200px"
          borderRadius="full"
          alt="CJ Plants"
          data-state="open"
          _open={{
            animationName: 'fade-in, scale-in',
            animationDuration: '1.8s',
            animationFillMode: 'forwards',
          }}
        />
        <HStack
          gap="3"
          opacity={0}
          data-state="open"
          _open={{
            animationName: 'fade-in, slide-from-top',
            animationDuration: '1s',
            animationDelay: '0.5s',
            animationFillMode: 'forwards',
          }}
        >
          {links.map((link, index) => (
            <React.Fragment key={index}>
              <Link color="gray.200" variant="plain" asChild>
                <NextLink href={link.href}>
                  {link.label}
                </NextLink>
              </Link>
              {index < links.length - 1 && (
                <Separator
                  orientation="vertical"
                  height="4"
                />
              )}
            </React.Fragment>
          ))}
        </HStack>
      </Flex>
      <Footer />
    </Flex>
  );
}
