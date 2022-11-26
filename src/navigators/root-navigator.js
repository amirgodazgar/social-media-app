import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './app-navigator';
import {AuthStack} from './auth-navigator';
import useAuthStore from '../store/store';

export const RootNavigation = () => {
  const isToken = useAuthStore(state => state.accessToken);

  return (
    <NavigationContainer>
      {isToken ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
