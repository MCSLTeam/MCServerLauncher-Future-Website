import { type UserConfig, defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'https://images.mcsl.com.cn/new/MCServerLauncherFuture.webp' }]
  ],
  lang: 'zh-CN',
  title: "MCSL Future",
  description: 'MCSL 的全新版本。完全重新设计，功能全面，简单上手。',
  locales: {
    // 配置 不同 path 下的语言
    '/': { lang: 'zh-CN' },
    '/en/': { lang: 'en-US' },
  },
  theme: plumeTheme({
    logo: 'https://images.mcsl.com.cn/new/MCServerLauncherFuture.webp',
    hostname: "https://future.mcsl.com.cn",
    autoFrontmatter: false,
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        footer: { message: "<a target='_blank' href='https://beian.miit.gov.cn/'>鲁ICP备2023001164号-2</a></br>本站由 木韩网络 提供 CDN 加速与防御支持。", "copyright": "© 2022-2024 <a href='https://mcsl.com.cn'>MCSL开发组</a> 保留所有权利。" },
        navbar: [
          {
            text: '主页',
            link: '/',
            icon: 'heroicons:home',
          },
          {
            text: '用户协议',
            link: '/eula',
            icon: 'f7:doc-text-fill',
          },
          {
            text: '下载',
            link: '/download',
            icon: 'material-symbols:download',
          },
          {
            text: '友情链接',
            link: '/links',
            icon: 'eva:link-fill',
          },
        ],
      },
      '/en/': {
        selectLanguageName: 'English',
        footer: { message: "<a target='_blank' href='https://beian.miit.gov.cn/'>鲁ICP备2023001164号-2</a></br>This site is supported by 木韩网络 for CDN acceleration and defense.", "copyright": "© 2022-2024 <a href='https://mcsl.com.cn'>MCSLTeam</a>. All rights reserved." },
        navbar: [
          {
            text: 'Home',
            link: '/en/',
            icon: 'heroicons:home',
          },
          {
            text: 'Eula',
            link: '/en/eula',
            icon: 'f7:doc-text-fill',
          },
          {
            text: 'Download',
            link: '/en/download',
            icon: 'material-symbols:download',
          },
          {
            text: 'Links',
            link: '/en/links',
            icon: 'eva:link-fill',
          },
        ],
      }
    },
  }),
  bundler: viteBundler(),
}) as UserConfig