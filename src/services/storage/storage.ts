import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (key: string, value: string) => {
  await AsyncStorage.setItem(key, value);
};

export const mergeItem = async (key: string, value: string) => {
  await AsyncStorage.mergeItem(key, value);
};

export const removeItem = async (key: string) => {
  await AsyncStorage.removeItem(key);
};

export const getItem = async (key: string) => {
  const result = await AsyncStorage.getItem(key);

  return result;
};
