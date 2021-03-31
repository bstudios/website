/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    title: "Bithell Studios Website",
    titleTemplate: "%s | Bithell Studios Ltd.",
    description:
      "Bithell Studios is a creative development studio based in the UK run by James Bithell",
    author: "bstudios",
    url: "https://studios.jbithell.com",
    image: "/images/defaultImage.png",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
  ],
};
