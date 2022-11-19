import React from 'react';
import Layout from '../layout/layout';
import Post from './post';

const Feed = () => {
  return (
    <Layout storyMode>
      <Post />
      {/* <Post /> */}
    </Layout>
  );
};

export default Feed;
