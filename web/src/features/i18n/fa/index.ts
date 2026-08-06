import type { Translation } from '../i18n-types.js'

const fa = {
  welcome: {
    title: 'زنبو',
    start: 'بزن بریم!',
  },

  writingArea: {
    title: 'محل نوشتن',
    placeholder: 'چیزی بنویس…',
    clearConfirm: 'همهٔ محتوا پاک بشه؟',
    fileNamePrompt: 'نام فایل:',
    description: 'یه جای راحت برای نوشتن.',
  },

  timeLog: {
    title: 'ثبت زمان',
    description: 'یک تایمر ساده برای تمرکز روی کار',
    clearSessionsConfirm: 'جلسات پاک بشن؟',
    totalDurationLabel: 'طول کل جلسات',
    totalSessionsLabel: 'تعداد کل جلسات',
  },

  phrasePlayer: {
    title: 'فریز پلیر',
    description: 'یک پخش‌کنندهٔ موسیقی با عبارات',
  },

  accountManager: {
    title: 'مدیریت حساب',
    description: 'حساب کاربری‌تو مدیریت کن',
  },

  settings: {
    title: 'تنظیمات',
    description: 'تنظیمات عمومی زنبو.',
    wipNote: 'این بخش در حال ساخته.',

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
