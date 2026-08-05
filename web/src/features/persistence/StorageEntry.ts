import { ok, type Result } from '#/common/helpers/Result'

import type { IStorageAdapter } from './IStorageAdapter'

export class StorageEntry<T> {
  readonly #storage: IStorageAdapter
  readonly #key: string
  readonly #defaultValue: T

  constructor(storage: IStorageAdapter, key: string, defaultValue: T) {
    this.#storage = storage
    this.#key = key
    this.#defaultValue = defaultValue
  }

  save(value: T): Result {
    return this.#storage.save(this.#key, JSON.stringify(value))
  }

  load(): Result<T> {
    const result = this.#storage.load(this.#key)

    if (!result.ok) {
      return result
    }

    if (!result.data.some) {
      return ok(this.#defaultValue)
    }

    try {
      return ok(JSON.parse(result.data.value) as T)
    } catch {
      return ok(this.#defaultValue)
    }
  }
}
