// NPM Modules
import { ThemeProvider } from '@mui/material';
import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

// Custom Modules
import customTheme from '@/config/mui.theme';

export default class Document extends React.Component {
  private jsonSchema() {
    return {
      __html: `{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": "https://veterandb.com/",
            "url": "https://veterandb.com/",
            "name": "The Last Veteran LZ | Veteran Database",
            "isPartOf": {
              "@id": "https://veterandb.com/#website"
            },
            "about": {
              "@id": "https://veterandb.com/#organization"
            },
            "primaryImageOfPage": {
              "@id": "https://veterandb.com/#primaryimage"
            },
            "image": {
              "@id": "https://veterandb.com/#primaryimage"
            },
            "thumbnailUrl": "https://uploads.veterandb.com/military/default-cover.jpg",
            "datePublished": "2020-12-09T05:32:57+00:00",
            "dateModified": "2023-05-09T22:28:07+00:00",
            "description": "The last LZ you'll ever need. The original idea for VeteranDB was to take the IMDB concept, and apply it to Veteran Business and Entertainment. It became very clear, during our first round of feedback, that this would be so much more.",
            "breadcrumb": {
              "@id": "https://veterandb.com/#breadcrumb"
            },
            "inLanguage": "en-US",
            "potentialAction": [
              {
                "@type": "ReadAction",
                "target": [
                  "https://veterandb.com/"
                ]
              }
            ]
          },
          {
            "@type": "ImageObject",
            "inLanguage": "en-US",
            "@id": "https://veterandb.com/#primaryimage",
            "url": "https://uploads.veterandb.com/military/default-cover.jpg",
            "contentUrl": "https://uploads.veterandb.com/military/default-cover.jpg",
            "width": 1168,
            "height": 1200
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://veterandb.com/#breadcrumb",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home"
              }
            ]
          },
          {
            "@type": "WebSite",
            "@id": "https://veterandb.com/#website",
            "url": "https://veterandb.com/",
            "name": "Website",
            "description": "The Last LZ You'll Ever Need",
            "publisher": {
              "@id": "https://veterandb.com/#organization"
            },
            "potentialAction": [
              {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://veterandb.com/?s={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            ],
            "inLanguage": "en-US"
          },
          {
            "@type": "Organization",
            "@id": "https://veterandb.com/#organization",
            "name": "Veteran Database",
            "url": "https://veterandb.com/",
            "logo": {
              "@type": "ImageObject",
              "inLanguage": "en-US",
              "@id": "https://veterandb.com/#/schema/logo/image/",
              "url": "https://uploads.veterandb.com/military/logo-green.png",
              "contentUrl": "https://uploads.veterandb.com/military/logo-green.png",
              "width": 931,
              "height": 100,
              "caption": "Veteran Database"
            },
            "image": {
              "@id": "https://veterandb.com/#/schema/logo/image/"
            }
          }
        ]
      }`
    };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <script type='application/ld+json' key='global-json-ld' dangerouslySetInnerHTML={this.jsonSchema()} />
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
