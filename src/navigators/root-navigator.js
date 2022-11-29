import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './app-navigator';
import {AuthStack} from './auth-navigator';
import useAuthStore from '../store/store';
import useUserInfo from '../hooks/useUserInfo';
import Indicator from '../components/indicator/indicator';

export const RootNavigation = () => {
  const {data, isLoading} = useUserInfo();
  const {accessToken, userInfo} = data || {};

  const setUserInfo = useAuthStore(state => state.setUserInfo);
  const signIn = useAuthStore(state => state.signIn);
  // queryClient

  useEffect(() => {
    signIn(accessToken);
    setUserInfo(userInfo || undefined);
  }, [accessToken, userInfo]);

  if (isLoading) return <Indicator />;

  return (
    <NavigationContainer>
      {accessToken ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
