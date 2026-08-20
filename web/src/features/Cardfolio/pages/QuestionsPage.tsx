import { v4 } from 'uuid'

import { CardPage } from '../common/CardPage'
import { SlashHeader } from '../common/SlashHeader'

interface Question {
  id: string
  text: string
  lang: string
}

const questions: Question[] = [
  {
    id: v4(),
    lang: 'fa',
    text: 'چطور میشه یه زبان جدید رو، توی مدت کوتاهی، مسلط شد، به طوری که مسیر لذت‌بخش هم باشه؟',
  },
  {
    id: v4(),
    lang: 'fa',
    text: 'چطور میشه به یه نفر برنامه‌نویسی فرانت‌اند رو یاد بدیم که وارد بازار کار بشه، حتی اگه دانش فنی خاصی هم نداشته باشه...؟',
  },
  {
    id: v4(),
    lang: 'en',
    text: "How could I validate the ideas I get, so I'd not spend a whole week or more building & perfecting something I may not use...?",
  },
  { id: v4(), lang: 'ja', text: '僕は、誰かのそばにいてみたいことは嫌いでもいいのかな…' },
].filter(q => !!q.text.trim())

export const QuestionsPage = () => {
  return (
    <CardPage>
      <SlashHeader slash='/questions' title='سوالات' />

      <p className=''>این‌ها چند تا سوال‌هایی هستن که بهشون فکر می‌کنم...</p>

      <div className='mt-4 flex max-w-2xl flex-col gap-6'>
        {questions.map(item => (
          <p
            dir='auto'
            key={item.id}
            lang={item.lang}
            className='use-lang-font border-brand bg-bg-2 rounded-lg border-s-8 p-4'
          >
            {item.text}
          </p>
        ))}
      </div>
    </CardPage>
  )
}
