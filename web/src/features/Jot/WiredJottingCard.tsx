import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { toast } from 'react-toastify'

import { extractErrorMessage } from '#/common/helpers/extractErrorMessage'
import { AdaptiveDialog } from '#/common/molecules/AdaptiveDialog'
import { Jottings, type JottingResponse } from '#/features/api/client'

import { JottingCard } from './JottingCard'
import { JottingForm } from './JottingForm'
import type { JottingValue } from './JottingValue'

export const WiredJottingCard = (p: { jotting: JottingResponse }) => {
  const queryClient = useQueryClient()
  const [isEditOpen, setEditOpen] = useState(false)

  const handleEdit = () => setEditOpen(true)

  const handleUpdate = async (body: JottingValue, resetForm: () => void) => {
    const updatePromise = Jottings.updateJotting({ path: { id: p.jotting.id }, body })

    toast.promise(updatePromise, {
      pending: 'Updating the jotting...',
      success: {
        render: () => {
          queryClient.invalidateQueries()
          resetForm()
          setEditOpen(false)
          return 'Successfully updated the jotting'
        },
      },
      error: {
        render({ data }) {
          return extractErrorMessage(data)
        },
      },
    })
  }

  const handleDelete = () => {
    if (!window.confirm('Sure?')) return

    const deletePromise = Jottings.deleteJotting({ path: { id: p.jotting.id } })

    toast.promise(deletePromise, {
      pending: 'Deleting the jotting...',
      success: {
        render: () => {
          queryClient.invalidateQueries()

          return 'Successfully deleted the jotting'
        },
      },
      error: {
        render({ data }) {
          return extractErrorMessage(data)
        },
      },
    })
  }

  return (
    <>
      <JottingCard jotting={p.jotting} onDeleteClick={handleDelete} onEditClick={handleEdit} />

      <AdaptiveDialog title='Edit Jotting' onClose={() => setEditOpen(false)} isOpen={isEditOpen}>
        <JottingForm defaultValue={p.jotting} onSubmit={handleUpdate} />
      </AdaptiveDialog>
    </>
  )
}
