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

  lyricsEditor: {
    title: '歌詞エディター',
    description: '歌詞の作成、編集、表示ができます。',
  },

  lyricsPlayer: {
    title: '歌詞プレイヤー',
    description: '音楽付き歌詞プレイヤー',
  },

  timestampSongPlayer: {
    toastSuccess: '正常に設定されました。',
    toastError: 'オーディオに関連するエラーが発生しました。',
    removeAudio: '音声を削除',
    moreOptions: 'その他のオプション',
    jumpToButton: 'ジャンプ',
    jumpToPrompt: 'ジャンプ先:',
    audioNotSupported: '音声はサポートされていません。',
    notAvailable: '該当なし',
    volume: {
      muted: 'ミュート',
      low: '低',
      medium: '中',
      high: '高',
    },
  },

  sucof: {
    title: 'スコフ',
    description: '非常にシンプルな作業集中タイマー',
    promptManualMinutes: '手動セッションの分数を入力してください:',
    invalidMinutes: '無効な分数が入力されました。',
    confirmReset: '全てのソクフセッションをリセットしてもよろしいですか？',
    totalMinutes: '合計分数',
    history: '履歴',
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
