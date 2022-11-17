import React from 'react';
import {Image, View} from 'react-native';
import Text from '../text/text';
import {styles} from './storiesStyles';

const Stories = () => {
  const avatarList = [
    require(`../../assets/girl.jpg`),
    require(`../../assets/man.webp`),
    require(`../../assets/man2.jpg`),
    require(`../../assets/girl3.jpeg`),
    require(`../../assets/man4.jpeg`),
    require(`../../assets/girl4.jpeg`),
  ];
  return (
    <View style={styles.container}>
      {avatarList.map(i => (
        <Image style={styles.avatar} source={i} key={i} />
      ))}
    </View>
  );
};

export default Stories;
