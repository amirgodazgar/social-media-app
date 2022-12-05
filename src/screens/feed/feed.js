import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, TouchableOpacity} from 'react-native';
import {getPosts} from '../../services/getPosts';
import Layout from '../../components/layout/layout';
import Post from './post';
import {SCREEN_NAMES} from '../../constant/screenRoutes';
import {useQuery} from 'react-query';
import Indicator from '../../components/indicator/indicator';

// https://powerful-dusk-84737.herokuapp.com/api/posts?pagination[page]=4&pagination[pageSize]=10

const Feed = () => {
  const navigation = useNavigation();
  const {data: postsData, isLoading} = useQuery('getPosts', getPosts);

  console.log(postsData);

  if (isLoading) return <Indicator />;

  const renderItem = ({item}) => (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() =>
        navigation.navigate(SCREEN_NAMES.FEED_POST_DETAIL, {
          id: item.id,
          username: item.username,
          title: item.title,
          caption: item.caption,
          publishAt: item.publishAt,
          avatarSrc: item.avatarSrc,
          imageSrc: item.imageSrc,
        })
      }>
      <Post
        username={item.username}
        title={item.title}
        date={item.publishAt}
        caption={item.caption}
        isFollow={true}
        avatarSrc={item.avatarSrc}
        postSrc={item.imageSrc}
      />
    </TouchableOpacity>
  );

  return (
    <Layout storyMode>
      <FlatList
        data={postsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Layout>
  );
};

export default Feed;
