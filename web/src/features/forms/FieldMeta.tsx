import type { AnyFieldMeta } from '@tanstack/react-form'

export function FieldMeta({ meta }: { meta: AnyFieldMeta }) {
  const errorMsg = meta.errors.map(e => e?.message).join(', ')

  if (meta.isValidating) {
    return (
      <p dir='auto' className='text-xs text-mist-500'>
        در حال بررسی...
      </p>
    )
  }

  if (!meta.isValid) {
    return (
      <p dir='auto' className='text-xs text-red-500'>
        {errorMsg}
      </p>
    )
  }

  return <p className='invisible text-xs'>&nbsp;</p>
}
