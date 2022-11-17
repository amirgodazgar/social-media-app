import React from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import ToolBar from './tool-bar';
import {styles} from './layoutStyles';
import Stories from '../stories/stories';

const Layout = ({children}) => {
  return (
    <ScrollView contentContainerStyle={styles.layoutContainer}>
      <StatusBar
        animated={true}
        backgroundColor="#fe3d6d"
        barStyle="default"
        showHideTransition="fade"
        hidden={false}
      />
      <View style={styles.header}>
        <Stories />
      </View>
      <View style={styles.postsContainer}>{children}</View>
      <ToolBar />
    </ScrollView>
  );
};

export default Layout;
