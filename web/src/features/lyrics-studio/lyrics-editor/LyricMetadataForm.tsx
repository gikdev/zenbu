import { FloppyDiskIcon } from '@phosphor-icons/react'

import { styleBtn } from '#/common/atoms/btn'
import { useAppForm } from '#/features/forms'

import type { LyricMetadata } from '../lyric/Lyric'

export const LyricMetadataForm = (p: { metadata: LyricMetadata; onSubmit: (metadata: LyricMetadata) => void }) => {
  const form = useAppForm({
    defaultValues: p.metadata,
    onSubmit(props) {
      p.onSubmit(props.value)
    },
  })

  return (
    <form.AppForm>
      <form.AppField name='title' children={field => <field.LocalizedTextInput title='Title' />} />
      <form.AppField name='artist' children={field => <field.LocalizedTextInput title='Artist' />} />
      <form.AppField name='imageUrl' children={field => <field.SimpleTextInput title='Image URL' />} />
      <form.AppField name='source' children={field => <field.SimpleTextInput title='Source' />} />

      <form.SimpleSubmitBtn className={styleBtn({ variant: 'primary' })}>
        <FloppyDiskIcon size={20} />
        <span>Save</span>
      </form.SimpleSubmitBtn>
    </form.AppForm>
  )
}
