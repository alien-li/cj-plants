import React from 'react';
import type { Metadata } from 'next';
import { Noto_Serif_TC } from 'next/font/google';
import {
  Box,
  Icon,
  Link,
  Card,
  Text,
  Stack,
  Avatar,
  HStack,
} from '@chakra-ui/react';
import {
  PiMapPinFill,
  PiThreadsLogo,
  PiFacebookLogoFill,
  PiInstagramLogoFill,
} from 'react-icons/pi';

const title = 'About｜CJ Plants';

export const metadata: Metadata = {
  title,
  openGraph: {
    title,
  },
};

const notoSerif = Noto_Serif_TC({
  subsets: ['latin'],
  display: 'swap',
});

export default async function Page() {
  return (
    <Box>
      <Card.Root variant="subtle" maxWidth="480px">
        <Card.Body>
          <HStack mb="3" gap="3">
            <Avatar.Root size="2xl">
              <Avatar.Image src="/images/avatar.jpg" />
              <Avatar.Fallback name="CJ" />
            </Avatar.Root>
            <Stack gap="1">
              <Text fontWeight="semibold" textStyle="sm" className={notoSerif.className}>
                CJ PLANTS
              </Text>
              <Text color="fg.muted" textStyle="xs">
                July 18, 2013
              </Text>
            </Stack>
          </HStack>
          <Card.Description color="gray.300" lineHeight="1.8">
            位於台中新社的 CJ Plants，由熱愛龍舌蘭與多肉植物的 CJ 創立。以多年農作經驗為基礎，細心培育多款特色植物，並依環境特性進行地景設計。這裡是一個讓人能靜心欣賞植物之美的地方，也不時迎來來自各地的愛好者與朋友。CJ Plants 希望透過交流與分享，讓更多人感受到植物的魅力與生命力。
          </Card.Description>
        </Card.Body>
        <Card.Footer gap="3">
          <Link>
            <Icon size="md">
              <PiMapPinFill />
            </Icon>
          </Link>
          <Link href="https://www.instagram.com/cj_plants_v" target="_blank">
            <Icon size="md">
              <PiInstagramLogoFill />
            </Icon>
          </Link>
          <Link>
            <Icon size="md">
              <PiFacebookLogoFill />
            </Icon>
          </Link>
          <Link>
            <Icon size="md">
              <PiThreadsLogo />
            </Icon>
          </Link>
        </Card.Footer>
      </Card.Root>
    </Box>
  );
}
