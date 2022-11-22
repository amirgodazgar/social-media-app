import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Text from '../text/text';
import {styles} from './postStyles';

import Actions from './actions';

const Post = ({username, caption, date, isFollow, avatarSrc, postSrc}) => {
  const followed = isFollow ? {backgroundColor: '#303030'} : null;

  return (
    <View style={styles.postBox}>
      <View style={styles.userInfo}>
        <View style={styles.avatarBox}>
          <Image style={styles.avatar} source={avatarSrc} />
          <View style={styles.userInfoTexts}>
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.time}>{date}</Text>
          </View>
        </View>
        <View style={styles.followBox}>
          <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
            <View style={[styles.followBtn, followed]}>
              <Text style={styles.btnText}>
                {isFollow ? 'Following' : 'Follow'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.caption}>
        <View>
          <Text style={styles.summary}>{caption.substring(0, 40)}...</Text>
        </View>
      </View>
      <View style={styles.photoContainer}>
        <View style={styles.postImage}>
          <Image style={styles.postImage} source={postSrc} />
        </View>
      </View>
      <Actions />
    </View>
  );
};

export default Post;
