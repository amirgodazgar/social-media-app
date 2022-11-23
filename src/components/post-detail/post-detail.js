import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Text from '../text/text';
import {styles} from './post-detail-styles';
import Actions from '../feed/actions';
import Layout from '../layout/layout';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

const PostDetail = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const {
    username,
    title,
    publishAt: date,
    caption,
    avatarSrc,
    imageSrc: postSrc,
  } = route.params;

  useFocusEffect(() => {
    navigation.setOptions({title});
  });

  const isFollow = true;
  const followed = isFollow ? {backgroundColor: '#303030'} : null;

  return (
    <Layout>
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
            <Text style={styles.title}>{title}</Text>
          </View>
          <View>
            <Text style={styles.summary}>{caption}...</Text>
          </View>
        </View>
        <View style={styles.photoContainer}>
          <View style={styles.postImage}>
            <Image style={styles.postImage} source={postSrc} />
          </View>
        </View>
        <Actions />
      </View>
    </Layout>
  );
};

export default PostDetail;
