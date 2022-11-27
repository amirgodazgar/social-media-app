import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './app-navigator';
import {AuthStack} from './auth-navigator';
import useAuthStore from '../store/store';
import useStorage from '../hooks/useStorage';

export const RootNavigation = () => {
  const [token, setToken] = useState(null);
  const isToken = useAuthStore(state => state.accessToken);
  const {getItem, data} = useStorage();

  useEffect(() => {
    getItem('accessToken');
    setToken(data);
    console.log('tttttttttt', data);
  }, [data]);

  console.log('tttttttttt', token);

  return (
    <NavigationContainer>
      {token ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
