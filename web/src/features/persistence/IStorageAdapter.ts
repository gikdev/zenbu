import type { Option } from '#/common/helpers/Option'
import type { Result } from '#/common/helpers/Result'

export interface IStorageAdapter {
  save(key: string, value: string): Result
  load(key: string): Result<Option<string>>
}
