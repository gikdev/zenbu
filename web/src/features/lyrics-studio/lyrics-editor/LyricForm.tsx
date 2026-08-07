import { PlusIcon } from '@phosphor-icons/react'

import { styleBtn } from '#/common/atoms/btn'
import { useAppForm, FieldSet } from '#/features/forms'

import { LyricBlockInput } from '../forms/LyricBlockInput'
import { zLyric, type Lyric } from '../lyric/Lyric'
import { lyricBlockUtils } from '../lyric/LyricBlock'

const emptyLyric: Lyric = {
  defaultLang: 'en',
  blocks: [lyricBlockUtils.create('instrumental')],
  metadata: {
    title: { lang: 'en', text: '' },
    artist: { lang: 'en', text: '' },
    imageUrl: '',
    source: '',
  },
}

type LyricFormProps = { mode: 'CREATE' } | { mode: 'EDIT'; defaultValues: Lyric }

export function LyricForm(p: LyricFormProps) {
  const form = useAppForm({
    defaultValues: p.mode === 'EDIT' ? p.defaultValues : emptyLyric,
    validators: {
      onSubmit: zLyric,
    },
  })

  return (
    <div className='flex flex-col gap-4'>
      <form.AppForm>
        <form.AppField
          name='defaultLang'
          children={field => <field.FullLanguageCodeSelect title='Default Language' />}
        />

        <FieldSet title='Metadata'>
          <form.AppField name='metadata.title' children={field => <field.LocalizedTextInput title='Title' />} />

          <form.AppField name='metadata.artist' children={field => <field.LocalizedTextInput title='Artist' />} />

          <form.AppField name='metadata.source' children={field => <field.SimpleTextInput title='Source URL' />} />

          <form.AppField name='metadata.imageUrl' children={field => <field.SimpleTextInput title='Image URL' />} />
        </FieldSet>

        <FieldSet title='Blocks'>
          <form.AppField
            name='blocks'
            mode='array'
            children={blocksField => (
              <>
                {blocksField.state.value?.map((_, i) => (
                  <div key={i}>
                    <form.AppField
                      name={`blocks[${i}]`}
                      children={blockField => (
                        <LyricBlockInput
                          field={blockField}
                          title={`Block #${i}`}
                          onRemove={() => blocksField.removeValue(i)}
                        />
                      )}
                    />
                  </div>
                ))}

                <button
                  type='button'
                  onClick={() => blocksField.pushValue(lyricBlockUtils.create('instrumental'))}
                  className={styleBtn({ variant: 'outline' })}
                >
                  <PlusIcon size={20} />
                  <span>Add Block</span>
                </button>
              </>
            )}
          />
        </FieldSet>
      </form.AppForm>
    </div>
  )
}
