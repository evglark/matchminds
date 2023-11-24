import '../styles/geeks/theme.scss';
import '@/styles/reset.scss';

import cn from 'classnames';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';
import { ReactNode } from 'react';

import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import ClientCookiesProvider from '@/providers/ClientCookiesProvider';

import style from './styles.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'match-minds',
  description: 'match-minds',
};

interface Props {
  children: ReactNode;
}

const RootLayout = async ({ children }: Props): Promise<JSX.Element> => {
  const cookiesStore = cookies();

  return (
    <ClientCookiesProvider value={cookiesStore.getAll()}>
      <html lang="en">
        <body className={cn(inter.className, style.layout)}>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ClientCookiesProvider>
  );
};

export default RootLayout;
