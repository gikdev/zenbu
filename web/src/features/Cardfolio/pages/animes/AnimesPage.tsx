import { CardPage } from '../../common/CardPage'
import { SlashHeader } from '../../common/SlashHeader'
import { AnimeCard } from './AnimeCard'
import { animes } from './animes'

export const AnimesPage = () => (
  <CardPage>
    <SlashHeader slash='/animes' title='انیمه‌ها' />

    <p className='text-text-important mb-6 font-bold'>انیمه‌هایی که دیدم و دوستشون داشتم (یا دارم می‌بینم).</p>

    <div className='flex max-w-2xl flex-col gap-4'>
      {animes.map(item => (
        <AnimeCard key={item.id} anime={item} />
      ))}
    </div>
  </CardPage>
)
