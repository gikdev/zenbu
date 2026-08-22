import { FloppyDiskIcon } from '@phosphor-icons/react'

import { styleBtn } from '#/common/atoms/btn'
import { useAppForm } from '#/features/forms'

import type { JottingValue } from './JottingValue'

const emptyValue: JottingValue = {
  title: '',
  content: '',
}

type JottingFormProps = {
  defaultValue: JottingValue | null
  onSubmit: (jotting: JottingValue, resetForm: () => void) => Promise<void>
}

export const JottingForm = (p: JottingFormProps) => {
  const form = useAppForm({
    defaultValues: p.defaultValue ?? emptyValue,
    onSubmit: ({ value }) => p.onSubmit(value, () => form.reset()),
  })

  return (
    <form.AppForm>
      <div className='flex flex-col gap-2'>
        <form.AppField name='title' children={field => <field.SimpleTextInput title='Title' />} />
        <form.AppField name='content' children={field => <field.SimpleTextInput title='Content' />} />

        <form.SimpleSubmitBtn className={styleBtn({ variant: 'primary' })}>
          <FloppyDiskIcon size={20} />
          <span>Save</span>
        </form.SimpleSubmitBtn>
      </div>
    </form.AppForm>
  )
}
