// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BUtils Documentation',
  tagline: 'This is the official BUtils Documentation — the most used Minecraft: Java Edition Challenge Plugin',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://docs.butils.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'BUtilsPlugin', // Usually your GitHub org/user name.
  projectName: 'Wiki', // Usually your repo name.
  deploymentBranch: 'main',
  trailingSlash: false,

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en'],
  // },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/BUtilsPlugin/butils-wiki/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/BUtilsPlugin/butils-wiki/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/butils-wide.ong',
      navbar: {
        title: 'BUtils',
        logo: {
          alt: 'BUtils',
          src: 'img/butils-icon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'News & Changelogs', position: 'left'},
          {
            href: 'https://butils.net/discord',
            label: 'Download now',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Discord Server',
                to: '/docs/discord/intro',
              },
              {
                label: 'Minecraft Plugin',
                to: '/docs/plugin/intro',
              },
              {
                label: 'Minecraft Server',
                to: '/docs/server/intro',
              }
            ],
          },
          {
            title: 'Find BUtils here',
            items: [
              {
                label: 'Discord',
                href: 'https://butils.net/discord',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/BUtilsPlugin',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/BUtilsPlugin',
              }
            ],
          },
          {
            title: 'BUtils\' Creator',
            items: [
              {
                label: 'Twitch',
                href: 'https://banko.tv/twitch',
              },
              {
                label: 'Twitter',
                href: 'https://banko.tv/twitter',
              }
            ],
          },
          {
            title: 'Rechtliches',
            items: [
              {
                label: 'Datenschutzrklärung',
                to: 'datenschutz',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BUtils Minecraft Challenges Plugin. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
