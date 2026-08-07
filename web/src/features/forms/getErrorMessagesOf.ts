import type { AnyFieldMeta } from '@tanstack/react-form'
import z from 'zod'

import { type Option, none, some } from '#/common/helpers/Option'

export function getErrorMessagesOf(meta: AnyFieldMeta): Option<string[]> {
  const errors = meta.errors.map(e => e?.message)
  const result = z.array(z.string()).safeParse(errors)
  const errorMsgs = result.success ? result.data : []

  if (meta.isValid) {
    return none()
  }

  if (errorMsgs.length === 0) {
    return none()
  }

  return some(errorMsgs)
}
