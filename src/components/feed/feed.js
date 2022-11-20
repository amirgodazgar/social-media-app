import React from 'react';
import {ScrollView} from 'react-native';
import Layout from '../layout/layout';
import Post from './post';

const Feed = () => {
  const data = [
    {
      username: 'Christian Bale',
      date: '2 days ago',
      isFollow: true,
      avatarSrc: require('../../assets/man.webp'),
      postSrc: require('../../assets/post4.jpeg'),
    },
    {
      username: 'Jane Marly',
      date: '4 hours ago',
      isFollow: false,
      avatarSrc: require('../../assets/girl.jpg'),
      postSrc: require('../../assets/post-pic2.jpg'),
    },
    {
      username: 'John Doe',
      date: 'one day ago',
      isFollow: true,
      avatarSrc: require('../../assets/man4.jpeg'),
      postSrc: require('../../assets/post5.jpg'),
    },
    {
      username: 'Emma Smith',
      date: '12 hours ago',
      isFollow: false,
      avatarSrc: require('../../assets/girl3.jpeg'),
      postSrc: require('../../assets/post-pic1.jpg'),
    },
  ];

  return (
    <Layout storyMode>
      <ScrollView>
        {data.map(({username, date, isFollow, avatarSrc, postSrc}) => (
          <Post
            username={username}
            date={date}
            isFollow={isFollow}
            avatarSrc={avatarSrc}
            postSrc={postSrc}
          />
        ))}
      </ScrollView>
    </Layout>
  );
};

export default Feed;
