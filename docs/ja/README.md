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
      tagline: 全く新しいサーバー管理ツール
      text: MCSLの次世代バージョン。再定義され、多機能で、使いやすい。
      # actions:
      #   -
      #     theme: brand
      #     text: 始める →
      #     link: /guide/intro/
  -
    type: features
    features:
      -
        title: パフォーマンス向上
        icon: ⚡
        details: .NETとNuxt.jsで完全に書き直し、軽量で高速動作。
      -
        title: 多言語サポート
        icon: 🌏
        details: 簡体字中国語、繁体字中国語、英語、日本語、ロシア語をサポート。
      -
        title: 深いプロトコル統合
        icon: 🔒
        details: 完全な制御と監視、インスタンスを手の届く範囲に。
      -
        title: 簡単なデプロイメント
        icon: 📝
        details: 明確な手順で簡単にサーバーセットアップ。
  -
    type: text-image
    title: WPFランチャー
    description: 様々なニーズに対応する多機能性。
    image: https://images.mcsl.com.cn/new/MCServerLauncherFuture.webp
    list:
      -
        title: 様々なインスタンスタイプのサポート
        description: Minecraft、Terraria、Frp、その他のタイプまで、すべてをカバー。
      -
        title: プロセスデーモン分離
        description: コントローラー + デーモンプロセスアーキテクチャでインスタンスの安全を確保。
      -
        title: 便利なリソースダウンロード
        description: 5つの主要リソースサイトへのリンクで簡単にリソースダウンロード（現在はMinecraftのみサポート）。
  -
    type: image-text
    title: WPFコンソール
    description: 明確でリアルタイムな監視。
    image: https://images.mcsl.com.cn/new/MCServerLauncherConsole.webp
    list:
      -
        title: インスタンスダッシュボード
        description: リソース使用量、ホスト状態を一目で確認。
      -
        title: ファイル管理
        description: Windowsファイルエクスプローラー風のインターフェースで最も直感的な体験。
      -
        title: イベントトリガー
        description: 自社開発のイベントトリガーシステムで便利。
  -
    type: text-image
    title: Webパネル
    description: もう制限はありません、便利さが手の届くところに。
    image: /images/mcsl-future-web.svg
    list:
      -
        title: JWT認証
        description: 高度に安全なユーザー認証でデータを保護。
      -
        title: すぐに使える
        description: Windowsクライアントに限定されず、Webパネルも同様に美しい。
      -
        title: Element Plusで強化
        description: 快適なデザインと視覚的に魅力的なインターフェース。
  -
    type: image-text
    title: .NET 6.0デーモン
    description: セキュリティを強化する暗号化保護。
    image: https://images.mcsl.com.cn/new/MCServerLauncherDaemon.webp
    list:
      -
        title: RPC通信
        description: 高速、正確、そして信頼性。
      -
        title: ファイル転送
        description: ワンクリックでインスタンス管理、もう面倒はありません。
      -
        title: イベント管理
        description: 便利で心配不要、本来の目的に忠実。
  -
    type: custom
---
<CardGrid>
  <RepoCard repo="MCSLTeam/MCServerLauncher-Future" />
  <RepoCard repo="MCSLTeam/MCServerLauncher-Future-Web" />
</CardGrid>