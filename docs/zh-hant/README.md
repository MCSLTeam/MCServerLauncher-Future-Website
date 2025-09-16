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
      tagline: 全新伺服器管理工具
      text: MCSL 的全新版本。完全重新設計，功能全面，簡單上手。
      # actions:
      #   -
      #     theme: brand
      #     text: 快速開始 →
      #     link: /guide/intro/
  -
    type: features
    features:
      -
        title: 性能大提升
        icon: ⚡
        details: 使用 .NET 與 Nuxt.js 完全重寫，佔用小，運行快。
      -
        title: 多語言支援
        icon: 🌏
        details: 支援簡中/繁中/英語/日語/俄語。
      -
        title: 深耕底層協議
        icon: 🔒
        details: 情報瞭如指掌，實例不離手中。
      -
        title: 簡易化部署
        icon: 📝
        details: 步驟明瞭，輕鬆開服。
  -
    type: text-image
    title: WPF 啟動器
    description: 功能豐富，滿足各種需求。
    image: https://images.mcsl.com.cn/new/MCServerLauncherFuture.webp
    list:
      -
        title: 支援各種實例類型
        description: 無論是 Minecraft，Terraria，Frp 還是別的類型，統統不在話下。
      -
        title: 程序守護分離
        description: 控制器 + 守護程序的架構，為您的實例安全保駕護航。
      -
        title: 資源一鍵下載
        description: 連結五大資源站，一鍵下載所需資源（暫時僅支援 Minecraft）。
  -
    type: image-text
    title: WPF 控制台
    description: 一目瞭然，看管即時到位。
    image: https://images.mcsl.com.cn/new/MCServerLauncherConsole.webp
    list:
      -
        title: 實例看板
        description: 資源佔用，宿主狀況，一目瞭然。
      -
        title: 檔案管理
        description: 採用類似 Windows 檔案資源管理器樣式，給您最貼切的體驗。
      -
        title: 事件觸發器
        description: 自研事件觸發系統，省事省心。
  -
    type: text-image
    title: Web 網頁面板
    description: 開服不再局限，便利盡在手邊。
    image: /images/mcsl-future-web.svg
    list:
      -
        title: JWT 驗證
        description: 安全性極高的使用者驗證，守護您的每一份資料。
      -
        title: 開箱即用
        description: 不再局限於 Windows 客戶端，網頁面板同樣流光溢彩。
      -
        title: Element Plus 強力驅動
        description: 舒適的設計，養眼的介面。
  -
    type: image-text
    title: .NET 6.0 守護程序
    description: 加密護航，安全保障。
    image: https://images.mcsl.com.cn/new/MCServerLauncherDaemon.webp
    list:
      -
        title: RPC 通訊
        description: 既快、又準、還狠。
      -
        title: 檔案傳輸
        description: 一鍵管理實例，何來繁瑣之說？
      -
        title: 事件管理
        description: 省事省心，安守本分。
  -
    type: custom
---
<CardGrid>
  <RepoCard repo="MCSLTeam/MCServerLauncher-Future" />
  <RepoCard repo="MCSLTeam/MCServerLauncher-Future-Web" />
</CardGrid>