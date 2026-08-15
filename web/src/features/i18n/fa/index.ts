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

  lyricsEditor: {
    title: 'ویرایشگر متن آهنگ',
    description: 'نوشتن، ویرایش و مشاهدهٔ متن آهنگ.',
  },

  lyricsPlayer: {
    title: 'پخش‌کننده متن آهنگ',
    description: 'پلیر متن آهنگ با موسیقی',
  },

  timestampSongPlayer: {
    toastSuccess: 'با موفقیت تنظیم شد.',
    toastError: 'خطایی در رابطه با صدا رخ داده است.',
    removeAudio: 'حذف صدا',
    moreOptions: 'گزینه‌های بیشتر',
    jumpToButton: 'پرش به',
    jumpToPrompt: 'پرش به:',
    audioNotSupported: 'صدا پشتیبانی نمی‌شود.',
    notAvailable: 'ناموجود',
    volume: {
      muted: 'بی‌صدا',
      low: 'کم',
      medium: 'متوسط',
      high: 'بلند',
    },
  },

  sucof: {
    title: 'سوکوف',
    description: 'یک تایمر فوکوس کاری بسیار ساده',
    promptManualMinutes: 'دقیقه برای جلسه دستی وارد کنید:',
    invalidMinutes: 'دقیقه نامعتبر وارد شده است.',
    confirmReset: 'آیا مطمئن هستید که می‌خواهید تمام جلسات سوکوف را بازنشانی کنید؟',
    totalMinutes: 'مجموع دقیقه',
    history: 'تاریخچه',
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
