import AsyncStorage from '@react-native-async-storage/async-storage';

// store
export const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      // saving error
      console.log(e);
    }
  }

// remove
export const removeDataAsyncStorage = async (key) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch(e) {
      // remove error
    }
  
  }

// get
export const getStoreData = async (key) => {
    try {
      return await AsyncStorage.getItem(key)
    } catch(e) {
      // read error
    }
  
    console.log('Done.')
  }