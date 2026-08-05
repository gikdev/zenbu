import type { Translation } from '../i18n-types.js'

const fa = {
  welcome: {
    title: 'ایشّین',
    slogan: '🎯 هر بار فقط یک کار',
    description: 'این برنامه به شما کمک می‌کنه که روی یه کار تمرکز کنین و تمومش کنین.',
    start: 'بزن بریم!',
  },

  task: {
    prompt: 'می‌خوای چی‌کار کنی؟',
    start: 'شروع',
    edit: 'ویرایش',
    finish: 'تمام‌کردم',
    cancel: 'لغو',

    helpTitle: 'چطوری کار می‌کنه؟',
    helpDescription:
      'اول یه کار «مشخص» (یعنی نقطه پایان کار واضح باشه) انتخاب کنین. بعد، تمام تمرکز و انرژی‌تون رو روی همون کار بذارین تا تموم بشه. اگر کار خیلی بزرگ یا چند مرحله‌ای به نظر می‌رسه، اول به کارهای کوچیک‌تر تقسیمش کنین.',

    doingTip:
      'تا وقتی که این کار تموم نشده روش تمرکز کنین. اگه کار دیگه‌ای به ذهنتون رسید، سریع اون رو یادداشت و همین کار رو ادامه بدین.',

    toastDone: 'آفرین!',
    toastEmptyTask: 'اول یه کاری رو بنویس',
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
