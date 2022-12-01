import {https} from './https';

export const getRegister = async userInfo => {
  try {
    const response = await https.post('/auth/local/register', userInfo);
    return response.data;
  } catch (error) {
    console.log('error', error);
  }
};

export const login = async userInfo => {
  try {
    const response = await https.post('/auth/local', userInfo);
    return response.data;
  } catch (error) {
    console.log('error', error);
  }
};
