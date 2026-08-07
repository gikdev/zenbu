import type { ChangeEvent } from 'react'

import { useFieldContext, getErrorMessagesOf } from '#/features/forms'
import { useI18nContext } from '#/features/i18n'

import { languageCodeUtils, type LanguageCode } from '../lyric/LanguageCode'

export function MiniLanguageCodeSelect(p: { inputClassName: string }) {
  const { locale } = useI18nContext()
  const field = useFieldContext<LanguageCode>()
  const codes = languageCodeUtils.getListOfAllValues()
  const errorMsgs = getErrorMessagesOf(field.state.meta)
  const errorMsg = errorMsgs.some ? errorMsgs.value.join(', ') : undefined

  const handleChange = (e: ChangeEvent<HTMLSelectElement, HTMLSelectElement>) =>
    field.handleChange(languageCodeUtils.validateOrDefault(e.target.value, locale))

  return (
    <select
      dir='auto'
      className={p.inputClassName}
      id={field.name}
      name={field.name}
      value={field.state.value || ''}
      onBlur={field.handleBlur}
      onChange={handleChange}
      title={errorMsg}
    >
      {codes.map(code => (
        <option className='bg-bg-1 text-text-muted' value={code} key={code}>
          {code}
        </option>
      ))}
    </select>
  )
}
