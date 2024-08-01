import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import localFont from 'next/font/local';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import MainLayout from '@/components/layout/MainLayout';

const pretendard = localFont({
  src: '../../public/static/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${pretendard.variable} font-pretendard`}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </main>
  );
}
