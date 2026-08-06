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
    moreOptionsDialogTitle: 'گزینه‌های بیشتر',
    removeEverything: 'همه چی رو پاک کن',
    downloadAsFile: 'دانلود به صورت فایل',
    toggleLineWrap: 'تغییر خط‌پیچی',
    toggleTheme: 'تغییر تم',
  },

  timeLog: {
    title: 'ثبت زمان',
    description: 'یک تایمر ساده برای تمرکز روی کار',
    clearSessionsConfirm: 'جلسات پاک بشن؟',
    totalDuration: 'طول کل جلسات',
    totalSessions: 'تعداد کل جلسات',
    goHome: 'برو خونه',
    reset: 'ریست',
  },

  phrasePlayer: {
    title: 'فریز پلیر',
    description: 'یک پخش‌کنندهٔ موسیقی با عبارات',
    launchSection: {
      player: {
        title: 'پخش‌کننده',
        description: 'یک آهنگ پیکربندی‌شده را پخش کن.',
      },
      editor: {
        title: 'ویرایشگر',
        description: 'یک آهنگ را پیکربندی کن (جدید / ویرایش).',
      },
      home: {
        title: 'خانه',
        description: 'برو به صفحهٔ اصلی.',
      },
    },
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
