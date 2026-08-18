import type { Language } from './Language'

export const languages: Language[] = [
  {
    id: 'ir',
    languageNumber: 1,
    name: 'فارسی',
    level: 'بومی',
    description: 'فرد بومی هستم، تسلط کامل دارم.',
  },
  {
    id: 'us',
    languageNumber: 2,
    name: 'انگلیسی',
    level: 'مسلط',
    description:
      'فرد دوزبانه (bilingual) و مسلط (fluent) هستم. سطح CEFR من حدودا بین B2 و C1 هست. لهجه‌ی من هم لهجه‌ی آمریکایی هست.',
  },
  {
    id: 'jp',
    languageNumber: 3,
    name: 'ژاپنی',
    level: 'تازه کار',
    description: 'سطحم توی رده‌بندی JLPT حدود N5 هستش.',
  },
  {
    id: 'iq',
    languageNumber: '?',
    name: 'عربی',
    level: 'بعدا',
    description: 'بعدا می‌خوام یاد بگیرم.',
  },
  {
    id: 'es',
    languageNumber: '?',
    name: 'اسپانیایی',
    level: 'بعدا',
    description: 'بعدا می‌خوام یاد بگیرم.',
  },
]
