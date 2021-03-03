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
        name: 'Documentation | Project Pandora',
        icon: 'src/images/favicon-32x32.png',
        short_name: 'Pandora Documentation',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0062ff',
        display: 'browser',
      },
    },
    'gatsby-theme-carbon',
  ],
};
