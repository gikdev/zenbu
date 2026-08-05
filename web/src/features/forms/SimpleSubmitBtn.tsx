import { SpinnerGapIcon } from '@phosphor-icons/react'
import type { ReactNode } from 'react'

import { useFormContext } from '.'

interface SimpleSubmitBtnProps {
  children: ReactNode
  className: string
}

export function SimpleSubmitBtn(p: SimpleSubmitBtnProps) {
  const form = useFormContext()

  return (
    <form.Subscribe selector={s => [s.canSubmit, s.isSubmitting]}>
      {([canSubmit, isSubmitting]) => (
        <button
          type='button'
          className={p.className}
          onClick={() => form.handleSubmit()}
          disabled={!canSubmit || isSubmitting}
        >
          {isSubmitting ? <SpinnerGapIcon size={24} className='animate-spin' /> : p.children}
        </button>
      )}
    </form.Subscribe>
  )
}
