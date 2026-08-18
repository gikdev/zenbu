import { CardPage } from '../../common/CardPage'
import { SlashHeader } from '../../common/SlashHeader'
import { SlashPageCard } from './SlashPageCard'
import { slashPages } from './slashPages'

export const SlashesPage = () => {
  const slashPagesNetAnchor = (
    <a
      href='https://slashpages.net/'
      target='_blank'
      rel='noopener noreferrer'
      className='text-brand hover:text-text-important border-b transition-all'
    >
      سایت Slash Pages
    </a>
  )

  return (
    <CardPage>
      <SlashHeader slash='/slashes' title='صفحات اسلش (Slash Pages)' />

      <p>توی این صفحه، لیست تمام صحفات اسلش سایت من رو می‌بینی. برای اطلاعات بیشتر به {slashPagesNetAnchor} یه نگاهی بنداز.</p>

      <div className='flex flex-col gap-2'>
        {slashPages.map(page => (
          <SlashPageCard page={page} key={page.slash} />
        ))}
      </div>
    </CardPage>
  )
}
