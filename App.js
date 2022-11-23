/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {QueryClient, QueryClientProvider} from 'react-query';
import Feed from './src/components/feed/feed';
import Login from './src/components/login/login';
import NewPost from './src/components/new-post/new-post';
import Profile from './src/components/profile/profile';
import Register from './src/components/register/register';
import Setting from './src/components/setting/setting';
import PostDetail from './src/components/post-detail/post-detail';
import {SafeAreaView} from 'react-native-safe-area-context';
import RootNavigation from './src/navigators/root-navigator';

const queryClient = new QueryClient();

const App = () => {
  const screens = [
    {
      name: 'Register',
      component: Register,
    },
    {
      name: 'Login',
      component: Login,
    },
    {
      name: 'Profile',
      component: Profile,
    },
    {
      name: 'Feed',
      component: Feed,
    },
    {
      name: 'NewPost',
      component: NewPost,
    },
    {
      name: 'Post Detail',
      component: PostDetail,
    },
    {
      name: 'Setting',
      component: Setting,
    },
  ];

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <SafeAreaView style={{flex: 1}}>
          <RootNavigation />
        </SafeAreaView>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
