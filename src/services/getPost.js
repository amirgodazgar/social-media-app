import httpsPrivate from './https';

export const getPost = async () => {
  try {
    const response = await httpsPrivate.get(
      '/posts?populate[0]=images&populate[1]=user',
    );
    return response.data;
  } catch (error) {
    console.log('error', error);
  }
};
