import {getPostsMapper} from '../screens/feed/mapper/get-post-mapper';
import {getProfilePostsMapper} from '../screens/profile/mapper/get-post-mapper';
import httpsPrivate from './https';

export const getPosts = async ({pageParam = 1}) => {
  const reverse = '&sort[0]=createdAt:desc';

  const pagination = `&pagination[page]=${pageParam}&pagination[pageSize]=2`;

  const url = `/posts?populate[0]=images&populate[1]=user${pagination}${reverse}`;

  try {
    const response = await httpsPrivate.get(url);
    const mappedResponse = getPostsMapper(response.data.data);
    return mappedResponse;
  } catch (error) {
    console.log('getPosts Error', error);
  }
};

export const getProfilePosts = async () => {
  const url = '/posts/me';

  try {
    const response = await httpsPrivate.get(url);
    const mappedResponse = getProfilePostsMapper(response.data.results);
    return mappedResponse;
  } catch (error) {
    console.log('getPosts Error', error);
  }
};
