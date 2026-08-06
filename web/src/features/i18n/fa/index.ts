import type { Translation } from '../i18n-types.js'

const fa = {
  welcome: {
    title: 'زنبو',
    slogan: '🎯 هر بار فقط یک کار',
    description: 'این برنامه به شما کمک می‌کنه که روی یه کار تمرکز کنین و تمومش کنین.',
    start: 'بزن بریم!',
  },

  settings: {
    title: 'تنظیمات',
    wipNote: 'این بخش در حال توسعه (ساخت) هست.',

    sections: {
      language: {
        title: 'زبان',
      },
      theme: {
        title: 'تم',
        auto: 'خودکار',
        dark: 'تاریک',
        light: 'روشن',
      },
      data: {
        title: 'داده‌ها',
        import: 'وارد کردن',
        export: 'خروجی گرفتن',
        reset: 'ریست',
      },
    },
  },
} satisfies Translation

export default fa
