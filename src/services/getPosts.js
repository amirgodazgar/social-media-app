import {getPostsMapper} from '../screens/feed/mapper/get-post-mapper';
import httpsPrivate from './https';

export const getPosts = async () => {
  try {
    const response = await httpsPrivate.get(
      '/posts?populate[0]=images&populate[1]=user&sort[0]=createdAt:desc',
    );

    const mappedResponse = getPostsMapper(response.data.data);
    return mappedResponse;
  } catch (error) {
    console.log('error', error);
  }
};
