// NPM Modules
import { ThemeProvider } from '@mui/material';
import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

// Custom Modules
import customTheme from '@/config/mui.theme';

export default class Document extends React.Component {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='icon' href='img/favicon.ico' />
        </Head>
        <ThemeProvider theme={customTheme}>
          <body>
            <Main />
            <NextScript />
          </body>
        </ThemeProvider>
      </Html>
    );
  }
}
