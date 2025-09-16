---
pageLayout: home
externalLinkIcon: false
config:
  -
    type: hero
    full: true
    background: tint-plate
    tintPlate: 232
    hero:
      name: MCSL Future
      tagline: 全新服务器管理工具
      text: MCSL 的全新版本。完全重新设计，功能全面，简单上手。
      # actions:
      #   -
      #     theme: brand
      #     text: 快速开始 →
      #     link: /guide/intro/
  -
    type: features
    features:
      -
        title: 性能大提升
        icon: ⚡
        details: 使用 .NET 与 Nuxt.js 完全重写，占用小，运行快。
      -
        title: 多语言支持
        icon: 🌏
        details: 支持简中/繁中/英语/日语/俄语。
      -
        title: 深耕底层协议
        icon: 🔒
        details: 情报了如指掌，实例不离手中。
      -
        title: 简易化部署
        icon: 📝
        details: 步骤明了，轻松开服。
  -
    type: text-image
    title: WPF 启动器 
    description: 功能丰富，满足各种需求。
    image: https://images.mcsl.com.cn/new/MCServerLauncherFuture.webp
    list:
      -
        title: 支持各种实例类型
        description: 无论是 Minecraft，Terraria，Frp 还是别的类型，统统不在话下。
      -
        title: 进程守护分离
        description: 控制器 + 守护进程的架构，为您的实例安全保驾护航。
      -
        title: 资源一键下载
        description: 链接五大资源站，一键下载所需资源（暂时仅支持 Minecraft）。
  -
    type: image-text
    title: WPF 控制台
    description: 一目了然，看管实时到位。
    image: https://images.mcsl.com.cn/new/MCServerLauncherConsole.webp
    list:
      -
        title: 实例看板
        description: 资源占用，宿主状况，一目了然。
      -
        title: 文件管理
        description: 采用类似 Windows 文件资源管理器样式，给您最贴切的体验。
      -
        title: 事件触发器
        description: 自研事件触发系统，省事省心。
  -
    type: text-image
    title: Web 网页面板
    description: 开服不再局限，便利尽在手边。
    image: /images/mcsl-future-web.svg
    list:
      -
        title: JWT 验证
        description: 安全性极高的用户验证，守护您的每一份数据。
      -
        title: 开箱即用
        description: 不再局限于 Windows 客户端，网页面板同样流光溢彩。
      -
        title: Element Plus 强力驱动
        description: 舒适的设计，养眼的界面。
  -
    type: image-text
    title: .NET 6.0 守护进程
    description: 加密护航，安全保障。
    image: https://images.mcsl.com.cn/new/MCServerLauncherDaemon.webp
    list:
      -
        title: RPC 通讯
        description: 既快、又准、还狠。
      -
        title: 文件传输
        description: 一键管理实例，何来繁琐之说？
      -
        title: 事件管理
        description: 省事省心，安守本分。
---

<CardGrid>
  <RepoCard repo="MCSLTeam/MCServerLauncher-Future" />
  <RepoCard repo="MCSLTeam/MCServerLauncher-Future-Web" />
</CardGrid>