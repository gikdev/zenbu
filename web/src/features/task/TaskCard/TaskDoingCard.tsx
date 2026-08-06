import { CheckIcon, PencilSimpleIcon, XIcon } from '@phosphor-icons/react'
import { useSelector } from '@tanstack/react-store'
import confetti from 'canvas-confetti'

import { styleBtn } from '#/common/atoms/btn'
import { onError } from '#/common/helpers/onError'
import { useI18nContext } from '#/features/i18n/i18n-react'
import { taskStore } from '#/features/task/store'

import { CONTAINER_CLN, FADING_BTN_LABEL_CLN } from './common'

export function TaskDoingCard() {
  const { LL } = useI18nContext()
  const task = useSelector(taskStore, s => s.task)

  const onFinish = () => {
    void confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    })?.catch(onError)

    void confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    })?.catch(onError)

    taskStore.actions.reset()
  }

  return (
    <div className={CONTAINER_CLN}>
      <p className='text-text-important text-center text-2xl font-bold'>{task}</p>

      <p className='text-center text-xs'>{LL.task.doingTip()}</p>

      <div className='flex w-full items-center justify-center gap-2 *:flex-1'>
        <button
          type='button'
          onClick={() => taskStore.actions.stop()}
          className={styleBtn({ class: 'group', variant: 'secondary' })}
        >
          <PencilSimpleIcon size={16} />
          <span className={FADING_BTN_LABEL_CLN}>{LL.task.edit()}</span>
        </button>

        <button type='button' onClick={onFinish} className={styleBtn({ class: 'group', variant: 'primary' })}>
          <CheckIcon size={16} />
          <span className={FADING_BTN_LABEL_CLN}>{LL.task.finish()}</span>
        </button>

        <button
          type='button'
          onClick={() => taskStore.actions.reset()}
          className={styleBtn({ class: 'group', variant: 'destructive' })}
        >
          <XIcon size={16} />
          <span className={FADING_BTN_LABEL_CLN}>{LL.task.cancel()}</span>
        </button>
      </div>
    </div>
  )
}
