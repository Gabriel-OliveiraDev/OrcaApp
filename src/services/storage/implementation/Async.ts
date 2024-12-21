import AsyncStorage from "@react-native-async-storage/async-storage";
import { Storage } from "../storage";

const Instance = AsyncStorage;

export const asyncStorage: Storage = {
  getItem: async (key) => {
    const item = await Instance.getItem(key);
    if (item) {
      return JSON.parse(item);
    };
    return null;
  },

  setItem: async (key, value) => {
    Instance.setItem(key, JSON.stringify(value));
  },

  removeItem: async key => {
    await Instance.removeItem(key)
  }
}