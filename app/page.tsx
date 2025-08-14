import React from 'react';
import {
  Box,
  Image,
  HStack,
  Separator,
  VStack,
  Link,
} from '@chakra-ui/react';

export default async function Page() {
  const links = [{
    href: '/',
    label: 'Plants',
  }, {
    href: '/news',
    label: 'News',
  }, {
    href: '/',
    label: 'About',
  }];

  return (
    <Box
      display="flex"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      fontSize="md"
    >
      <VStack gap="0">
        <Image
          // src="https://blocks.astratic.com/img/general-img-square.png"
          src="/images/logo.png"
          boxSize="200px"
          borderRadius="full"
          alt="CJ Plants"
          data-state="open"
          _open={{
            animationName: 'fade-in, scale-out',
            animationDuration: '2s',
            animationFillMode: 'forwards',
          }}
        />
        <HStack
          gap="4"
          data-state="open"
          opacity={0}
          _open={{
            animationName: 'fade-in, slide-from-top',
            animationDuration: '2s',
            animationDelay: '0.5s',
            animationFillMode: 'forwards',
          }}
        >
          {links.map((link, index) => (
            <React.Fragment key={index}>
              <Link
                variant="plain"
                color="gray.200"
                href={link.href}
              >
                {link.label}
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
      </VStack>
    </Box>
  );
}
