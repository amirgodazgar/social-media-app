import httpsPrivate from './https';

export const createNewPost = async formData => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  try {
    const response = await httpsPrivate.post('/posts', formData, config);
    console.log('service', response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
