module.exports = {
  siteMetadata: {
    title: 'Documentation | Project Pandora',
    description: '',
    keywords: 'project pandora, documentation',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design Gatsby Theme',
        icon: 'src/images/favicon-32x32.png',
        short_name: 'Gatsby Theme Carbon',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0062ff',
        display: 'browser',
      },
    },
    'gatsby-theme-carbon',
  ],
};
