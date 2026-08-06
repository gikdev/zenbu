import { useSelector } from '@tanstack/react-store'

import { AdaptiveDialog } from '#/common/molecules/AdaptiveDialog'
import { useI18nContext } from '#/features/i18n'

import { SettingsSection } from './SettingsSection'
import { settingsStore } from './store'

export const SettingsDialog = () => {
  const isModalOpen = useSelector(settingsStore, s => s.isModalOpen)

  return (
    <AdaptiveDialog
      isOpen={isModalOpen}
      onClose={settingsStore.actions.close}
      title={useI18nContext().LL.settings.title()}
    >
      <SettingsSection />
    </AdaptiveDialog>
  )
}
