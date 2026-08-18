import { CardPage } from '../../common/CardPage'
import { SlashHeader } from '../../common/SlashHeader'
import { LanguageCard } from './LanguageCard'
import { languages } from './languages'

export const LanguagesPage = () => {
  return (
    <CardPage>
      <SlashHeader slash='/languages' title='زبان‌ها' />

      <div className='flex flex-col gap-2'>
        {languages.map(lang => (
          <LanguageCard key={lang.id} language={lang} />
        ))}
      </div>
    </CardPage>
  )
}
