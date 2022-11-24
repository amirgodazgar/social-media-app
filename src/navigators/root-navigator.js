import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';

import Feed from '../screens/feed/feed';
import NewPost from '../screens/new-post/new-post';
import PostDetail from '../screens/post-detail/post-detail';
import Profile from '../screens/profile/profile';
import Setting from '../screens/setting/setting';
import {SCREEN_NAMES} from '../constant/screenRoutes';
import {
  BottomTabStyles,
  drawerStyles,
  getBottomTabIcon,
  headerStyles,
} from './utils/styles';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const ProfileStack = createNativeStackNavigator();
const FeedStack = createNativeStackNavigator();

const ProfileDrawerScreen = () => (
  <Drawer.Navigator screenOptions={drawerStyles}>
    <Drawer.Screen name={SCREEN_NAMES.PROFILE} component={Profile} />
    <Drawer.Screen name={SCREEN_NAMES.SETTING} component={Setting} />
  </Drawer.Navigator>
);

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator screenOptions={headerStyles}>
      <ProfileStack.Screen
        name={SCREEN_NAMES.PROFILE_MAIN}
        component={ProfileDrawerScreen}
        options={{headerShown: false}}
      />
    </ProfileStack.Navigator>
  );
};

const FeedStackNavigator = () => (
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

const RootNavigation = () => {
  return (
    <View style={{flex: 1}}>
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
    </View>
  );
};

export default RootNavigation;
