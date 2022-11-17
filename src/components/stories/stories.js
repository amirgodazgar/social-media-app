import React from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {styles} from './storiesStyles';

const Stories = () => {
  const avatarList = [
    require(`../../assets/girl.jpg`),
    require(`../../assets/man.webp`),
    require(`../../assets/man2.jpg`),
    require(`../../assets/girl3.jpeg`),
    require(`../../assets/man4.jpeg`),
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
        <View>
          <Image
            style={styles.myStoryAvatarStyle}
            source={require(`../../assets/girl.jpg`)}
          />
          <View style={styles.myStoryAvatar}>
            <Icon size={10} style={styles.myStoryIcon} name="plus" />
          </View>
        </View>
      </TouchableOpacity>
      {avatarList.map(i => (
        <Image style={styles.avatar} source={i} key={i} />
      ))}
    </View>
  );
};

export default Stories;
