import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import Text from '../../components/text/text';
import {styles} from './profileStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import List from 'react-native-vector-icons/FontAwesome';
import Reels from 'react-native-vector-icons/FontAwesome';
import UserTag from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {SCREEN_NAMES} from '../../constant/screenRoutes';
import useUserInfo from '../../hooks/useUserInfo';
import Indicator from '../../components/indicator/indicator';
import {useQuery} from 'react-query';
import {getProfilePosts} from '../../services/getPosts';

const Profile = () => {
  const navigation = useNavigation();
  const {data, isLoading} = useUserInfo();
  const {userInfo} = data || {};

  const {data: posts, isLoading: postsIsLoading} = useQuery(
    'profile-posts',
    getProfilePosts,
  );

  const info = [
    {num: 91, title: 'Posts'},
    {num: 485, title: 'Followers'},
    {num: 927, title: 'Following'},
  ];
  const bio = ['React native developer', 'Guitar player', 'Agnostic'];
  const stories = [
    {src: require('../../assets/man2.jpg'), title: 'Me'},
    {src: require('../../assets/guitar.jpg'), title: 'Guitar'},
    {src: require('../../assets/friends.jpg'), title: 'Friends'},
    {src: require('../../assets/canada.jpg'), title: 'Canada'},
    {src: require('../../assets/movies.jpeg'), title: 'Movies'},
  ];

  const imageSrcType = source => {
    if (typeof source === 'string') {
      return {uri: source};
    }
    if (typeof source === 'number') {
      return source;
    }
  };

  if (isLoading || postsIsLoading) {
    return <Indicator />;
  }

  console.log(posts[0].imageSrc);

  const renderItem = ({item}) => (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() =>
        navigation.navigate(SCREEN_NAMES.PROFILE_POST_DETAIL, {
          id: item.id,
          username: userInfo.username,
          title: item.title,
          caption: item.caption,
          publishAt: item.publishAt,
          avatarSrc: item.avatarSrc,
          imageSrc: item.imageSrc,
        })
      }>
      <Image style={styles.post} source={imageSrcType(item.imageSrc)} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.menuContainer}>
        <View style={styles.usernameBox}>
          <Icon name="lock" size={15} style={styles.icon} />
          <Text style={styles.username}>{userInfo.username}</Text>
          <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
            <Icon name="chevron-down" size={15} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.userInfoContainer}>
        <View style={styles.informationBox}>
          <Image
            style={styles.avatar}
            source={require('../../assets/man2.jpg')}
          />
          {info.map(({num, title}) => (
            <View style={styles.information} key={title}>
              <Text style={styles.infoNumber}>{num}</Text>
              <Text style={styles.infoText}>{title}</Text>
            </View>
          ))}
        </View>
        <View style={styles.bioBox}>
          <Text style={styles.bioName}>{userInfo.username}</Text>
          {bio.map(i => (
            <Text key={i} style={styles.bioText}>
              {i}
            </Text>
          ))}
        </View>
        <View>
          <TouchableOpacity style={styles.EditProfileBtn}>
            <Text style={styles.editText}>Edit profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.storiesContainer}>
        {stories.map(({src, title}) => (
          <TouchableOpacity activeOpacity={0.6} key={title}>
            <View style={styles.story}>
              <Image style={styles.storyImage} source={src} />
              <Text>{title}</Text>
            </View>
          </TouchableOpacity>
        ))}
        <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
          <View style={styles.story}>
            <View style={styles.addStory}>
              <Icon name="plus" style={styles.addStoryIcon} />
            </View>
            <Text>New</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.postsContainer}>
        <View style={styles.postTabs}>
          <View style={[styles.postTab, styles.activeTab]}>
            <List name="table" size={30} color="#eaeaea" />
          </View>
          <View style={styles.postTab}>
            <Reels name="youtube-play" size={30} color="#B2B2B2" />
          </View>
          <View style={styles.postTab}>
            <UserTag name="user-tag" size={30} color="#B2B2B2" />
          </View>
        </View>

        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={false}
          numColumns={3}
        />
      </View>
    </View>
  );
};

export default Profile;
