import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SCREEN_NAMES} from '../constant/screenRoutes';
import Login from '../screens/login/login';
import Register from '../screens/register/register';

const AuthenticationStack = createNativeStackNavigator();

export const AuthStack = () => (
  <AuthenticationStack.Navigator initialRouteName={SCREEN_NAMES.LOGIN}>
    <AuthenticationStack.Screen name={SCREEN_NAMES.LOGIN} component={Login} />
    <AuthenticationStack.Screen
      name={SCREEN_NAMES.REGISTER}
      component={Register}
    />
  </AuthenticationStack.Navigator>
);
