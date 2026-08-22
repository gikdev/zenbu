import z from 'zod'

export const zJottingValue = z.object({
  title: z.string(),
  content: z.string(),
})

export type JottingValue = z.infer<typeof zJottingValue>
