import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Immersed in Code',
  tagline: 'Simplicity is the soul of efficiency.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://immersedincode.io.vn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Immersed in Code', // Usually your GitHub org/user name.
  projectName: 'Blogs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: 'gh-pages',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    'docusaurus-plugin-image-zoom',
    "docusaurus-lunr-search",
    // Use custom blog plugin
    [
      './plugins/blog-plugin',
      {
        id: 'blog',
        routeBasePath: 'blog',
        path: './blog',
        blogTitle: 'My Awesome Blog',
        blogDescription: 'A great blog with homepage Docusaurus integration',
        showReadingTime: true,
        blogSidebarTitle: 'All posts',
        blogSidebarCount: 'ALL',
      },
    ]
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        // {
        //   showReadingTime: true,
        //   blogSidebarTitle: 'All posts',
        //   blogSidebarCount: 'ALL',
        //   // feedOptions: {
        //   //   type: 'all',
        //   //   copyright: `Copyright © ${new Date().getFullYear()} Bach Pham, Inc. Built with Docusaurus.`,
        //   //   createFeedItems: async (params) => {
        //   //     const {blogPosts, defaultCreateFeedItems, ...rest} = params;
        //   //     return defaultCreateFeedItems({
        //   //       // keep only the 10 most recent blog posts in the feed
        //   //       blogPosts: blogPosts.filter((item, index) => index < 10),
        //   //       ...rest,
        //   //     });
        //   //   },
        //   // },
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-2VH0PJCNSH',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: '/img/00_welcome/featured.png',
    navbar: {
      title: 'Immersed in Code',
      logo: {
        alt: 'Immersed in Code Logo',
        src: 'img/logo.png',
      },
      items: [
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/about', label: 'About', position: 'left'},
        {
          href: 'https://github.com/pxuanbach',
          label: 'My GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'ImmersedinCode Blog',
          items: [
            {
              html: '<p>Simplicity is the soul of efficiency.</p>'
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/pxuanbach',
            },
            {
              label: 'Gmail',
              href: 'mailto:pxuanbach1412@gmail.com',
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/in/pham-bach-97a389217/',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'About',
              to: '/about'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bach Pham, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.jettwaveLight,
      darkTheme: prismThemes.jettwaveDark,
    },
    zoom: {
      selector: '.markdown img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
      config: {
        margin: 50
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
      }
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
