/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootNavigation} from './src/navigators/root-navigator';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{flex: 1}}>
        <RootNavigation />
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default App;
