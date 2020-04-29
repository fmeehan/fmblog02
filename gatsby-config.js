module.exports = {
  siteMetadata: {
    siteTitle: 'Les ruses de Meehan',
    siteDescription: 'François Meehan, Professionel en TI, Photographe et Pêcheur',
    siteImage: '/banner.png', // main image of the site for metadata
    siteUrl: 'https://francoismeehan.me',
    pathPrefix: '/',
    siteLanguage: 'fr',
    ogLanguage: `fr_CA`,
    author: 'François Meehan', // for example - 'Ivan Ganev'
    authorDescription: 'Informaticien, Photographe, Pêcheur...', // short text about the author
    avatar: '/avatar.png',
    twitterSite: '', // website account on twitter
    twitterCreator: '', // creator account on twitter
    social: [
      {
        icon: `at`,
        url: `mailto:francois@francoismeehan.me`
      },
      {
        icon: `twitter`,
        url: `https://twitter.com/fmeehan`
      },
      {
        icon: `linkedin`,
        url: `https://www.linkedin.com/in/fran%C3%A7ois-meehan-4468608b/`
      },
      {
        icon: `flickr`,
        url: `https://www.flickr.com/photos/12149783@N04/`
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text for translate
          feedShowMoreButton: 'items suivants',
          feedSearchPlaceholder: 'recherche',
          cardReadMoreButton: 'lire la suite →',
          allTagsButton: 'all tags'
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: true,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '🔗 '
            }
          }
        },
        feedSearch: {
          symbol: '🔍'
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chronoblog Gatsby Theme`,
        short_name: `Chronoblog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-158616423-1'
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `les-ruses-de-meehan`
      }
    },
  ],
}