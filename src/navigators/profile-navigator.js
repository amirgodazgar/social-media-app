import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN_NAMES} from '../constant/screenRoutes';
import {drawerStyles, headerStyles} from './utils/styles';
import React from 'react';
import Profile from '../screens/profile/profile';
import Setting from '../screens/setting/setting';
import PostDetail from '../screens/post-detail/post-detail';

const Drawer = createDrawerNavigator();
const ProfileStack = createNativeStackNavigator();
const ProfileDrawerScreen = () => (
  <Drawer.Navigator screenOptions={drawerStyles}>
    <Drawer.Screen name={SCREEN_NAMES.PROFILE} component={Profile} />
    <Drawer.Screen name={SCREEN_NAMES.SETTING} component={Setting} />
  </Drawer.Navigator>
);

export const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator screenOptions={headerStyles}>
      <ProfileStack.Screen
        name={SCREEN_NAMES.PROFILE_MAIN}
        component={ProfileDrawerScreen}
        options={{headerShown: false}}
      />
      <ProfileStack.Screen
        name={SCREEN_NAMES.PROFILE_POST_DETAIL}
        options={headerStyles}
        component={PostDetail}
      />
    </ProfileStack.Navigator>
  );
};
