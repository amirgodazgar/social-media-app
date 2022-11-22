/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useCallback, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Feed from './src/components/feed/feed';
import Login from './src/components/login/login';
import NewPost from './src/components/new-post/new-post';
import Profile from './src/components/profile/profile';
import Register from './src/components/register/register';
import Setting from './src/components/setting/setting';
import Welcome from './src/components/welcome/welcome';
import PostDetail from './src/components/post-detail/post-detail';

const queryClient = new QueryClient();

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <SafeAreaView style={{flex: 1}}>
          <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Feed" component={Feed} />
            <Stack.Screen name="NewPost" component={NewPost} />
            <Stack.Screen name="Post Detail" component={PostDetail} />
            <Stack.Screen name="Setting" component={Setting} />
          </Stack.Navigator>
        </SafeAreaView>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
