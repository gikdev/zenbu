import { styleInput } from '#/common/atoms/input'
import type { ChangeEvent } from 'react'

import { LabelContainer, useFieldContext } from '.'
import { FieldMeta } from './FieldMeta'

interface SimpleNumberInputProps {
  title: string
  step?: number
  min?: number
}

export function SimpleNumberInput(p: SimpleNumberInputProps) {
  const field = useFieldContext<number>()
  const value = field.state.value || 0

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.valueAsNumber
    const newValue = Number.isNaN(input) ? 0 : input
    field.handleChange(newValue)
  }

  return (
    <LabelContainer title={p.title} htmlFor={field.name}>
      <input
        dir='auto'
        id={field.name}
        name={field.name}
        value={value}
        step={p.step}
        min={p.min}
        onBlur={field.handleBlur}
        onChange={handleChange}
        className={styleInput()}
      />

      <FieldMeta meta={field.state.meta} />
    </LabelContainer>
  )
}
