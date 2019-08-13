module.exports = {
  siteMetadata: {
    title: `Dominik Manowski`,
    description: ``,
    author: `@mowinik`
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "project",
        path: "./data"
      }
    },
    "gatsby-transformer-json",
    {
      resolve: `gatsby-plugin-styled-components`
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    }
  ]
};
