import { useFieldContext } from '.'
import { FieldMeta } from './FieldMeta'

interface SimpleTextInputProps {
  title: string
  isMultiline?: boolean
}

export function SimpleTextInput({ title, isMultiline = false }: SimpleTextInputProps) {
  const field = useFieldContext<string>()
  const Tag = isMultiline ? 'textarea' : 'input'

  return (
    <div>
      <label htmlFor={field.name}>{title}</label>

      <Tag
        dir='auto'
        id={field.name}
        name={field.name}
        value={field.state.value || ''}
        onBlur={field.handleBlur}
        onChange={e => field.handleChange(e.target.value)}
      />

      <FieldMeta meta={field.state.meta} />
    </div>
  )
}
