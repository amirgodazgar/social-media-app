import React from 'react';
import {StatusBar, View} from 'react-native';
import ToolBar from './tool-bar';
import {styles} from './layoutStyles';
import Stories from '../stories/stories';

const Layout = ({children, storyMode}) => {
  const storyModeOff = storyMode ? null : {height: '91%'};

  return (
    <View style={styles.layoutContainer}>
      <StatusBar
        animated={true}
        backgroundColor="#fe3d6d"
        barStyle="default"
        showHideTransition="fade"
        hidden={false}
      />
      {storyMode ? (
        <View style={styles.header}>
          <Stories />
        </View>
      ) : null}
      <View style={[styles.postsContainer, storyModeOff]}>{children}</View>
      <ToolBar />
    </View>
  );
};

export default Layout;
