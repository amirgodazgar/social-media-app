import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import {getPosts} from '../../services/getPosts';
import Layout from '../layout/layout';
import {getPostsMapper} from './mapper/getpostMapper';
import Post from './post';

const Feed = () => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then(res => {
      const response = getPostsMapper(res);
      setPosts(response);
      // console.log('FEED', response);
    });
  }, []);

  const response = {
    id: 1,
    attributes: {
      title: 'image test',
      caption: 'test tsetdad',
      createdAt: '2022-11-10T14:36:16.351Z',
      updatedAt: '2022-11-10T14:36:16.351Z',
      publishedAt: '2022-11-10T14:36:16.349Z',
      images: {
        data: [
          {
            id: 1,
            attributes: {
              name: 'wp5054503-amoled-computer-wallpapers.jpg',
              alternativeText: null,
              caption: null,
              width: 2560,
              height: 1600,
              formats: {
                large: {
                  ext: '.jpg',
                  url: '/uploads/large_wp5054503_amoled_computer_wallpapers_bbf06d8f52.jpg',
                  hash: 'large_wp5054503_amoled_computer_wallpapers_bbf06d8f52',
                  mime: 'image/jpeg',
                  name: 'large_wp5054503-amoled-computer-wallpapers.jpg',
                  path: null,
                  size: 43.58,
                  width: 1000,
                  height: 625,
                },
                small: {
                  ext: '.jpg',
                  url: '/uploads/small_wp5054503_amoled_computer_wallpapers_bbf06d8f52.jpg',
                  hash: 'small_wp5054503_amoled_computer_wallpapers_bbf06d8f52',
                  mime: 'image/jpeg',
                  name: 'small_wp5054503-amoled-computer-wallpapers.jpg',
                  path: null,
                  size: 12.66,
                  width: 500,
                  height: 313,
                },
                medium: {
                  ext: '.jpg',
                  url: '/uploads/medium_wp5054503_amoled_computer_wallpapers_bbf06d8f52.jpg',
                  hash: 'medium_wp5054503_amoled_computer_wallpapers_bbf06d8f52',
                  mime: 'image/jpeg',
                  name: 'medium_wp5054503-amoled-computer-wallpapers.jpg',
                  path: null,
                  size: 26.17,
                  width: 750,
                  height: 469,
                },
                thumbnail: {
                  ext: '.jpg',
                  url: '/uploads/thumbnail_wp5054503_amoled_computer_wallpapers_bbf06d8f52.jpg',
                  hash: 'thumbnail_wp5054503_amoled_computer_wallpapers_bbf06d8f52',
                  mime: 'image/jpeg',
                  name: 'thumbnail_wp5054503-amoled-computer-wallpapers.jpg',
                  path: null,
                  size: 3.71,
                  width: 245,
                  height: 153,
                },
              },
              hash: 'wp5054503_amoled_computer_wallpapers_bbf06d8f52',
              ext: '.jpg',
              mime: 'image/jpeg',
              size: 203.56,
              url: '/uploads/wp5054503_amoled_computer_wallpapers_bbf06d8f52.jpg',
              previewUrl: null,
              provider: 'local',
              provider_metadata: null,
              createdAt: '2022-11-10T14:36:17.884Z',
              updatedAt: '2022-11-10T14:36:17.884Z',
            },
          },
        ],
      },
    },
  };

  const data = [
    {
      id: 1,
      username: 'Bobby Fischer',
      title: 'My love',
      caption:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis ratione minus repudiandae libero, sed incidunt natus aperiam nisi tempore...',

      publishAt: '3 Days ago',
      imageSrc: require('../../assets/post1.jpeg'),
      avatarSrc: require('../../assets/girl.jpg'),
    },
    {
      id: 2,
      username: 'Bobby Fischer',
      title: 'My setup',
      caption:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis ratione minus repudiandae libero, sed incidunt natus aperiam nisi tempore...',

      publishAt: '3 Days ago',
      imageSrc: require('../../assets/post5.jpg'),
      avatarSrc: require('../../assets/man.webp'),
    },
    {
      id: 3,
      username: 'Bobby Fischer',
      title: 'Los Angles',
      caption:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis ratione minus repudiandae libero, sed incidunt natus aperiam nisi tempore...',

      publishAt: '3 Days ago',
      imageSrc: require('../../assets/post-pic3.jpg'),
      avatarSrc: require('../../assets/girl4.jpeg'),
    },
    {
      id: 4,
      username: 'Bobby Fischer',
      title: 'Friendship',
      caption:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis ratione minus repudiandae libero, sed incidunt natus aperiam nisi tempore...',

      publishAt: '3 Days ago',
      imageSrc: require('../../assets/post-pic2.jpg'),
      avatarSrc: require('../../assets/man4.jpeg'),
    },
    {
      id: 5,
      username: 'Bobby Fischer',
      title: 'Space X',
      caption:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis ratione minus repudiandae libero, sed incidunt natus aperiam nisi tempore...',

      publishAt: '3 Days ago',
      imageSrc: require('../../assets/post2.jpg'),
      avatarSrc: require('../../assets/girl3.jpeg'),
    },
    {
      id: 6,
      username: 'Bobby Fischer',
      title: 'Macbook M1 pro ',
      caption:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis ratione minus repudiandae libero, sed incidunt natus aperiam nisi tempore...',

      publishAt: '3 Days ago',
      imageSrc: require('../../assets/post4.jpeg'),
      avatarSrc: require('../../assets/man.webp'),
    },
    {
      id: 7,
      username: 'Bobby Fischer',
      title: 'Hang out with friends',
      caption:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis ratione minus repudiandae libero, sed incidunt natus aperiam nisi tempore...',

      publishAt: '3 Days ago',
      imageSrc: require('../../assets/friends.jpg'),
      avatarSrc: require('../../assets/man2.jpg'),
    },
    {
      id: 8,
      username: 'Bobby Fischer',
      title: 'Travel to Canada',
      caption:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis ratione minus repudiandae libero, sed incidunt natus aperiam nisi tempore...',

      publishAt: '3 Days ago',
      imageSrc: require('../../assets/canada.jpg'),
      avatarSrc: require('../../assets/girl.jpg'),
    },
    {
      id: 9,
      username: 'Bobby Fischer',
      title: 'Breaking Bad',
      caption:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis ratione minus repudiandae libero, sed incidunt natus aperiam nisi tempore...',

      publishAt: '3 Days ago',
      imageSrc: require('../../assets/movies.jpeg'),
      avatarSrc: require('../../assets/girl4.jpeg'),
    },
  ];

  return (
    <Layout storyMode>
      <ScrollView>
        {data.map(
          ({id, username, title, caption, publishAt, avatarSrc, imageSrc}) => (
            <TouchableOpacity
              key={id}
              activeOpacity={0.6}
              onPress={() =>
                navigation.navigate('Post Detail', {
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
