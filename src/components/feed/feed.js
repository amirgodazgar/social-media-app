import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {getPosts} from '../../services/getPosts';
import Layout from '../layout/layout';
import {convertDate, getPostsMapper, nameCreator} from './mapper/getpostMapper';
import Post from './post';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then(res => {
      const response = getPostsMapper(res);
      setPosts(response);
      console.log('FEED', response);
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

  return (
    <Layout storyMode>
      <ScrollView>
        {posts.map(({id, username, title, caption, publishAt, image}) => (
          <Post
            key={id}
            username={username}
            title={title}
            date={publishAt}
            caption={caption}
            isFollow={true}
            avatarSrc={require('../../assets/girl3.jpeg')}
            postSrc={require('../../assets/post-pic1.jpg')}
          />
        ))}
      </ScrollView>
    </Layout>
  );
};

export default Feed;
