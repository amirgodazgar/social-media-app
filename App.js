/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useCallback, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import Feed from './src/components/feed/feed';
import Login from './src/components/login/login';
import Register from './src/components/register/register';
import Welcome from './src/components/welcome/welcome';
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{flex: 1}}>
        {/* <Register /> */}
        {/* <Login /> */}
        <Feed />
        {/* <Welcome /> */}
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default App;

// {login ? (
// <Welcome logout={logoutHandler} />
// ) : (
// <Login login={loginHandler} />
// )}
