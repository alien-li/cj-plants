import { Flex } from '@chakra-ui/react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

type DefaultLayoutProps = {
  children: React.ReactNode
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Flex
      as="main"
      direction="column"
      minH="100vh"
    >
      <Header />
      <Flex
        flex="1"
        align="center"
        justify="center"
        fontSize="md"
        padding="20px 16px"
      >
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
}
