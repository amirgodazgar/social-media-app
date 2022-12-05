import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SCREEN_NAMES} from '../constant/screenRoutes';
import Login from '../screens/login/login';
import Register from '../screens/register/register';
import { ProfileStackScreen } from './profile-navigator';

const AuthenticationStack = createNativeStackNavigator();

export const AuthStack = () => (
  <AuthenticationStack.Navigator initialRouteName={SCREEN_NAMES.LOGIN}>
    <AuthenticationStack.Screen
      name={SCREEN_NAMES.LOGIN}
      component={Login}
      options={{headerShown: false}}
    />
    <AuthenticationStack.Screen
      name={SCREEN_NAMES.REGISTER}
      component={Register}
      options={{headerShown: false}}
    />
    <AuthenticationStack.Screen
      name={SCREEN_NAMES.PROFILE_ROOT}
      component={ProfileStackScreen}
      options={{headerShown: false}}
    />
  </AuthenticationStack.Navigator>
);
