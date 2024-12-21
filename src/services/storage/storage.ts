export interface Storage {
  getItem: <T = unknown>(key: string) => Promise<T | void>;
  setItem: <T>(key: string, value: T) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
}

export let storage: Storage;

export function initalizeStorage(storageImpl: Storage) {
  return storage = storageImpl;
};