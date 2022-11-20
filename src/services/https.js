import axios from 'axios';
const BASE_URL = 'https://powerful-dusk-84737.herokuapp.com/api';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjY4MDkwNjQzLCJleHAiOjE2NzA2ODI2NDN9.ei6cCCBfpVHFo4LvZD6gT42kLvft9L23zghXxQ5xk3U';

export const https = axios.create({
  baseURL: BASE_URL,
});

const httpsPrivate = axios.create({
  baseURL: BASE_URL,
});

httpsPrivate.interceptors.request.use(
  config => {
    if (!config.headers['Authorization']) {
      config.headers['Authorization'] = `Bearer ${TOKEN}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

export default httpsPrivate;
