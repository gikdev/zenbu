import { Result } from 'neverthrow'

import type { Option } from '#/common/helpers/Option'

export interface IStorageAdapter {
  save(key: string, value: string): Result<void, string>
  load(key: string): Result<Option<string>, string>
}
