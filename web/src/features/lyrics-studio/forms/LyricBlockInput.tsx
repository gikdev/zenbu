import { TrashIcon } from '@phosphor-icons/react'
import type { AnyFieldApi } from '@tanstack/react-form'

import { styleBtn } from '#/common/atoms/btn'
import { styleInput } from '#/common/atoms/input'
import { FieldMeta, LabelContainer } from '#/features/forms'
import { useI18nContext } from '#/features/i18n'

import { languageCodeUtils } from '../lyric/LanguageCode'
import type { LyricBlock } from '../lyric/LyricBlock'
import { lyricBlockTypeUtils } from '../lyric/LyricBlockType'

export function LyricBlockInput(p: { title: string; field: AnyFieldApi; onRemove?: () => void }) {
  const { locale } = useI18nContext()
  const field = p.field
  const codes = languageCodeUtils.getListOfAllValues()
  const blockTypes = lyricBlockTypeUtils.getListOfAllValues()

  return (
    <LabelContainer title={p.title}>
      <div className='grid grid-cols-2 gap-2'>
        <select
          dir='auto'
          title='Main Language'
          value={field.state.value.mainLang || ''}
          onBlur={field.handleBlur}
          className={styleInput({ mode: 'block' })}
          onChange={e => {
            if (e.target.value === '') {
              field.handleChange((p: LyricBlock) => ({ ...p, mainLang: null }))
              return
            }

            const newLang = languageCodeUtils.validateOrDefault(e.target.value, locale)
            field.handleChange((p: LyricBlock) => ({ ...p, mainLang: newLang }))
          }}
        >
          <option className='bg-bg-1 text-text-muted' value=''>
            --
          </option>

          {codes.map(code => (
            <option className='bg-bg-1 text-text-muted' value={code} key={code}>
              {code}
            </option>
          ))}
        </select>

        <select
          dir='auto'
          title='Block Type'
          value={field.state.value.type}
          onBlur={field.handleBlur}
          className={styleInput({ mode: 'block' })}
          onChange={e =>
            field.handleChange((p: LyricBlock) => ({
              ...p,
              type: lyricBlockTypeUtils.validateOrDefault(e.target.value, 'instrumental'),
            }))
          }
        >
          {blockTypes.map(type => (
            <option className='bg-bg-1 text-text-muted' value={type} key={type}>
              {type}
            </option>
          ))}
        </select>

        <input
          dir='auto'
          title='Timestamp'
          min={0}
          step={0.1}
          value={field.state.value.endTimestamp || 0}
          onBlur={field.handleBlur}
          onChange={e =>
            field.handleChange((p: LyricBlock) => ({
              ...p,
              endTimestamp: Number.isNaN(e.target.valueAsNumber) ? 0 : e.target.valueAsNumber,
            }))
          }
          className={styleInput({ mode: 'block' })}
        />

        {p.onRemove && (
          <button type='button' onClick={p.onRemove} className={styleBtn({ variant: 'destructive' })}>
            <TrashIcon size={20} />
            <span>Remove</span>
          </button>
        )}
      </div>

      <div className='flex items-center gap-2'>
        <span>TX:</span>

        <input
          dir='auto'
          title='Text'
          value={field.state.value.text || ''}
          onBlur={field.handleBlur}
          className={styleInput({ mode: 'inline', class: 'flex-1 lang--en use-lang-font' })}
          onChange={e => field.handleChange((p: LyricBlock) => ({ ...p, text: e.target.value || '' }))}
        />
      </div>

      <div className='flex items-center gap-2'>
        <span>AR:</span>

        <input
          dir='auto'
          title='Arabic'
          value={field.state.value.ar || ''}
          onBlur={field.handleBlur}
          className={styleInput({ mode: 'inline', class: 'flex-1 lang--fa use-lang-font' })}
          onChange={e => field.handleChange((p: LyricBlock) => ({ ...p, ar: e.target.value || '' }))}
        />
      </div>

      <div className='flex items-center gap-2'>
        <span>EN:</span>

        <input
          dir='auto'
          title='English'
          value={field.state.value.en || ''}
          onBlur={field.handleBlur}
          onChange={e => field.handleChange((p: LyricBlock) => ({ ...p, en: e.target.value || '' }))}
          className={styleInput({ mode: 'inline', class: 'flex-1 lang--en use-lang-font' })}
        />
      </div>

      <div className='flex items-center gap-2'>
        <span>ES:</span>
        <input
          dir='auto'
          title='Spanish'
          value={field.state.value.es || ''}
          onBlur={field.handleBlur}
          onChange={e => field.handleChange((p: LyricBlock) => ({ ...p, es: e.target.value || '' }))}
          className={styleInput({ mode: 'inline', class: 'flex-1 lang--en use-lang-font' })}
        />
      </div>

      <div className='flex items-center gap-2'>
        <span>FA:</span>
        <input
          dir='auto'
          title='Persian'
          value={field.state.value.fa || ''}
          onBlur={field.handleBlur}
          onChange={e => field.handleChange((p: LyricBlock) => ({ ...p, fa: e.target.value || '' }))}
          className={styleInput({ mode: 'inline', class: 'flex-1 lang--fa use-lang-font' })}
        />
      </div>

      <div className='flex items-center gap-2'>
        <span>JA:</span>
        <input
          dir='auto'
          title='Japanese'
          value={field.state.value.ja || ''}
          onBlur={field.handleBlur}
          onChange={e => field.handleChange((p: LyricBlock) => ({ ...p, ja: e.target.value || '' }))}
          className={styleInput({ mode: 'inline', class: 'flex-1 lang--ja use-lang-font' })}
        />
      </div>

      <div className='flex items-center gap-2'>
        <span>RJ:</span>
        <input
          dir='auto'
          title='Romaji'
          value={field.state.value.rj || ''}
          onBlur={field.handleBlur}
          onChange={e => field.handleChange((p: LyricBlock) => ({ ...p, rj: e.target.value || '' }))}
          className={styleInput({ mode: 'inline', class: 'flex-1 lang--en use-lang-font' })}
        />
      </div>

      <FieldMeta meta={field.state.meta} />
    </LabelContainer>
  )
}
