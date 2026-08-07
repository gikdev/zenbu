import type { ChangeEvent } from 'react'

import { styleInput } from '#/common/atoms/input'
import { useFieldContext, FieldMeta, LabelContainer } from '#/features/forms'
import { useI18nContext } from '#/features/i18n'

import { languageCodeUtils, type LanguageCode } from '../lyric/LanguageCode'

export function FullLanguageCodeSelect(p: { title: string }) {
  const { locale } = useI18nContext()
  const field = useFieldContext<LanguageCode>()

  const codes = languageCodeUtils.getListOfAllValues()

  const handleChange = (e: ChangeEvent<HTMLSelectElement, HTMLSelectElement>) =>
    field.handleChange(languageCodeUtils.validateOrDefault(e.target.value, locale))

  return (
    <LabelContainer title={p.title} htmlFor={field.name}>
      <select
        dir='auto'
        id={field.name}
        name={field.name}
        value={field.state.value || ''}
        onBlur={field.handleBlur}
        onChange={handleChange}
        className={styleInput()}
      >
        {codes.map(code => (
          <option className='bg-bg-1 text-text-muted' value={code} key={code}>
            {code}
          </option>
        ))}
      </select>

      <FieldMeta meta={field.state.meta} />
    </LabelContainer>
  )
}
