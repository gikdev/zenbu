import { Err, ok, type Result } from 'neverthrow'

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

  save(value: T): Result<void, string> {
    return this.#storage.save(this.#key, JSON.stringify(value))
  }

  load(): Result<T, string> {
    const result = this.#storage.load(this.#key)

    if (result.isErr()) {
      return result as Err<T, string>
    }

    if (!result.value.some) {
      return ok(this.#defaultValue)
    }

    try {
      return ok(JSON.parse(result.value.value) as T)
    } catch {
      return ok(this.#defaultValue)
    }
  }
}
