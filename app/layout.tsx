import React from 'react';
import type { Metadata } from 'next';
import { Noto_Sans_TC } from 'next/font/google';
import { Provider } from '@/components/ui/provider';
import './globals.css';

const title = 'CJ Plants';
const description = 'Located in Xinshe, Taichung, CJ Plants was founded by CJ, a grower with a deep passion for agaves and succulents. Built on years of farming experience, each plant is cultivated with care, and the landscapes are thoughtfully designed to suit the environment. It is a place to quietly appreciate the beauty of plants, occasionally welcoming visitors and friends from near and far. Through sharing and exchange, CJ Plants hopes to inspire more people to discover the charm and vitality of these unique species.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: title,
  },
};

const notoSans = Noto_Sans_TC({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={notoSans.className} suppressHydrationWarning>
      <head />
      <body>
        <Provider forcedTheme="dark">
          {children}
        </Provider>
      </body>
    </html>
  );
}
