import type { Translation } from '../i18n-types.js'

const ja = {
  welcome: {
    title: '全部',
    slogan: '🎯 一度にひとつだけ',
    description: 'このアプリは、一つのタスクが終わるまで集中できるようにサポートします。',
    start: '始める！',
  },

  writingArea: {
    title: "入力エリア",
  },

  settings: {
    title: '設定',
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
