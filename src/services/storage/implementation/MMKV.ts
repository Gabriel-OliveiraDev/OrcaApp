import { MMKV } from 'react-native-mmkv';
import { Storage } from '../storage';

const Instance = new MMKV();

export const MMKVStorage: Storage = {
  getItem: async key => {
    const item = Instance.getString(key);
    if (item) {
      return JSON.parse(item);
    };
    return null;
  },

  setItem: async (key, value) => {
    Instance.set(key, JSON.stringify(value));
  },

  removeItem: async key => {
    Instance.delete(key)
  }
}