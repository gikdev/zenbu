import { FloppyDiskIcon } from '@phosphor-icons/react'

import { styleBtn } from '#/common/atoms/btn'
import { useAppForm } from '#/features/forms'

import type { LyricSettings } from '../lyric/Lyric'

export const LyricSettingsForm = (p: { settings: LyricSettings; onSubmit: (settings: LyricSettings) => void }) => {
  const form = useAppForm({
    defaultValues: p.settings,
    onSubmit(props) {
      p.onSubmit(props.value)
    },
  })

  return (
    <form.AppForm>
      <form.AppField
        name='defaultLanguage'
        children={field => <field.FullLanguageCodeSelect title='Default Language' />}
      />

      <form.SimpleSubmitBtn className={styleBtn({ variant: 'primary' })}>
        <FloppyDiskIcon size={20} />
        <span>Save</span>
      </form.SimpleSubmitBtn>
    </form.AppForm>
  )
}
