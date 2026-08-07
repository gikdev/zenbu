import z from 'zod'

import { err, ok, type Result } from '#/common/helpers/Result'

import { zLocalizedText, type LocalizedText } from './LocalizedText'

export const zLyricBlockBase = z.object({
  endTimestamp: z.number().min(0),
})

export const zLyricBlockEmpty = zLyricBlockBase.extend({
  type: z.literal('empty'),
})
export type LyricBlockEmpty = z.infer<typeof zLyricBlockEmpty>

export const zLyricBlockInstrumental = zLyricBlockBase.extend({
  type: z.literal('instrumental'),
  text: z.string().optional(),
})
export type LyricBlockInstrumental = z.infer<typeof zLyricBlockInstrumental>

export const zLyricBlockVerse = zLyricBlockBase.extend({
  type: z.literal('verse'),
  lines: z.array(zLocalizedText).min(1),
})
export type LyricBlockVerse = z.infer<typeof zLyricBlockVerse>

export const zLyricBlock = z.discriminatedUnion('type', [zLyricBlockEmpty, zLyricBlockInstrumental, zLyricBlockVerse])
export type LyricBlock = z.infer<typeof zLyricBlock>

export const LyricBlockErrors = {
  VerseAtLeastOneLine: 'Verse must have at least one line.',
  CanNotChangeNonVerseBlockLines: 'Cannot change lines on a non-verse block.',
  CanNotSetNonInstrumentalText: 'Cannot set text on a non-instrumental block.',
} as const

export const lyricBlockUtils = {
  factories: {
    /** Create an empty block (silence/gap). */
    createEmpty(endTimestamp: number): LyricBlockEmpty {
      return { type: 'empty', endTimestamp }
    },

    /** Create an instrumental block (music without vocals). */
    createInstrumental(endTimestamp: number, text?: string): LyricBlockInstrumental {
      return {
        type: 'instrumental',
        endTimestamp,
        text,
      }
    },

    /** Create a verse block with localized lines. */
    createVerse(endTimestamp: number, lines: LocalizedText[]): Result<LyricBlockVerse> {
      if (lines.length === 0) {
        return err(LyricBlockErrors.VerseAtLeastOneLine)
      }

      return ok({ type: 'verse', endTimestamp, lines })
    },
  },

  typeGuards: {
    /** Check if block is empty. */
    isEmpty: (block: LyricBlock): block is LyricBlockEmpty => block.type === 'empty',

    /** Check if block is a verse. */
    isVerse: (block: LyricBlock): block is LyricBlockVerse => block.type === 'verse',

    /** Check if block is instrumental. */
    isInstrumental: (block: LyricBlock): block is LyricBlockInstrumental => block.type === 'instrumental',
  },

  update: {
    /** Update the block's end timestamp. */
    setEndTimestamp(block: LyricBlock, newTimestamp: number): LyricBlock {
      return { ...block, endTimestamp: newTimestamp }
    },

    /** Replace all lines of a verse block. */
    setVerseLines(block: LyricBlock, newLines: LocalizedText[]): Result<LyricBlock> {
      if (!lyricBlockUtils.typeGuards.isVerse(block)) {
        return err(LyricBlockErrors.CanNotChangeNonVerseBlockLines)
      }

      if (newLines.length === 0) {
        return err(LyricBlockErrors.VerseAtLeastOneLine)
      }

      return ok({ ...block, lines: newLines })
    },

    /** Append a new line to a verse block. */
    addVerseLine(block: LyricBlock, line: LocalizedText): Result<LyricBlock> {
      if (!lyricBlockUtils.typeGuards.isVerse(block)) {
        return err(LyricBlockErrors.CanNotChangeNonVerseBlockLines)
      }

      return ok({ ...block, lines: [...block.lines, line] })
    },

    /** Remove a line from a verse block by index. */
    removeVerseLine(block: LyricBlock, index: number): Result<LyricBlock> {
      if (!lyricBlockUtils.typeGuards.isVerse(block)) {
        return err(LyricBlockErrors.CanNotChangeNonVerseBlockLines)
      }

      const newLines = [...block.lines]
      newLines.splice(index, 1)

      if (newLines.length === 0) {
        return err(LyricBlockErrors.VerseAtLeastOneLine)
      }

      return ok({ ...block, lines: newLines })
    },

    /** Update a specific line in a verse block by index. */
    updateVerseLine(block: LyricBlock, index: number, newLine: LocalizedText): Result<LyricBlock> {
      if (!lyricBlockUtils.typeGuards.isVerse(block)) {
        return err(LyricBlockErrors.CanNotChangeNonVerseBlockLines)
      }

      const newLines = [...block.lines]
      newLines[index] = newLine

      return ok({ ...block, lines: newLines })
    },

    /** Update the text label of an instrumental block. */
    setInstrumentalText(block: LyricBlock, newText: string | undefined): Result<LyricBlock> {
      if (!lyricBlockUtils.typeGuards.isInstrumental(block)) {
        return err(LyricBlockErrors.CanNotSetNonInstrumentalText)
      }

      return ok({ ...block, text: newText })
    },
  },

  conversion: {
    /** Convert any block to an empty block. */
    convertToEmpty(block: LyricBlock): LyricBlockEmpty {
      return { type: 'empty', endTimestamp: block.endTimestamp }
    },

    /** Convert any block to an instrumental block. */
    convertToInstrumental(block: LyricBlock, text?: string): LyricBlockInstrumental {
      return {
        type: 'instrumental',
        endTimestamp: block.endTimestamp,
        text,
      }
    },

    /** Convert any block to a verse block. */
    convertToVerse(block: LyricBlock, lines: LocalizedText[]): Result<LyricBlockVerse> {
      if (lines.length === 0) {
        return err(LyricBlockErrors.VerseAtLeastOneLine)
      }

      return ok({ type: 'verse', endTimestamp: block.endTimestamp, lines })
    },
  },
}
