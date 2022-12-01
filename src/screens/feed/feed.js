import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import {getPosts} from '../../services/getPosts';
import Layout from '../../components/layout/layout';
import Post from './post';
import {SCREEN_NAMES} from '../../constant/screenRoutes';
import {useQuery} from 'react-query';
import Indicator from '../../components/indicator/indicator';

// https://powerful-dusk-84737.herokuapp.com/api/posts?pagination[page]=4&pagination[pageSize]=10

const Feed = () => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);
  const {data: postsData, isLoading} = useQuery('getPosts', getPosts);

  useEffect(() => {
    getPosts().then(res => {
      setPosts(res);
    });
  }, []);

  if (isLoading) return <Indicator />;

  return (
    <Layout storyMode>
      <ScrollView>
        {postsData.map(
          ({id, username, title, caption, publishAt, avatarSrc, imageSrc}) => (
            <TouchableOpacity
              key={id}
              activeOpacity={0.6}
              onPress={() =>
                navigation.navigate(SCREEN_NAMES.FEED_POST_DETAIL, {
                  id,
                  username,
                  title,
                  caption,
                  publishAt,
                  avatarSrc,
                  imageSrc,
                })
              }>
              <Post
                username={username}
                title={title}
                date={publishAt}
                caption={caption}
                isFollow={true}
                avatarSrc={avatarSrc}
                postSrc={imageSrc}
              />
            </TouchableOpacity>
          ),
        )}
      </ScrollView>
    </Layout>
  );
};

export default Feed;
