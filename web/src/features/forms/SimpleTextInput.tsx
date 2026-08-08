import type { ChangeEventHandler } from 'react'

import { styleInput } from '#/common/atoms/input'

import { LabelContainer, useFieldContext } from '.'
import { FieldMeta } from './FieldMeta'

type TextInputChangeHandler = ChangeEventHandler<HTMLTextAreaElement, HTMLTextAreaElement> &
  ChangeEventHandler<HTMLInputElement, HTMLInputElement>

interface SimpleTextInputProps {
  title: string
  isMultiline?: boolean
  className?: string
}

export function SimpleTextInput({ title, isMultiline = false, className }: SimpleTextInputProps) {
  const field = useFieldContext<string | null>()
  const Tag = isMultiline ? 'textarea' : 'input'
  const value = field.state.value || ''

  const handleChange: TextInputChangeHandler = e => {
    field.handleChange(e.target.value || '')
  }

  return (
    <LabelContainer title={title} htmlFor={field.name}>
      <Tag
        dir='auto'
        id={field.name}
        name={field.name}
        value={value}
        onBlur={field.handleBlur}
        onChange={handleChange}
        className={styleInput({ mode: isMultiline ? 'multiline' : 'block', className })}
      />

      <FieldMeta meta={field.state.meta} />
    </LabelContainer>
  )
}
