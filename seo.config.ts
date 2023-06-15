import { DefaultSeoProps } from 'next-seo';

const SEOConfig: DefaultSeoProps = {
  openGraph: {
    description: 'Veteran business and entertainment single point of reference.',
    locale: 'en_US',
    images: [
      {
        alt: 'Veteran Database Logo',
        type: 'image/png',
        url: 'https://uploads.veterandb.com/military/logo-green.png'
      }
    ],
    siteName: 'Veteran Database',
    type: 'website',
    url: 'https://veterandb.com/'
  },
  twitter: {
    handle: '@VeteranDatabase',
    site: '@VeteranDatabase',
    cardType: 'summary_large_image'
  }
};

export default SEOConfig;
