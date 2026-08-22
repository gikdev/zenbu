import { v4 } from 'uuid'

import type { Anime } from './Anime'

export const animes: Anime[] = [
  {
    id: v4(),
    imageUrl: 'https://animegate.ir/storage/anime/images/2023/14784.webp?v=292',
    title: 'آتلیه کلاه جادوگری',
    tags: ['سریالی'],
    description: 'وقتی اومد کلی سر و صدا کرد... فصل دومش هم دارن می‌سازن.',
    url: 'https://animegate.ir/anime/tongari-boushi-no-atelier-14784',
  },
  {
    id: v4(),
    imageUrl: 'https://animegate.ir/storage/anime/images/2018/10420.webp?v=292',
    title: 'وایولت اورگاردن',
    tags: ['سریالی'],
    description: 'یکی از خوشگل‌ترین انیمه‌هایی که دیدم...',
    url: 'https://animegate.ir/anime/violet-evergarden-10420',
  },
  {
    id: v4(),
    imageUrl: 'https://animegate.ir/storage/anime/images/2026/05/b74049de-30c6-4090-940c-4e03d1902e2c.webp?v=292',
    title: 'حالت جهنمی',
    tags: ['سریالی'],
    url: 'https://animegate.ir/anime/hell-mode-yarikomizuki-no-gamer-wa-hai-settei-no-isek-21567',
    description:
      'داستان یه گیمر که به داخل دنیای یه بازی تناسخ پیدا میکنه در حالی که سختی بازی روی بیشترین حالته... 😂',
  },
  {
    id: v4(),
    imageUrl: 'https://animegate.ir/storage/anime/images/2024/10/1a69f7eb-c9a4-491a-98ad-3fc9882c77aa.webp?v=292',
    title: 'به اوج رسیدن خوره‌ کتاب',
    tags: ['سریالی'],
    url: 'https://animegate.ir/anime/ascendance-of-a-bookworm-20751',
    description: 'جمع کل فصل‌هاش میشه حدود ۶۰ قسمت، واقعا داستان جذابی داره.',
  },
  {
    id: v4(),
    imageUrl: 'https://animegate.ir/storage/anime/images/2026/01/ac0900e7-6623-4ea1-a536-a7f2468553b3.webp?v=292',
    title: 'ماموران چهار فصل: رقصِ بهار',
    tags: ['سریالی'],
    description: 'یه شاهکار دیگه از نویسنده‌ی «وایولت اورگاردن»...',
    url: 'https://animegate.ir/anime/shunkashuutou-daikousha-haru-no-mai-21429',
  },
  {
    id: v4(),
    imageUrl: 'https://animegate.ir/storage/anime/images/2026/01/981fe476-59bb-473c-8580-1bd33bd61e15.webp?v=292',
    title: 'پس شرور داستانِ دست‌وپاچلفتی‌ای هستم',
    tags: ['سریالی'],
    description: 'گول کاورشو خوردم... داستانش واقعا جذابه... هر هفته منتظر قسمت بعدیش می‌مونم 😂',
    url: 'https://animegate.ir/anime/futsutsuka-na-akujo-dewa-gozaimasu-ga-suuguu-chouso-t-21431',
  },
  {
    id: v4(),
    imageUrl: 'https://animegate.ir/storage/anime/images/2026/05/dd23d8cc-928b-4179-98ce-f088c10bcb64.webp?v=292',
    title: 'ویکتوریا، بانوی هزارچهره',
    tags: ['سریالی'],
    url: 'https://animegate.ir/anime/tefuda-ga-oome-no-victoria-21583',
    description: 'داستان یه جاسوسه که میخواد یه زندگی عادی داشته باشه... ولی قرار نیست به این راحتیا باشه...',
  },
]
