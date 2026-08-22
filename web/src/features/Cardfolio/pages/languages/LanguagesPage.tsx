import { CardHeader } from '../../common/CardHeader'
import { CardPage } from '../../common/CardPage'
import { LanguageCard } from './LanguageCard'
import { languages } from './languages'

export const LanguagesPage = () => {
  return (
    <CardPage>
      <CardHeader title='زبان‌ها' />

      <div className='flex flex-col gap-2'>
        {languages.map(lang => (
          <LanguageCard key={lang.id} language={lang} />
        ))}
      </div>
    </CardPage>
  )
}
