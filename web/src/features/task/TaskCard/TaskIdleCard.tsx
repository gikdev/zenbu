import { PlayIcon } from '@phosphor-icons/react'
import { useSelector } from '@tanstack/react-store'
import { toast } from 'react-toastify'

import { styleBtn } from '#/common/atoms/btn'
import { styleInput } from '#/common/atoms/input'
import { useI18nContext } from '#/features/i18n/i18n-react'

import { taskStore } from '../store'
import { CONTAINER_CLN, FADING_BTN_LABEL_CLN } from './common'
import { TaskHelp } from './TaskHelp'

export function TaskIdleCard() {
  const { LL } = useI18nContext()
  const task = useSelector(taskStore, s => s.task)

  const onStart = () => {
    if (!task) {
      toast.warn(LL.task.toastEmptyTask())
      return
    }

    taskStore.actions.start()
  }

  return (
    <div className={CONTAINER_CLN}>
      <div className='flex items-center justify-between'>
        <p className='text-center'>{LL.task.prompt()}</p>

        <TaskHelp />
      </div>

      <input className={styleInput()} value={task || ''} onChange={e => taskStore.actions.setTask(e.target.value)} />

      <button
        disabled={!task}
        type='button'
        onClick={onStart}
        className={styleBtn({ variant: 'primary', class: 'group' })}
      >
        <PlayIcon size={16} />
        <span className={FADING_BTN_LABEL_CLN}>{LL.task.start()}</span>
      </button>
    </div>
  )
}
