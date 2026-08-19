import type { Language } from './Language'

const getFlagUrl = (countryCode: string) => `https://flagcdn.com/${countryCode.toLowerCase()}.svg`

type LanguageCardProps = {
  language: Language
}

export const LanguageCard = (p: LanguageCardProps) => {
  const { name, level, description, id, languageNumber } = p.language

  return (
    <div className='border-border-muted/50 bg-bg-1/50 relative flex flex-col items-center gap-4 overflow-clip rounded-lg border p-4'>
      <span lang='en' dir='ltr' className='bg-bg-2 absolute top-0 left-0 rounded-br-lg px-2 py-1'>
        {languageNumber}
      </span>

      <div className='flex gap-4'>
        <img src={getFlagUrl(id)} alt='' className='h-16 w-24 rounded-lg object-cover' />

        <p className='flex flex-col items-start gap-1'>
          <span className='text-text-important text-2xl font-bold'>{name}</span>
          <strong className='bg-bg-2 rounded-lg px-2 py-1 text-xs'>{level}</strong>
        </p>
      </div>

      {description ? <p className='text-center'>{description}</p> : null}
    </div>
  )
}
