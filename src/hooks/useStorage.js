import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useStorage = () => {
  const [data, setData] = useState(null);

  //   ------------------- SET DATA -------------------------
  const setItem = async (key, value) => {
    try {
      if (typeof value === 'string') {
        await AsyncStorage.setItem(`@${key}`, value);
      } else {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(`@${key}`, jsonValue);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //   ------------------- GET DATA -------------------------
  const getItem = async key => {
    try {
      if (typeof value === 'string') {
        const value = await AsyncStorage.getItem(`@${key}`);
        if (value !== null) {
          setData(value);
        }
      } else {
        const jsonValue = await AsyncStorage.getItem(`@${key}`);
        const value = jsonValue != null ? JSON.parse(jsonValue) : null;
        setData(value);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log('111111111111', data);
  return {
    setItem,
    getItem,
    data,
  };
};

export default useStorage;
