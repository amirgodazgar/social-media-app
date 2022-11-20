import httpsPrivate from './https';

export const getPosts = async () => {
  try {
    const response = await httpsPrivate.get(
      '/posts?populate[0]=images&populate[1]=user',
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
