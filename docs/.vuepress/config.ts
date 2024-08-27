import { type UserConfig, defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'https://images.mcsl.com.cn/new/MCServerLauncherFuture.png' }]
  ],
  lang: 'zh-CN',
  titleTemplate: 'MCServerLauncher Future',
  title: "MCServerLauncher Future - 新一代服务器管理工具",
  description: 'MCSL 的全新版本。完全重新设计，功能全面，简单上手。',
  theme: plumeTheme({
    logo: 'https://images.mcsl.com.cn/new/MCServerLauncherFuture.png',
    hostname: "https://future.mcsl.com.cn",
    autoFrontmatter: false,
    footer: { message: "<a target='_blank' href='https://beian.miit.gov.cn/'>鲁ICP备2023001164号-2</a></br>本站由 木韩网络 提供 CDN 加速与防御支持。", "copyright": "© 2022-2024 <a href='https://mcsl.com.cn'>MCSL开发组</a> 保留所有权利。" },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    navbar: [
      { text: '主页', link: '/' },
    ],

    plugins: {
      search: {
        provider: "local",
        options: {
          locales: {
            root: {
              translations: {
                button: {
                  buttonText: '搜索文档',
                  buttonAriaLabel: '搜索文档'
                },
                modal: {
                  noResultsText: '无法找到相关结果',
                  resetButtonTitle: '清除查询条件',
                  footer: {
                    selectText: '选择',
                    selectKeyAriaLabel: '选择',
                    navigateText: '导航',
                    navigateUpKeyAriaLabel: '向上选择',
                    navigateDownKeyAriaLabel: '向下选择',
                    closeText: '关闭',
                    closeKeyAriaLabel: '关闭'
                  }
                }
              }
            }
          }
        }
      }
    },
  }),
  bundler: viteBundler(),
}) as UserConfig