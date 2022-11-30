import httpsPrivate from './https';

export const createNewPost = async formData => {
  const response = await httpsPrivate.post('/posts', formData, {
    headers: {
      ContentType: 'multipart/form-data',
    },
  });

  return response;
};
