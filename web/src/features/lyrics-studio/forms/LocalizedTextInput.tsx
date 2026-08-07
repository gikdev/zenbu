import type { ChangeEvent, ChangeEventHandler } from 'react'

import { styleInput } from '#/common/atoms/input'
import { useFieldContext, FieldMeta, LabelContainer } from '#/features/forms'
import { useI18nContext } from '#/features/i18n'

import { languageCodeUtils } from '../lyric/LanguageCode'
import type { LocalizedText } from '../lyric/LocalizedText'

type TextInputChangeHandler = ChangeEventHandler<HTMLTextAreaElement, HTMLTextAreaElement> &
  ChangeEventHandler<HTMLInputElement, HTMLInputElement>

export function LocalizedTextInput(p: { title: string; isMultiline?: boolean }) {
  const { locale } = useI18nContext()
  const field = useFieldContext<LocalizedText>()
  const Tag = p.isMultiline ? 'textarea' : 'input'
  const codes = languageCodeUtils.getListOfAllValues()

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement, HTMLSelectElement>) =>
    field.handleChange(p => ({ ...p, lang: languageCodeUtils.validateOrDefault(e.target.value, locale) }))
  const handleTextChange: TextInputChangeHandler = e => field.handleChange(p => ({ ...p, text: e.target.value || '' }))

  return (
    <LabelContainer
      title={p.title}
      slot={
        <select
          dir='auto'
          value={field.state.value.lang || ''}
          onBlur={field.handleBlur}
          onChange={handleLanguageChange}
          className={styleInput({ mode: 'inline' })}
        >
          {codes.map(code => (
            <option className='bg-bg-1 text-text-muted' value={code} key={code}>
              {code}
            </option>
          ))}
        </select>
      }
    >
      <Tag
        dir='auto'
        value={field.state.value.text || ''}
        onBlur={field.handleBlur}
        onChange={handleTextChange}
        className={styleInput({ mode: p.isMultiline ? 'multiline' : 'block' })}
      />

      <FieldMeta meta={field.state.meta} />
    </LabelContainer>
  )
}
