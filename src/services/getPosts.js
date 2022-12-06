import {getPostsMapper} from '../screens/feed/mapper/get-post-mapper';
import httpsPrivate from './https';

export const getPosts = async ({pageParam = 1}) => {
  try {
    const response = await httpsPrivate.get(
      `/posts?populate[0]=images&populate[1]=user&sort[0]=createdAt:desc&pagination[page]=${pageParam}&pagination[pageSize]=2`,
    );
    const mappedResponse = getPostsMapper(response.data.data);
    return mappedResponse;
  } catch (error) {
    console.log('getPosts Error', error);
  }
};
