import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './app-navigator';
import {AuthStack} from './auth-navigator';

export const RootNavigation = () => {
  const isToken = false;
  return (
    <NavigationContainer>
      {isToken ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
