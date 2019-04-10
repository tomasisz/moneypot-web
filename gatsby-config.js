module.exports = {
  siteMetadata: {
      title: "Hookedin",
      description: "Hookedin, a bitcoin scaling solution",
      url: "https://hookedin.com", // No trailing slash allowed!
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
      `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
          icon: 'static/favicons/android-chrome-512x512.png',
          icons: [
              {
                  src: `/favicons/favicon-16x16.png`,
                  sizes: `16x16`,
                  type: `image/png`,
              },
              {
                  src: `/favicons/android-chrome-192x192.png`,
                  sizes: `192x192`,
                  type: `image/png`,
              },
              {
                  src: `/favicons/android-chrome-512x512.png`,
                  sizes: `512x512`,
                  type: `image/png`,
              },
          ],
      },

    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
      `gatsby-plugin-sass`,



  ],
}
