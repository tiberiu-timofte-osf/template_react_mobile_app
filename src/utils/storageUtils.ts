/**
 * Utility functions for managing data in AsyncStorage.
 *
 * This module provides a set of functions to interact with AsyncStorage,
 * allowing you to add, retrieve, remove, and clear data efficiently.
 */

import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Adds an item to AsyncStorage.
 *
 * @param key - The key under which the value is stored. Must be one of the `StorageItems`.
 * @param value - The value to store. It will be serialized to a JSON string.
 */
const addItemToStorage = async (key: StorageItems, value: any) => {
  console.log('AddingKey:', key, 'Value:', value);
  await AsyncStorage.setItem(key, JSON.stringify(value));
};

/**
 * Retrieves an item from AsyncStorage.
 *
 * @param key - The key of the item to retrieve. Must be one of the `StorageItems`.
 * @returns A promise that resolves to the parsed value, or `undefined` if the key does not exist.
 */
const getItemFromStorage = async <T>(
  key: StorageItems,
): Promise<T | undefined> => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value) as T;
    }
  } catch (error) {
    console.log(error);
  }
  return undefined;
};

/**
 * Removes an item from AsyncStorage.
 *
 * @param key - The key of the item to remove. Must be one of the `StorageItems`.
 */
const removeItemFromStorage = async (key: StorageItems) => {
  await AsyncStorage.removeItem(key);
};

/**
 * Removes multiple items from AsyncStorage.
 *
 * @param keys - An array of keys to remove. Each key must be one of the `StorageItems`.
 */
const removeMultipleFromStorage = async (keys: StorageItems[]) => {
  await AsyncStorage.multiRemove(keys);
};

/**
 * Clears all items from AsyncStorage.
 */
const clearStorage = async () => {
  await AsyncStorage.clear();
};

/**
 * Enum for storage item keys.
 *
 * This enum defines the keys used for storing items in AsyncStorage.
 */
export enum StorageItems {
  UserToken = '@userToken',
  LoginResponse = '@loginResponse',
  AccountToken = '@accountToken',
  AccountId = '@accountId',
  UserId = '@userId',
}

export {
  addItemToStorage,
  getItemFromStorage,
  removeItemFromStorage,
  removeMultipleFromStorage,
  clearStorage,
};
