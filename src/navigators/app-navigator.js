import {SCREEN_NAMES} from '../constant/screenRoutes';
import {BottomTabStyles, getBottomTabIcon} from './utils/styles';
import React from 'react';
import {FeedStackNavigator} from './feed-navigator';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProfileStackScreen} from './profile-navigator';
import NewPost from '../screens/new-post/new-post';
const Tab = createBottomTabNavigator();

export const AppStack = () => (
  <Tab.Navigator
    initialRouteName={SCREEN_NAMES.PROFILE_ROOT}
    screenOptions={({route}) => ({
      tabBarIcon: ({focused}) => {
        return getBottomTabIcon(route.name, focused);
      },
      ...BottomTabStyles,
    })}>
    <Tab.Screen
      name={SCREEN_NAMES.FEED_ROOT}
      options={{headerShown: false}}
      component={FeedStackNavigator}
    />
    <Tab.Screen
      name={SCREEN_NAMES.NEW_POST_ROOT}
      options={{title: 'Create a new post'}}
      component={NewPost}
    />
    <Tab.Screen
      name={SCREEN_NAMES.PROFILE_ROOT}
      component={ProfileStackScreen}
      options={{headerShown: false}}
    />
  </Tab.Navigator>
);
