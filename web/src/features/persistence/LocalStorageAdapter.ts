import { extractErrorMessage } from '#/common/helpers/extractErrorMessage'
import { none, some, type Option } from '#/common/helpers/Option'
import { err, ok, type Result } from '#/common/helpers/Result'

import type { IStorageAdapter } from './IStorageAdapter'

export class LocalStorageAdapter implements IStorageAdapter {
  save(key: string, value: string): Result {
    try {
      localStorage.setItem(key, value)
      return ok.void()
    } catch (e) {
      return err(extractErrorMessage(e))
    }
  }

  load(key: string): Result<Option<string>> {
    try {
      const value = localStorage.getItem(key)

      return ok(value ? some(value) : none())
    } catch (e) {
      return err(extractErrorMessage(e))
    }
  }
}
