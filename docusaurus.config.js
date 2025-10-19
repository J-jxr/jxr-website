// @ts-check
// `@type` JSDoc 注释允许编辑器自动补全和类型检查
// (当与 `@ts-check` 配对使用时)
// 有多种等效的方式来声明您的 Docusaurus 配置
// 参考: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// 此文件在 Node.js 环境中运行 - 不要在这里使用客户端代码 (浏览器 API, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  // 网站标题，显示在浏览器标签页和导航栏中
  title: 'JXR\'s Blog',
  // 网站标语，通常显示在首页横幅中
  tagline: 'A blog about my life and experiences',
  // 网站图标，显示在浏览器标签页中
  favicon: 'img/favicon.ico',

  // 未来功能标志，参考 https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // 提高与即将到来的 Docusaurus v4 的兼容性
  },

  // 设置您网站的生产环境 URL
  url: 'https://J-jxr.github.io',
  // 设置网站服务的 /<baseUrl>/ 路径名
  // 对于 GitHub pages 部署，通常是 '/<projectName>/'
  baseUrl: '/jxr-website/',

  // GitHub pages 部署配置
  // 如果您不使用 GitHub pages，则不需要这些配置
  organizationName: 'J-jxr', // 通常是您的 GitHub 组织/用户名
  projectName: 'jxr-website', // 通常是您的仓库名称
  deploymentBranch: 'gh-pages', // 固定写这个，部署分支默认是 gh-pages
  trailingSlash: false, // 固定写 false，避免GitHub Pages路由错误

  // 遇到损坏链接时的处理方式：'throw' 抛出错误，'warn' 警告，'ignore' 忽略
  onBrokenLinks: 'throw',
  // 遇到损坏的 Markdown 链接时的处理方式
  onBrokenMarkdownLinks: 'warn',

  // 即使您不使用国际化，也可以使用此字段设置有用的元数据，如 html lang
  // 例如，如果您的网站是中文的，您可能想要将 "en" 替换为 "zh-Hans"
  i18n: {
    defaultLocale: 'zh-Hans', // 默认语言环境
    locales: ['zh-Hans'], // 支持的语言环境列表
  },

  // Docusaurus 预设配置，用于启用不同的功能模块
  presets: [
    [
      'classic', // 使用经典预设，包含文档、博客和主题功能
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // 文档功能配置
        docs: {
          sidebarPath: './sidebars.js', // 侧边栏配置文件路径
          // 请将此更改为您的仓库地址
          // 删除此配置以移除"编辑此页面"链接
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // 博客功能配置
        blog: {
          showReadingTime: true, // 显示阅读时间估算
          feedOptions: {
            type: ['rss', 'atom'], // 支持的订阅源类型
            xslt: true, // 启用 XSLT 转换
          },
          // 请将此更改为您的仓库地址
          // 删除此配置以移除"编辑此页面"链接
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // 用于强制执行博客最佳实践的有用选项
          onInlineTags: 'warn', // 内联标签警告
          onInlineAuthors: 'warn', // 内联作者警告
          onUntruncatedBlogPosts: 'warn', // 未截断博客文章警告
        },
        // 主题配置
        theme: {
          customCss: './src/css/custom.css', // 自定义 CSS 文件路径
        },
      }),
    ],
  ],

  // 主题配置，控制网站的外观和行为
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 替换为您项目的社交卡片图片
      image: 'img/docusaurus-social-card.jpg',
      // 导航栏配置
      navbar: {
        title: 'JXR\'s Website', // 导航栏标题
        logo: {
          alt: 'My Site Logo', // Logo 的 alt 文本
          src: 'img/logo.svg', // Logo 图片路径
        },
        // 导航栏项目配置
        items: [
          {
            type: 'docSidebar', // 文档侧边栏类型
            sidebarId: 'tutorialSidebar', // 侧边栏 ID
            position: 'left', // 位置：左侧
            label: 'Docs', // 显示标签
          },
          {to: '/blog', label: 'Blog', position: 'left'}, // 博客链接
          {
            href: 'https://github.com/J-jxr', // 外部链接
            label: 'GitHub',
            position: 'right', // 位置：右侧
          },
        ],
      },
      // 页脚配置
      footer: {
        style: 'dark', // 页脚样式：深色主题
        // 页脚链接分组
        links: [
          {
            title: 'Docs', // 文档分组标题
            items: [
              {
                label: 'Tutorial', // 链接标签
                to: '/docs/intro', // 内部链接路径
              },
            ],
          },
          {
            title: 'Community', // 社区分组标题
            items: [
              {
                label: 'Stack Overflow', // Stack Overflow 链接
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord', // Discord 社区链接
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X', // X (Twitter) 链接
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More', // 更多链接分组
            items: [
              {
                label: 'Blog', // 博客链接
                to: '/blog',
              },
              {
                label: 'GitHub', // GitHub 仓库链接
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
      },
      // Prism 代码高亮配置
      prism: {
        theme: prismThemes.github, // 浅色主题：GitHub 风格
        darkTheme: prismThemes.dracula, // 深色主题：Dracula 风格
      },
    }),
};

// 导出配置对象，供 Docusaurus 使用
export default config;
