import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const BASE_URL = 'https://powerful-dusk-84737.herokuapp.com/api';
const BASE_URL = 'http://192.168.1.99:1337/api';

export const https = axios.create({
  baseURL: BASE_URL,
});

const httpsPrivate = axios.create({
  baseURL: BASE_URL,
});

const getToken = async () => {
  return await AsyncStorage.getItem('@accessToken');
};

httpsPrivate.interceptors.request.use(
  async config => {
    if (!config.headers['Authorization']) {
      const token = await getToken();
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

export default httpsPrivate;
