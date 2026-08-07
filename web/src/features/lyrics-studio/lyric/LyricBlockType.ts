import z from 'zod'

export const zLyricBlockType = z.union([z.literal('instrumental'), z.literal('verse')])

export type LyricBlockType = z.infer<typeof zLyricBlockType>

export const lyricBlockTypeUtils = {
  /** Get a list of all available values */
  getListOfAllValues(): LyricBlockType[] {
    return ['instrumental', 'verse']
  },

  /** Validate a string or fall back to a value */
  validateOrDefault(input: string, fallback: LyricBlockType): LyricBlockType {
    const result = zLyricBlockType.safeParse(input)
    return result.success ? result.data : fallback
  },
}
