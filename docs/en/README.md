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
      tagline: Brand New Server Management Tool
      text: Future version of MCSL. Redefined, Versatile, Easy to use.
      # actions:
      #   -
      #     theme: brand
      #     text: Get Started →
      #     link: /guide/intro/
  -
    type: features
    features:
      -
        title: Improved Performance
        icon: ⚡
        details: Completely rewritten using .NET and Nuxt.js, it is lightweight and runs fast.
      -
        title: Multi-language Support
        icon: 🌏
        details: Officially supports 29 languages, making internationalization effortless.
      -
        title: Persistent Security
        icon: 🔒
        details: Unique communication protocol and data encryption for enhanced security.
      -
        title: Simplified Deployment
        icon: 📝
        details: Clear steps for easy server setup.
  -
    type: text-image
    title: WPF Launcher
    description: Versatility to meet various needs.
    image: https://images.mcsl.com.cn/new/MCServerLauncherFuture.webp
    list:
      -
        title: Support for Various Instance Types
        description: Whether it's Minecraft, Terraria, Frp, or any other type, it's all covered.
      -
        title: Process Daemon Separation
        description: Controller + Daemon process architecture to ensure instance safety.
      -
        title: Convenient Resource Download
        description: Links to five major resource sites for easy resource downloading (currently only supports Minecraft).
  -
    type: image-text
    title: WPF Console
    description: Clear and real-time monitoring.
    image: https://images.mcsl.com.cn/new/MCServerLauncherConsole.webp
    list:
      -
        title: Instance Dashboard
        description: Resource usage, host status, all at a glance.
      -
        title: File Management
        description: Windows File Explorer-style interface for the most intuitive experience.
      -
        title: Event Trigger
        description: Self-developed event triggering system for convenience.
  -
    type: text-image
    title: Web Panel
    description: No more limitations, convenience at your fingertips.
    image: /images/mcsl-future-web.svg
    list:
      -
        title: JWT Authentication
        description: Highly secure user authentication to protect your data.
      -
        title: Ready to Use
        description: Not limited to Windows client, the web panel is equally stunning.
      -
        title: Powered by Element Plus
        description: Comfortable design and visually appealing interface.
  -
    type: image-text
    title: .NET 6.0 Daemon
    description: Encryption protection for enhanced security.
    image: https://images.mcsl.com.cn/new/MCServerLauncherDaemon.webp
    list:
      -
        title: RPC Communication
        description: Fast, accurate, and reliable.
      -
        title: File Transfer
        description: One-click instance management, no more hassle.
      -
        title: Event Management
        description: Convenient and worry-free, staying true to its purpose.
  -
    type: custom
---
<CardGrid>
  <RepoCard repo="MCSLTeam/MCServerLauncher-Future" />
  <RepoCard repo="MCSLTeam/MCServerLauncher-Future-Web" />
</CardGrid>