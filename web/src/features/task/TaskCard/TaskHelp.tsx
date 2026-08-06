import { QuestionIcon } from '@phosphor-icons/react'
import { useState } from 'react'

import { styleBtn } from '#/common/atoms/btn'
import { AdaptiveDialog } from '#/common/molecules/AdaptiveDialog'
import { useI18nContext } from '#/features/i18n'

export const TaskHelp = () => {
  const { LL } = useI18nContext()
  const [isHelpOpen, setHelpOpen] = useState(false)

  return (
    <>
      <button type='button' className={styleBtn({ size: 'icon' })} onClick={() => setHelpOpen(true)}>
        <QuestionIcon size={20} />
      </button>

      <AdaptiveDialog isOpen={isHelpOpen} onClose={() => setHelpOpen(false)} title={LL.task.helpTitle()}>
        <p>{LL.task.helpDescription()}</p>
      </AdaptiveDialog>
    </>
  )
}
