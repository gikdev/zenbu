import { useQueryClient } from '@tanstack/react-query'
import { useSelector } from '@tanstack/react-store'
import { toast } from 'react-toastify'

import { onError } from '#/common/helpers/onError'
import { AdaptiveDialog } from '#/common/molecules/AdaptiveDialog'
import { Jottings, type CreateJottingCommand } from '#/features/api/client'

import { JottingForm } from './JottingForm'
import type { JottingValue } from './JottingValue'
import { newJottingStore } from './newJottingStore'

export const NewJottingModal = () => {
  const queryClient = useQueryClient()
  const isOpen = useSelector(newJottingStore)

  const handleSubmit = async (data: JottingValue, resetForm: () => void) => {
    const body: CreateJottingCommand = { ...data }

    try {
      await Jottings.createJotting({ body, throwOnError: true })

      void queryClient.invalidateQueries()

      resetForm()

      toast.success('Successfully created.')
    } catch (err) {
      onError(err)
    }
  }

  return (
    <AdaptiveDialog isOpen={isOpen} onClose={() => newJottingStore.actions.close()} title='New Jotting'>
      <JottingForm defaultValue={null} onSubmit={handleSubmit} />
    </AdaptiveDialog>
  )
}
