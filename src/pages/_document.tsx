// NPM Modules
import { ThemeProvider } from '@mui/material';
import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

// Custom Modules
import customTheme from '@/config/mui.theme';
import {
  BreadcrumbJsonLd,
  ImageJsonLd,
  LogoJsonLd,
  OrganizationJsonLd,
  SocialProfileJsonLd,
  WebPageJsonLd
} from 'next-seo';

export default class Document extends React.Component {
  render() {
    return (
      <Html lang='en'>
        <BreadcrumbJsonLd
          itemListElements={[
            {
              position: 1,
              name: 'Home',
              item: 'https://veterandb.com'
            }
          ]}
        />
        <ImageJsonLd
          images={[
            {
              contentUrl: 'https://uploads.veterandb.com/military/logo-green.png',
              creator: {
                '@type': 'Organisation',
                name: 'Veteran Database'
              },
              creditText: 'Veteran Database',
              copyrightNotice: '© Veteran Database',
              license: 'https://veterandb.com/legal/terms-conditions'
            }
          ]}
        />
        <LogoJsonLd logo='https://uploads.veterandb.com/military/logo-green.png' url='https://veterandb.com' />

        <OrganizationJsonLd
          type='Organization'
          id='https://veterandb.com/#organization'
          logo='https://uploads.veterandb.com/military/logo-green.png'
          legalName='Veteran Database'
          name='Veteran Database'
          address={{
            streetAddress: '2436 Saddleridge Dr.',
            addressLocality: 'Midway Park',
            addressRegion: 'NC',
            postalCode: '28544',
            addressCountry: 'US'
          }}
          contactPoint={[
            {
              telephone: '+1-704-750-0963',
              contactType: 'Customer Service',
              email: 'hello@veterandb.com',
              availableLanguage: 'English'
            }
          ]}
          sameAs={[
            'https://api.veterandb.com/',
            'https://app.veterandb.com/',
            'https://roadmap.veterandb.com/',
            'https://status.veterandb.com/',
            'https://support.veterandb.com/'
          ]}
          url='https://veterandb.com/'
        />
        <SocialProfileJsonLd
          type='Organization'
          name='Veteran Database'
          url='https://veterandb.com'
          sameAs={[
            'https://www.facebook.com/veterandb',
            'https://www.instagram.com/veterandatabase/',
            'https://www.linkedin.com/company/veterandb/',
            'https://twitter.com/VeteranDatabase',
            'https://www.youtube.com/@VeteranDB'
          ]}
        />
        <WebPageJsonLd
          id='https://veterandb.com/#website'
          description='Veteran business and entertainment single point of reference.'
          lastReviewed='2021-05-26T05:59:02.085Z'
          reviewedBy={{
            type: 'Person',
            name: 'Garmeeh'
          }}
        />
        <Head>
          <Script
            id='google-tag-manager-script'
            strategy='lazyOnload'
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID_GA4}`}
          />
          <Script id='google-tag-manager-events' strategy='lazyOnload'>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID_GA4}');
              `}
          </Script>
          <Script id='facebook-pixel' strategy='lazyOnload'>
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_ANALYTICS_ID_FACEBOOK_PIXEL}');
              fbq('track', 'PageView');
              `}
          </Script>
          <Script id='microsoft-clarity' strategy='lazyOnload'>
            {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_ANALYTICS_ID_MICROSOFT_CLARITY}");
              `}
          </Script>
          <Script id='segment-analytics' strategy='lazyOnload'>
            {`
              !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="${process.env.NEXT_PUBLIC_ANALYTICS_ID_SEGMENT}";;analytics.SNIPPET_VERSION="4.15.3";
              analytics.load("${process.env.NEXT_PUBLIC_ANALYTICS_ID_SEGMENT}");
              analytics.page();
              }}();
              `}
          </Script>
          <Script
            id='plausible-analytics'
            strategy='lazyOnload'
            data-domain='veterandb.com'
            src={'https://plausible.io/js/script.js'}
          />
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
