import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SCREEN_NAMES} from '../constant/screenRoutes';
import Feed from '../screens/feed/feed';
import PostDetail from '../screens/post-detail/post-detail';
import {headerStyles} from './utils/styles';
const FeedStack = createNativeStackNavigator();

export const FeedStackNavigator = () => (
  <FeedStack.Navigator>
    <FeedStack.Screen
      name={SCREEN_NAMES.FEED}
      options={headerStyles}
      component={Feed}
    />
    <FeedStack.Screen
      name={SCREEN_NAMES.FEED_POST_DETAIL}
      options={headerStyles}
      component={PostDetail}
    />
  </FeedStack.Navigator>
);
