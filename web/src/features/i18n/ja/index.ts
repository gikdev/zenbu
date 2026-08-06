import type { Translation } from '../i18n-types.js'

const ja = {
  welcome: {
    title: 'ぜンブ',
    start: '始める！',
  },

  writingArea: {
    title: '入力エリア',
    placeholder: '何か書いてください…',
    clearConfirm: 'すべての内容を消去しますか？',
    fileNamePrompt: 'ファイル名:',
    description: '快適に書き込めるエリア',
    moreOptionsDialogTitle: 'その他のオプション',
    removeEverything: 'すべて削除',
    downloadAsFile: 'ファイルとしてダウンロード',
    toggleLineWrap: '折り返し表示の切り替え',
    toggleTheme: 'テーマの切り替え',
  },

  timeLog: {
    title: 'タイムログ',
    description: 'シンプルな作業集中タイマー',
    clearSessionsConfirm: 'すべてのセッションをクリアしますか？',
    totalDuration: '合計時間',
    totalSessions: 'セッション数',
    goHome: 'ホームへ戻る',
    reset: 'リセット',
  },

  phrasePlayer: {
    title: 'フレーズプレーヤー',
    description: 'フレーズ付き音楽プレーヤー',
    launchSection: {
      player: {
        title: 'プレーヤー',
        description: '設定済みの曲を再生します。',
      },
      editor: {
        title: 'エディター',
        description: '曲を設定します（新規／編集）。',
      },
      home: {
        title: 'ホーム',
        description: 'ホームに戻ります。',
      },
    },
  },

  accountManager: {
    title: 'アカウント管理',
    description: 'アカウントを管理します。',
  },

  settings: {
    title: '設定',
    description: 'ぜンブの全体設定。',
    wipNote: '開発中です。',

    sections: {
      language: {
        title: '言語',
      },
      theme: {
        title: 'テーマ',
        auto: '自動',
        dark: 'ダーク',
        light: 'ライト',
      },
      data: {
        title: 'データ',
        import: 'インポート',
        export: 'エクスポート',
        reset: 'リセット',
      },
    },
  },
} satisfies Translation

export default ja
