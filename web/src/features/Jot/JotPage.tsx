import { HouseIcon, PlusIcon } from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'

import { styleBtn } from '#/common/atoms/btn'
import { PageShell } from '#/common/molecules/PageShell'

import { JottingsSection } from './JottingsSection'
import { NewJottingModal } from './NewJottingModal'
import { newJottingStore } from './newJottingStore'

export const JotPage = () => (
  <PageShell>
    <div className='flex items-center justify-between gap-1 px-4 py-2'>
      <Link to='/apps' className={styleBtn({ size: 'icon' })}>
        <HouseIcon size={20} />
      </Link>

      <h1 className='text-text-important me-auto text-lg font-bold'>Jot</h1>

      <button type='button' className={styleBtn({ variant: 'primary' })} onClick={() => newJottingStore.actions.open()}>
        <PlusIcon size={20} />
        <span>New Jotting</span>
      </button>
    </div>

    <div className='flex flex-col gap-8 px-4 py-8'>
      <JottingsSection />
    </div>

    <NewJottingModal />
  </PageShell>
)
