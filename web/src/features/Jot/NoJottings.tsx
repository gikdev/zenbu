import { EmptyIcon, PlusIcon } from '@phosphor-icons/react'

import { styleBtn } from '#/common/atoms/btn'

import { newJottingStore } from './newJottingStore'

export const NoJottings = () => (
  <div className='bg-bg-2 mx-auto flex w-full max-w-120 flex-col items-center gap-4 rounded-lg px-4 py-8'>
    <EmptyIcon size={48} className='' />

    <div className='flex flex-col items-center gap-2 text-center'>
      <p className='text-text-important text-2xl font-bold'>No Jottings!</p>
      <p className=''>You haven't yet made anything!</p>
    </div>

    <button type='button' className={styleBtn({ variant: 'primary' })} onClick={() => newJottingStore.actions.open()}>
      <PlusIcon size={20} />
      <span>New Jotting</span>
    </button>
  </div>
)
