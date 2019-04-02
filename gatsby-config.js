module.exports = {
  siteMetadata: {
    title: `The Film Harris`,
    description: `Home of the hottest cinematic takes from The Ice Harris – also known in professional circles as Matthew Harrison Steedman`,
    author: `@owenauch`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `reviews`,
        path: `${__dirname}/content/reviews`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
