// NPM Modules
import { config } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import type { AppProps } from 'next/app';

// NPM Styles
import '@fortawesome/fontawesome-svg-core/styles.css';

// Custom Modules
import { DefaultSeo } from 'next-seo';
import SEOConfig from '@/../seo.config';

// Custom Styles
import '@/assets/scss/style.scss';

// Font Awesome config
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEOConfig} />
      <Component {...pageProps} />
    </>
  );
}
