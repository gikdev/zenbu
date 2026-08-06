import { GearIcon } from '@phosphor-icons/react'

import { styleBtn } from '#/common/atoms/btn'
import { useI18nContext } from '#/features/i18n'

import { settingsStore } from './store'

export const SettingsBtn = () => {
  const { LL } = useI18nContext()

  return (
    <button
      title={LL.settings.title()}
      type='button'
      className={styleBtn({ size: 'icon', class: 'absolute top-2 right-2' })}
      onClick={settingsStore.actions.open}
    >
      <GearIcon size={20} />
    </button>
  )
}
