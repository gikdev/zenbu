import { ArrowCounterClockwiseIcon, BugIcon } from '@phosphor-icons/react'

import { styleBtn } from '#/common/atoms/btn'
import { extractErrorMessage } from '#/common/helpers/extractErrorMessage'

export const JottingsError = (p: { error: unknown; onRetry: () => void }) => (
  <div className='bg-bg-2 mx-auto flex w-full max-w-120 flex-col items-center gap-4 rounded-lg px-4 py-8'>
    <BugIcon size={48} className='text-danger' />

    <div className='flex flex-col items-center gap-2 text-center'>
      <p className='text-text-important text-2xl font-bold'>Error!</p>

      <p className=''>Something bad happened! Try again please.</p>

      <code>{extractErrorMessage(p.error)}</code>

      <button type='button' className={styleBtn({ variant: 'outline' })} onClick={p.onRetry}>
        <ArrowCounterClockwiseIcon size={20} />
        <span>Try Again</span>
      </button>
    </div>
  </div>
)
