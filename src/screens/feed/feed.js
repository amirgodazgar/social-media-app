import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from 'react-native';
import {getPosts} from '../../services/getPosts';
import Layout from '../../components/layout/layout';
import Post from './post';
import {SCREEN_NAMES} from '../../constant/screenRoutes';
import {useInfiniteQuery} from 'react-query';
import Indicator from '../../components/indicator/indicator';

const Feed = () => {
  const navigation = useNavigation();

  const {isLoading, isFetchingNextPage, data, hasNextPage, fetchNextPage} =
    useInfiniteQuery('posts', getPosts, {
      getNextPageParam: (_, allPage) => {
        if (allPage.length < 4) return allPage.length + 1;
        else return undefined;
      },
    });

  const loadMore = () => {
    if (hasNextPage) fetchNextPage();
  };

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

  const scrollIndicator = () => (
    <View style={{padding: 8}}>
      <ActivityIndicator size="large" color="#eaeaea" />
    </View>
  );

  return (
    <Layout storyMode>
      <FlatList
        data={data.pages.flat()}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={loadMore}
        onEndReachedThreshold={0.3}
        ListFooterComponent={isFetchingNextPage ? scrollIndicator : null}
      />
    </Layout>
  );
};

export default Feed;
