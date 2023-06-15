// NPM Modules
import React from 'react';
import type { AppProps } from 'next/app';

// Custom Modules
import '@/assets/scss/style.scss';
import { DefaultSeo } from 'next-seo';
import SEOConfig from '@/../seo.config';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEOConfig} />
      <Component {...pageProps} />
    </>
  );
}
