import type { IStorageAdapter } from './IStorageAdapter'
import { LocalStorageAdapter } from './LocalStorageAdapter'

export const storage: IStorageAdapter = new LocalStorageAdapter()
export const useStorage = () => storage
