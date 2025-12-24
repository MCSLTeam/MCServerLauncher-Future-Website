import { type UserConfig, defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'

// why dev & prod shows different? Fuck U.
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
    '/ja/': { lang: 'ja-JP' },
    '/zh-hant/': { lang: 'zh-TW' },
    '/ru/': { lang: 'ru-RU' },
  },
  theme: plumeTheme({
    logo: 'https://images.mcsl.com.cn/new/MCServerLauncherFuture.webp',
    hostname: "https://future.mcsl.com.cn",
    autoFrontmatter: false,
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        footer: { message: "<div style='text-align: center;'><img src='https://img.fastmirror.net/s/2025/09/17/68c99c017ef02.png' style='height: 30px; margin: 0 auto; margin-bottom: 20px; display: block;'></img></div><a target='_blank' href='https://beian.miit.gov.cn/'>粤ICP备2025436238号-2</a>", "copyright": "© 2022-2026 <a href='https://mcsl.com.cn'>MCSL开发组</a> 保留所有权利。" },
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
        footer: { message: "<div style='text-align: center;'><img src='https://img.fastmirror.net/s/2025/09/17/68c99c017ef02.png' style='height: 30px; margin: 0 auto; margin-bottom: 20px; display: block;'></img></div><a target='_blank' href='https://beian.miit.gov.cn/'>粤ICP备2025436238号-2</a>", "copyright": "© 2022-2026 <a href='https://mcsl.com.cn'>MCSLTeam</a>. All rights reserved. " },
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
      },
      '/ja/': {
        selectLanguageName: '日本語',
        footer: { message: "<div style='text-align: center;'><img src='https://img.fastmirror.net/s/2025/09/17/68c99c017ef02.png' style='height: 30px; margin: 0 auto; margin-bottom: 20px; display: block;'></img></div><a target='_blank' href='https://beian.miit.gov.cn/'>粤ICP备2025436238号-2</a>", "copyright": "© 2022-2026 <a href='https://mcsl.com.cn'>MCSLTeam</a>. 全著作権所有。" },
        navbar: [
          {
            text: 'ホーム',
            link: '/ja/',
            icon: 'heroicons:home',
          },
          {
            text: '利用規約',
            link: '/ja/eula',
            icon: 'f7:doc-text-fill',
          },
          {
            text: 'ダウンロード',
            link: '/ja/download',
            icon: 'material-symbols:download',
          },
          {
            text: 'リンク',
            link: '/ja/links',
            icon: 'eva:link-fill',
          },
        ],
      },
      '/zh-hant/': {
        selectLanguageName: '繁體中文',
        footer: { message: "<div style='text-align: center;'><img src='https://img.fastmirror.net/s/2025/09/17/68c99c017ef02.png' style='height: 30px; margin: 0 auto; margin-bottom: 20px; display: block;'></img></div><a target='_blank' href='https://beian.miit.gov.cn/'>粤ICP备2025436238号-2</a>", "copyright": "© 2022-2026 <a href='https://mcsl.com.cn'>MCSL開發組</a> 保留所有權利。" },
        navbar: [
          {
            text: '主頁',
            link: '/zh-hant/',
            icon: 'heroicons:home',
          },
          {
            text: '使用者協議',
            link: '/zh-hant/eula',
            icon: 'f7:doc-text-fill',
          },
          {
            text: '下載',
            link: '/zh-hant/download',
            icon: 'material-symbols:download',
          },
          {
            text: '友情連結',
            link: '/zh-hant/links',
            icon: 'eva:link-fill',
          },
        ],
      },
      '/ru/': {
        selectLanguageName: 'Русский',
        footer: { message: "<div style='text-align: center;'><img src='https://img.fastmirror.net/s/2025/09/17/68c99c017ef02.png' style='height: 30px; margin: 0 auto; margin-bottom: 20px; display: block;'></img></div><a target='_blank' href='https://beian.miit.gov.cn/'>粤ICP备2025436238号-2</a>", "copyright": "© 2022-2026 <a href='https://mcsl.com.cn'>MCSLTeam</a>. Все права защищены." },
        navbar: [
          {
            text: 'Главная',
            link: '/ru/',
            icon: 'heroicons:home',
          },
          {
            text: 'Лицензия',
            link: '/ru/eula',
            icon: 'f7:doc-text-fill',
          },
          {
            text: 'Скачать',
            link: '/ru/download',
            icon: 'material-symbols:download',
          },
          {
            text: 'Ссылки',
            link: '/ru/links',
            icon: 'eva:link-fill',
          },
        ],
      }
    },
  }),
  bundler: viteBundler(),
}) as UserConfig
