import { IconButton } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';

type DefaultLayoutProps = {
  children: React.ReactNode
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div>
      <main>
        {children}
        <IconButton
          variant="outline"
          rounded="full"
          position="fixed"
          top="6"
          right="6"
          aria-label="Menu"
        >
          <FiMenu />
        </IconButton>
      </main>
    </div>
  );
}
