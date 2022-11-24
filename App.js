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
import {SafeAreaView} from 'react-native-safe-area-context';
import RootNavigation from './src/navigators/root-navigator';

const queryClient = new QueryClient();

const App = () => {
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
