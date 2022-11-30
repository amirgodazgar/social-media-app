import httpsPrivate from './https';

export const createNewPost = async formData => {
  try {
    const response = await httpsPrivate.post('/posts', formData, {
      headers: {
        ContentType: 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
