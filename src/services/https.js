import axios from 'axios';
const BASE_URL = 'https://powerful-dusk-84737.herokuapp.com/api';

export const https = axios.create({
  baseURL: BASE_URL,
});

export const httpsPrivate = axios.create({
  baseURL: BASE_URL,
});
