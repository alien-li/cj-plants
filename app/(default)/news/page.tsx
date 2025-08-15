import React from 'react';
import type { Metadata } from 'next';
import {
  Box,
  Span,
  Link,
  Timeline,
} from '@chakra-ui/react';
import { MdOutlineFeed, MdOutlineVideoLibrary } from 'react-icons/md';

const title = 'News｜CJ Plants';

export const metadata: Metadata = {
  title,
  openGraph: {
    title,
  },
};

export default async function Page() {
  const items = [
    {
      title: 'SO! EYEWEAR',
      date: 'Feb 13, 2025',
      href: 'https://www.soeyewear.com/Article/Detail/6143',
      icon: MdOutlineFeed,
      description:
        '隱藏於台中新社的龍舌蘭朝聖地「CJ Plants」遇上日本潮流眼鏡「BJ Classic Collection」',
    },
    {
      title: 'TBS YouTuboo',
      date: 'Sep 6, 2024',
      href: 'https://www.youtube.com/watch?v=kASQcj0hAHk',
      icon: MdOutlineVideoLibrary,
      description: '森田剛､多肉植物アガベを求めて本場台湾へ『ララLIFE』',
    },
    {
      title: 'TRAVELER Luxe',
      date: 'Jun 3, 2022',
      href: 'https://www.travelerluxe.com/article/desc/210006351',
      icon: MdOutlineFeed,
      description:
        '台中龍舌蘭狂野聖殿 CJ Plants，香港與日本粉絲的隱藏版聖地！',
    },
    {
      title: 'GQ Taiwan',
      date: 'Jul 5, 2021',
      href: 'https://www.gq.com.tw/life/article/%E6%A4%8D%E7%89%A9cj-plants',
      icon: MdOutlineFeed,
      description:
        '【潮植物】龍舌蘭問他就對了，CJ Plants 為什麼變成日本和香港龍迷朝聖地？',
    },
  ];

  return (
    <Box>
      <Timeline.Root maxW="400px" variant="plain">
        {items.map((item, index) => (
          <Timeline.Item key={index}>
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator>
                <item.icon size="20px" />
              </Timeline.Indicator>
            </Timeline.Connector>
            <Timeline.Content>
              <Timeline.Title>
                {item.title}
                <Span color="fg.muted" textStyle="xs">
                  {item.date}
                </Span>
              </Timeline.Title>
              {/* <Timeline.Description>{item.date}</Timeline.Description> */}
              <Link
                href={item.href}
                target="_blank"
                textStyle="sm"
                data-state="open"
                _open={{
                  animationName: 'fade-in, slide-from-bottom',
                  animationDuration: '1s',
                }}
              >
                {item.description}
              </Link>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline.Root>
    </Box>
  );
}
