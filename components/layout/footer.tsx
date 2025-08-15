import { Flex } from '@chakra-ui/react';

export function Footer() {
  return (
    <Flex
      as="footer"
      align="center"
      justify="center"
      padding="12px"
      bg="gray.900"
      color="gray.300"
      opacity="0"
      fontSize="xs"
      data-state="open"
      _open={{
        animationName: 'fade-in, slide-from-bottom',
        animationDuration: '1s',
        animationFillMode: 'forwards',
      }}
    >
      © {new Date().getFullYear()} CJ Plants. All rights reserved.
    </Flex>
  );
}
