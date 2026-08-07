import z from 'zod'

import { convertResult, err, ok, type Result } from '#/common/helpers/Result'

import { zLanguageCode, type LanguageCode } from './LanguageCode'
import { lyricBlockUtils, zLyricBlock, type LyricBlock } from './LyricBlock'
import { zSongMetadata, type SongMetadata } from './SongMetadata'

export const zLyric = z.object({
  metadata: zSongMetadata,
  defaultLang: zLanguageCode,
  blocks: z.array(zLyricBlock),
})

export type Lyric = z.infer<typeof zLyric>

export const LyricErrors = {
  BlockNotFound: (index: number) => `Block at index ${index} not found.`,
  InsertOutOfRange: (index: number) => `Insert index ${index} out of range.`,
  NoBlocks: 'Lyric has no blocks.',
  InvalidData: 'Invalid lyric data.',
} as const

export const lyricUtils = {
  factories: {
    /** Validate and create a Lyric from unknown data. */
    fromRaw(data: unknown): Result<Lyric> {
      const result = zLyric.safeParse(data)

      return result.success ? ok(result.data) : err(result.error.message)
    },

    /** Create an empty lyric with metadata and default language. */
    empty(metadata: SongMetadata, defaultLang: LanguageCode): Lyric {
      return {
        metadata: metadata,
        defaultLang: defaultLang,
        blocks: [],
      }
    },
  },

  queries: {
    /** Get a block by index. */
    getBlock(lyric: Lyric, index: number): Result<LyricBlock> {
      const block = lyric.blocks[index]

      if (!block) {
        return err(LyricErrors.BlockNotFound(index))
      }

      return ok(block)
    },

    /** Get total duration of the song (last block's end). */
    totalDuration(lyric: Lyric): number {
      return lyric.blocks.length > 0 ? lyric.blocks[lyric.blocks.length - 1].endTimestamp : 0
    },

    /** Get start timestamp of a block (derived from previous block). */
    getBlockStart(lyric: Lyric, index: number): number {
      if (index <= 0) {
        return 0
      }

      return lyric.blocks[index - 1]?.endTimestamp ?? 0
    },

    /** Get end timestamp of a block. */
    getBlockEnd(lyric: Lyric, index: number): number {
      return lyric.blocks[index]?.endTimestamp ?? 0
    },

    /** Find the block active at a specific timestamp. */
    getBlockAtTimestamp(lyric: Lyric, timestamp: number): { block: LyricBlock | null; index: number } {
      if (lyric.blocks.length === 0) {
        return { block: null, index: -1 }
      }

      if (timestamp <= lyric.blocks[0].endTimestamp) {
        return { block: lyric.blocks[0], index: 0 }
      }

      for (let i = 1; i < lyric.blocks.length; i++) {
        if (timestamp <= lyric.blocks[i].endTimestamp) {
          return { block: lyric.blocks[i], index: i }
        }
      }

      const last = lyric.blocks.length - 1

      return { block: lyric.blocks[last], index: last }
    },

    /** Check if all blocks are in chronological order. */
    isChronological(lyric: Lyric): boolean {
      for (let i = 1; i < lyric.blocks.length; i++) {
        if (lyric.blocks[i].endTimestamp <= lyric.blocks[i - 1].endTimestamp) {
          return false
        }
      }

      return true
    },

    /** Validate the lyric against the schema. */
    validate(lyric: Lyric): Result<Lyric> {
      return lyricUtils.factories.fromRaw(lyric)
    },
  },

  mutations: {
    /** Replace the entire metadata object. */
    setMetadata(lyric: Lyric, metadata: SongMetadata): Lyric {
      return { ...lyric, metadata }
    },

    /** Update the default language. */
    setDefaultLang(lyric: Lyric, lang: LanguageCode): Lyric {
      return { ...lyric, defaultLang: lang }
    },

    /** Replace all blocks. */
    setBlocks(lyric: Lyric, blocks: LyricBlock[]): Lyric {
      return { ...lyric, blocks }
    },

    /** Append a block to the end. */
    addBlock(lyric: Lyric, block: LyricBlock): Lyric {
      return { ...lyric, blocks: [...lyric.blocks, block] }
    },

    /** Insert a block at a specific index. */
    insertBlock(lyric: Lyric, index: number, block: LyricBlock): Result<Lyric> {
      if (index < 0 || index > lyric.blocks.length) {
        return err(LyricErrors.InsertOutOfRange(index))
      }

      const newBlocks = [...lyric.blocks]
      newBlocks.splice(index, 0, block)

      return ok({ ...lyric, blocks: newBlocks })
    },

    /** Replace an existing block at a specific index. */
    replaceBlock(lyric: Lyric, index: number, block: LyricBlock): Result<Lyric> {
      if (index < 0 || index >= lyric.blocks.length) {
        return err(LyricErrors.BlockNotFound(index))
      }

      const newBlocks = [...lyric.blocks]
      newBlocks[index] = block

      return ok({ ...lyric, blocks: newBlocks })
    },

    /** Remove a block by index. */
    removeBlock(lyric: Lyric, index: number): Result<Lyric> {
      if (index < 0 || index >= lyric.blocks.length) {
        return err(LyricErrors.BlockNotFound(index))
      }

      const newBlocks = [...lyric.blocks]
      newBlocks.splice(index, 1)

      return ok({ ...lyric, blocks: newBlocks })
    },

    /** Sort blocks by endTimestamp (ascending). */
    sortBlocks(lyric: Lyric): Lyric {
      const sorted = [...lyric.blocks].sort((a, b) => a.endTimestamp - b.endTimestamp)

      return { ...lyric, blocks: sorted }
    },

    /** Fix overlapping timestamps (ensures strictly increasing ends). */
    normalizeTimestamps(lyric: Lyric): Lyric {
      if (lyric.blocks.length === 0) return lyric

      const normalized = [...lyric.blocks]

      let lastEnd = -1

      for (let i = 0; i < normalized.length; i++) {
        if (normalized[i].endTimestamp <= lastEnd) {
          normalized[i] = { ...normalized[i], endTimestamp: lastEnd + 0.01 }
        }

        lastEnd = normalized[i].endTimestamp
      }

      return { ...lyric, blocks: normalized }
    },
  },

  syncer: {
    /** Mark a block as finished at the current audio time (auto-sorts & normalizes). */
    finishBlock(lyric: Lyric, index: number, currentAudioTime: number): Result<Lyric> {
      const updatedBlock = lyricBlockUtils.update.setEndTimestamp(lyric.blocks[index], currentAudioTime)
      const replaceBlockResult = lyricUtils.mutations.replaceBlock(lyric, index, updatedBlock)
      const sortBlocksResult = convertResult(replaceBlockResult, data => lyricUtils.mutations.sortBlocks(data))
      const normalizationResult = convertResult(sortBlocksResult, data =>
        lyricUtils.mutations.normalizeTimestamps(data),
      )

      return normalizationResult
    },
  },

  serialization: {
    /** Parse a Lyric from a JSON string. */
    fromJSON(json: string): Result<Lyric> {
      try {
        const parsed = JSON.parse(json)
        return lyricUtils.factories.fromRaw(parsed)
      } catch {
        return err(LyricErrors.InvalidData)
      }
    },

    /** Serialize the Lyric to a JSON string. */
    toJSONString(lyric: Lyric, space: number = 2): string {
      return JSON.stringify(lyric, null, space)
    },
  },
}
