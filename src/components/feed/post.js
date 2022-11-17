import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Text from '../text/text';
import {styles} from './postStyles';

import Actions from './actions';

const Post = () => {
  return (
    <View style={styles.postBox}>
      <View style={styles.userInfo}>
        <View style={styles.avatarBox}>
          <Image
            style={styles.avatar}
            source={require('../../assets/man2.jpg')}
          />
          <View style={styles.userInfoTexts}>
            <Text style={styles.username}>Bobby Fischer</Text>
            <Text style={styles.time}>2 days ago</Text>
          </View>
        </View>
        <View style={styles.followBox}>
          <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
            <View style={styles.followBtn}>
              <Text style={styles.btnText}>Follow</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.caption}>
        <View>
          <Text style={styles.location}>USA, Los Angles</Text>
        </View>
        <View>
          <Text style={styles.summary}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            aperiam, accusantium quaerat minima veritatis Eum expedita qui ullam
            impedit, ea nam quae error, repellendus est nesciunt illum corrupti?
            Qui, excepturi vitae...
          </Text>
        </View>
      </View>
      <View style={styles.photoContainer}>
        <View style={styles.postImage}>
          <Image
            style={styles.postImage}
            source={require('../../assets/post-pic1.jpg')}
          />
        </View>
      </View>
      <Actions />
    </View>
  );
};

export default Post;
