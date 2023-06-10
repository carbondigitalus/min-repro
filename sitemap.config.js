/** @type {import('next-sitemap').IConfig} */
module.exports = {
  additionalPaths: async () => {
    return [
      'https://app.veterandb.com/login',
      'https://app.veterandb.com/register',
      'https://app.veterandb.com/password-forgot',
      'https://app.veterandb.com/password-reset',
      'https://docs.veterandb.com',
      'https://roadmap.veterandb.com',
      'https://support.veterandb.com'
    ];
  },
  alternateRefs: [], // other language page references
  autoLastmod: true, // add <lastmod/> property
  changefreq: 'daily',
  priority: '0.7',
  exclude: [],
  generateIndexSitemap: false, // create index sitemap
  generateRobotsTxt: true, // dynamically create a robots.txt file
  outDir: 'public', // save files here
  robotsTxtOptions: {
    includeNonIndexSitemaps: true,
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'SemrushBot', disallow: '/' },
      { userAgent: 'SemrushBot-SA', disallow: '/' },
      { userAgent: 'MJ12bot', disallow: '/' },
      { userAgent: 'Mediapartners-Google', disallow: '' },
      { userAgent: 'Googlebot-Image', disallow: '' }
    ]
  },
  sitemapBaseFileName: 'sitemap',
  sitemapSize: 5000, // max link count per sitemap file
  siteUrl: 'https://veterandb.com',
  sourceDir: '.next' // next.js build directory
};
