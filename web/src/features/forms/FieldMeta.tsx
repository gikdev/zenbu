import type { AnyFieldMeta } from '@tanstack/react-form'

import { getErrorMessagesOf } from './getErrorMessagesOf'

export function FieldMeta({ meta }: { meta: AnyFieldMeta }) {
  const errorMsgs = getErrorMessagesOf(meta)

  if (meta.isValidating) {
    return (
      <p dir='auto' className='text-xs text-mist-500'>
        ...
      </p>
    )
  }

  if (!meta.isValid && errorMsgs.some) {
    return (
      <div dir='auto' className='text-xs text-red-500'>
        {errorMsgs.value.map((msg, i) => (
          <p dir='auto' key={i}>
            {msg}
          </p>
        ))}
      </div>
    )
  }

  return <p className='invisible text-xs'>&nbsp;</p>
}
