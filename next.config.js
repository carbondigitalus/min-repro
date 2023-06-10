const path = require('path');

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'uploads.veterandb.com',
        pathname: '/images/*',
        port: '',
        protocol: 'https'
      },
      {
        hostname: 'uploads.veterandb.com',
        pathname: '/military/*',
        port: '',
        protocol: 'https'
      }
    ]
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path/',
        permanent: false,
        destination: '/:path'
      },
      {
        source: '/ama',
        destination: 'https://us02web.zoom.us/j/82299652955?pwd=MVpxNVd2VjdpWVo5R3lPMGNPTFVCZz09&from=addon ',
        permanent: false
      },
      {
        source: '/ama-signup',
        destination: 'https://share.hsforms.com/1N-uouXYHR6CNsq73I0l7Sw4x2gt',
        permanent: false
      },
      { source: '/businesses', destination: '/business', permanent: true },
      {
        source: '/businesses/:slug',
        destination: '/business/:slug',
        permanent: true
      },
      { source: '/directories', destination: '/directory', permanent: true },
      {
        source: '/directories/:slug',
        destination: '/directory/:slug',
        permanent: true
      },
      { source: '/feedback', destination: 'https://roadmap.veterandb.com', permanent: true },
      { source: '/non-profit', destination: '/nonprofit', permanent: true },
      {
        source: '/non-profit/:slug',
        destination: '/nonprofit/:slug',
        permanent: true
      },
      { source: '/podcasts', destination: '/podcast', permanent: true },
      {
        source: '/podcasts/:slug',
        destination: '/podcast/:slug',
        permanent: true
      },
      { source: '/roadmap', destination: 'https://roadmap.veterandb.com', permanent: true },
      { source: '/sitemap', destination: '/sitemap.xml', permanent: true },
      { source: '/sitemaps.xml', destination: '/sitemap.xml', permanent: true },
      { source: '/support', destination: 'https://support.veterandb.com', permanent: true },
      {
        source: '/verify',
        destination:
          'https://forms.office.com/pages/responsepage.aspx?id=2HI0GalSLEqs4adO-VsnePJuaraJWetIkCKf4FnJyPVUREpWSzNWVDg2OE9MVjJQRTlJN1MxUjFTUy4u',
        permanent: true
      }
    ];
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
};

module.exports = nextConfig;
