import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './app-navigator';
import {AuthStack} from './auth-navigator';
import useStorage from '../hooks/useStorage';
import useAuthStore from '../store/store';
import {Text, View} from 'react-native';

export const RootNavigation = () => {
  const accessToken = useAuthStore(state => state.accessToken);
  const {getItem, data: Token} = useStorage();

  useEffect(() => {
    getItem('accessToken');
  }, [accessToken, getItem]);

  console.log('Navigation-Token', Token);

  return (
    <NavigationContainer>
      {Token ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
