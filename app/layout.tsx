import { type Metadata } from 'next';
import localFont from 'next/font/local';

import { type PropsWithChildren } from 'react';

import QueryProvider from '@/providers/query-provider';

import './globals.css';

const wantedSansVariable = localFont({
  src: '../public/fonts/WantedSansVariable.woff2',
  display: 'swap',
});

const metadata: Metadata = {
  title: 'Surveey',
  description: '우테코 따라잡기 두번째 구현과제',
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="ko-KR">
      <QueryProvider>
        <body className={wantedSansVariable.className}>{children}</body>
      </QueryProvider>
    </html>
  );
};

export { metadata };
export default RootLayout;
