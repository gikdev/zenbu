import { v4 } from 'uuid'

import { CardPage } from '../common/CardPage'
import { SlashHeader } from '../common/SlashHeader'

interface Interest {
  id: string
  lang: string
  title: string
  description?: string | null
}

const interests: Interest[] = [
  {
    id: v4(),
    lang: 'en',
    title: 'Domain Driven Design (DDD)',
    description:
      'being able to really understand a domain, learn the complex/complicated stuff, and try to simplify and model a software from that, feels really good.',
  },
  {
    id: v4(),
    lang: 'en',
    title: 'DX & Automation',
    description: 'I love it when I have a really nice workflow, and tools that automate the boring stuff for me...',
  },
  {
    id: v4(),
    lang: 'en',
    title: 'Applied Linguistics (e.g. SLA)',
    description: 'learning about languages, language acquisition, and other related topics lights me up.',
  },
  {
    id: v4(),
    lang: 'en',
    title: 'Deconstruction',
    description: 'the act of breaking things down, and then explaining, building, or learning it, is really fun.',
  },
  {
    id: v4(),
    lang: 'en',
    title: 'UI/UX & Product Design',
    description: "because I'd like to make apps that users love to use.",
  },
  { id: v4(), lang: 'fa', title: 'آش رشته', description: 'غذای سنتی محبوبم.' },
  { id: v4(), lang: 'fa', title: 'پیتزا', description: 'غذای ایتالیایی محبوب و معروف!' },
  {
    id: v4(),
    lang: 'fa',
    title: 'انیمه',
    description: 'طراحی‌اش بامزه هست، زبانش هم که ژاپنیه، صدا بازیگرهاشون هم که خیلی توی کارشون ماهر هستن.',
  },
  {
    id: v4(),
    lang: 'fa',
    title: 'ژاپنی',
    description: 'زبان مورد علاقه دومم... صداش، کلماتش، سیستم نوشتاری‌اش، گرامرش... همه‌چیزش خفنه!',
  },
  {
    id: v4(),
    lang: 'fa',
    title: 'تلفظ',
    description: 'چه نحوه تلفظ کلمه توی یه زبون باشه، یا نحوه تلفظ یه خواننده توی آهنگش، چیز جالبیه برام.',
  },
  { id: v4(), lang: 'ja', title: '漢字', description: '…がすごくかっこいいと思います。' },
]

export const InterestsPage = () => {
  return (
    <CardPage>
      <SlashHeader slash='/interests' title='علایق' />

      <div className='flex max-w-2xl flex-col gap-2'>
        {interests.map(item => (
          <p
            key={item.id}
            lang={item.lang}
            dir='auto'
            className='border-brand bg-bg-2 use-lang-font gap-2 rounded-lg border-s-4 p-4'
          >
            <span className='text-text-important font-bold'>
              {item.title}
              {item.description && ': '}
            </span>

            {item.description && <span className=''>{item.description}</span>}
          </p>
        ))}
      </div>
    </CardPage>
  )
}
