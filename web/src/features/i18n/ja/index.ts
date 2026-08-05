import type { Translation } from '../i18n-types.js'

const ja = {
  welcome: {
    title: '一心',
    slogan: '🎯 一度にひとつだけ',
    description: 'このアプリは、一つのタスクが終わるまで集中できるようにサポートします。',
    start: '始める！',
  },

  task: {
    prompt: '何をしますか？',
    start: '開始',
    edit: '編集',
    finish: '完了',
    cancel: 'キャンセル',

    helpTitle: '使い方',
    helpDescription:
      '終わりがはっきりしたタスクを一つ選びましょう。そのタスクが終わるまで集中します。大きすぎる場合は、先に小さなタスクへ分けてください。',

    doingTip: 'このタスクが終わるまで集中しましょう。別のタスクを思いついたら、メモして続けてください。',

    toastDone: 'お疲れさま！',
    toastEmptyTask: 'まず何か入力してください！',
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
