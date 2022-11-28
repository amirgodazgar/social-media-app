import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useStorage = () => {
  const [data, setData] = useState(null);

  //   ------------------- SET DATA -------------------------
  const setItem = async (key, value) => {
    try {
      if (typeof value === 'string') {
        await AsyncStorage.setItem(`@${key}`, value);
      }
      if (typeof value === 'object') {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(`@${key}`, jsonValue);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //   ------------------- GET DATA -------------------------
  const getItem = async (key, type = 'string') => {
    try {
      const value = await AsyncStorage.getItem(`@${key}`);

      if (value !== null) {
        if (typeof type === 'string') {
          setData(value);
        }

        if (typeof type === 'object') {
          const jsonValue = JSON.parse(value);
          setData(jsonValue);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  //   ------------------- REMOVE DATA -------------------------
  const removeItem = async key => {
    try {
      await AsyncStorage.removeItem(`@${key}`);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    setItem,
    getItem,
    removeItem,
    data,
  };
};

export default useStorage;
