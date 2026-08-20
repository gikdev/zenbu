import type { SlashPage } from './SlashPage'

export const slashPages: SlashPage[] = [
  // { slash: 'about', title: 'درباره' },
  { slash: 'blank', title: 'خالی' },
  { slash: 'bookmarks', title: 'نشانک‌ها' },
  // { slash: 'coffee', title: 'قهوه' },
  { slash: 'colophon', title: 'مشخصات فنی' },
  // { slash: 'hello', title: 'سلام' },
  // { slash: 'ideas', title: 'ایده‌ها' },
  // { slash: 'interests', title: 'علاقه‌مندی‌ها' },
  { slash: 'languages', title: 'زبان‌ها' },
  { slash: 'nope', title: 'نه' },
  // { slash: 'now', title: 'اکنون' },
  // { slash: 'pricing', title: 'قیمت‌گذاری' },
  { slash: 'questions', title: 'سوالات' },
  // { slash: 'since', title: 'سابقه' },
  { slash: 'slashes', title: 'صفحات اسلش' },
  // { slash: 'someday', title: 'روزی' },
  // { slash: 'uses', title: 'ابزارها' },
  // { slash: 'wish', title: 'آرزوها' },
  { slash: 'yep', title: 'آره' },
].toSorted((a, b) => a.slash.localeCompare(b.slash))
