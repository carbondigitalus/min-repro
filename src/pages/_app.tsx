// NPM Modules
import React from 'react';
import type { AppProps } from 'next/app';

// Custom Modules
import '@/assets/scss/style.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
