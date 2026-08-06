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
  },

  timeLog: {
    title: 'タイムログ',
    description: 'シンプルな作業集中タイマー',
    clearSessionsConfirm: 'すべてのセッションをクリアしますか？',
    totalDurationLabel: '合計時間',
    totalSessionsLabel: 'セッション数',
  },

  phrasePlayer: {
    title: 'フレーズプレーヤー',
    description: 'フレーズ付き音楽プレーヤー',
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
