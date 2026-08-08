import { FloppyDiskIcon } from '@phosphor-icons/react'

import { styleBtn } from '#/common/atoms/btn'
import { useAppForm } from '#/features/forms'

import type { LyricBlock } from '../lyric/Lyric'

interface LyricBlockFormProps {
  block: LyricBlock
  onSubmit: (block: LyricBlock) => void
}

export const LyricBlockForm = (p: LyricBlockFormProps) => {
  const form = useAppForm({
    defaultValues: p.block,
    onSubmit(props) {
      p.onSubmit(props.value)
    },
  })

  return (
    <form.AppForm>
      <div className='flex flex-col gap-2'>
        <form.AppField
          name='endTimestamp'
          children={field => <field.SimpleNumberInput title='End Timestamp (seconds)' min={0} step={0.1} />}
        />

        <form.AppField
          name='defaultLanguageOverride'
          children={field => <field.FullLanguageCodeSelect title='Default Language Override' isOptional />}
        />

        <form.AppField
          name='tx'
          children={field => <field.SimpleTextInput className='lang--en use-lang-font' title='Text (tx)' />}
        />

        <form.AppField
          name='ar'
          children={field => <field.SimpleTextInput className='lang--fa use-lang-font' title='Arabic (ar)' />}
        />

        <form.AppField
          name='en'
          children={field => <field.SimpleTextInput className='lang--en use-lang-font' title='English (en)' />}
        />

        <form.AppField
          name='es'
          children={field => <field.SimpleTextInput className='lang--en use-lang-font' title='Spanish (es)' />}
        />

        <form.AppField
          name='fa'
          children={field => <field.SimpleTextInput className='lang--fa use-lang-font' title='Persian (fa)' />}
        />

        <form.AppField
          name='ja'
          children={field => <field.SimpleTextInput className='lang--ja use-lang-font' title='Japanese (ja)' />}
        />

        <form.AppField
          name='rj'
          children={field => <field.SimpleTextInput className='lang--en use-lang-font' title='Romaji (rj)' />}
        />

        <form.SimpleSubmitBtn className={styleBtn({ variant: 'primary' })}>
          <FloppyDiskIcon size={20} />
          <span>Save Block</span>
        </form.SimpleSubmitBtn>
      </div>
    </form.AppForm>
  )
}
