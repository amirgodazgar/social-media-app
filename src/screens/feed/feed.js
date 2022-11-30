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

  // console.log('posts', postsData);

  // const data = [
  //   {
  //     id: 1,
  //     username: 'Bobby Fischer',
  //     title: 'My close friend',
  //     caption:
  //       ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis ratione minus repudiandae libero, sed incidunt natus aperiam nisi tempore...',

  //     publishAt: '3 Days ago',
  //     imageSrc: require('../../assets/post1.jpeg'),
  //     avatarSrc: require('../../assets/girl.jpg'),
  //   },
  //   {
  //     id: 2,
  //     username: 'Bobby Fischer',
  //     title: 'My setup',
  //     caption:
  //       ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis ratione minus repudiandae libero, sed incidunt natus aperiam nisi tempore...',

  //     publishAt: '3 Days ago',
  //     imageSrc: require('../../assets/post5.jpg'),
  //     avatarSrc: require('../../assets/man.webp'),
  //   },
  //   {
  //     id: 3,
  //     username: 'Bobby Fischer',
  //     title: 'Los Angles',
  //     caption:
  //       ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis ratione minus repudiandae libero, sed incidunt natus aperiam nisi tempore...',

  //     publishAt: '3 Days ago',
  //     imageSrc: require('../../assets/post-pic3.jpg'),
  //     avatarSrc: require('../../assets/girl4.jpeg'),
  //   },
  //   {
  //     id: 4,
  //     username: 'Bobby Fischer',
  //     title: 'Friendship',
  //     caption:
  //       ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis ratione minus repudiandae libero, sed incidunt natus aperiam nisi tempore...',

  //     publishAt: '3 Days ago',
  //     imageSrc: require('../../assets/post-pic2.jpg'),
  //     avatarSrc: require('../../assets/man4.jpeg'),
  //   },
  //   {
  //     id: 5,
  //     username: 'Bobby Fischer',
  //     title: 'Space X',
  //     caption:
  //       ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis ratione minus repudiandae libero, sed incidunt natus aperiam nisi tempore...',

  //     publishAt: '3 Days ago',
  //     imageSrc: require('../../assets/post2.jpg'),
  //     avatarSrc: require('../../assets/girl3.jpeg'),
  //   },
  //   {
  //     id: 6,
  //     username: 'Bobby Fischer',
  //     title: 'Macbook M1 pro ',
  //     caption:
  //       ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis ratione minus repudiandae libero, sed incidunt natus aperiam nisi tempore...',

  //     publishAt: '3 Days ago',
  //     imageSrc: require('../../assets/post4.jpeg'),
  //     avatarSrc: require('../../assets/man.webp'),
  //   },
  //   {
  //     id: 7,
  //     username: 'Bobby Fischer',
  //     title: 'Hang out with friends',
  //     caption:
  //       ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis ratione minus repudiandae libero, sed incidunt natus aperiam nisi tempore...',

  //     publishAt: '3 Days ago',
  //     imageSrc: require('../../assets/friends.jpg'),
  //     avatarSrc: require('../../assets/man2.jpg'),
  //   },
  //   {
  //     id: 8,
  //     username: 'Bobby Fischer',
  //     title: 'Travel to Canada',
  //     caption:
  //       ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis ratione minus repudiandae libero, sed incidunt natus aperiam nisi tempore...',

  //     publishAt: '3 Days ago',
  //     imageSrc: require('../../assets/canada.jpg'),
  //     avatarSrc: require('../../assets/girl.jpg'),
  //   },
  //   {
  //     id: 9,
  //     username: 'Bobby Fischer',
  //     title: 'Breaking Bad',
  //     caption:
  //       ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis ratione minus repudiandae libero, sed incidunt natus aperiam nisi tempore...',

  //     publishAt: '3 Days ago',
  //     imageSrc: require('../../assets/movies.jpeg'),
  //     avatarSrc: require('../../assets/girl4.jpeg'),
  //   },
  // ];

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
