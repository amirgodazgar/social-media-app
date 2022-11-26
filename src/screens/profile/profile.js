import React from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import Text from '../../components/text/text';
import {styles} from './profileStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import List from 'react-native-vector-icons/FontAwesome';
import Reels from 'react-native-vector-icons/FontAwesome';
import UserTag from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {SCREEN_NAMES} from '../../constant/screenRoutes';

const Profile = () => {
  const navigation = useNavigation();

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
  const posts = [
    {
      id: 1,
      username: 'Bobby Fischer',
      title: 'My close friend',
      caption:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis ratione minus repudiandae libero, sed incidunt natus aperiam nisi tempore...',

      publishAt: '3 Days ago',
      imageSrc: require('../../assets/post1.jpeg'),
      avatarSrc: require('../../assets/man2.jpg'),
    },
    {
      id: 2,
      username: 'Bobby Fischer',
      title: 'My setup',
      caption:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis ratione minus repudiandae libero, sed incidunt natus aperiam nisi tempore...',

      publishAt: '3 Days ago',
      imageSrc: require('../../assets/post5.jpg'),
      avatarSrc: require('../../assets/man2.jpg'),
    },
    {
      id: 3,
      username: 'Bobby Fischer',
      title: 'Los Angles',
      caption:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis ratione minus repudiandae libero, sed incidunt natus aperiam nisi tempore...',

      publishAt: '3 Days ago',
      imageSrc: require('../../assets/post-pic3.jpg'),
      avatarSrc: require('../../assets/man2.jpg'),
    },
    {
      id: 4,
      username: 'Bobby Fischer',
      title: 'Friendship',
      caption:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis ratione minus repudiandae libero, sed incidunt natus aperiam nisi tempore...',

      publishAt: '3 Days ago',
      imageSrc: require('../../assets/post-pic2.jpg'),
      avatarSrc: require('../../assets/man2.jpg'),
    },
    {
      id: 5,
      username: 'Bobby Fischer',
      title: 'Space X',
      caption:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis ratione minus repudiandae libero, sed incidunt natus aperiam nisi tempore...',

      publishAt: '3 Days ago',
      imageSrc: require('../../assets/post2.jpg'),
      avatarSrc: require('../../assets/man2.jpg'),
    },
    {
      id: 6,
      username: 'Bobby Fischer',
      title: 'Macbook M1 pro ',
      caption:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis ratione minus repudiandae libero, sed incidunt natus aperiam nisi tempore...',

      publishAt: '3 Days ago',
      imageSrc: require('../../assets/post4.jpeg'),
      avatarSrc: require('../../assets/man2.jpg'),
    },
    {
      id: 7,
      username: 'Bobby Fischer',
      title: 'Hang out with friends',
      caption:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis ratione minus repudiandae libero, sed incidunt natus aperiam nisi tempore...',

      publishAt: '3 Days ago',
      imageSrc: require('../../assets/friends.jpg'),
      avatarSrc: require('../../assets/man2.jpg'),
    },
    {
      id: 8,
      username: 'Bobby Fischer',
      title: 'Travel to Canada',
      caption:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis ratione minus repudiandae libero, sed incidunt natus aperiam nisi tempore...',

      publishAt: '3 Days ago',
      imageSrc: require('../../assets/canada.jpg'),
      avatarSrc: require('../../assets/man2.jpg'),
    },
    {
      id: 9,
      username: 'Bobby Fischer',
      title: 'Breaking Bad',
      caption:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis ratione minus repudiandae libero, sed incidunt natus aperiam nisi tempore...',

      publishAt: '3 Days ago',
      imageSrc: require('../../assets/movies.jpeg'),
      avatarSrc: require('../../assets/man2.jpg'),
    },
  ];

  //avatar api
  // https://api.lorem.space/image/face?w=150&h=151

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.menuContainer}>
          <View style={styles.usernameBox}>
            <Icon name="lock" size={15} style={styles.icon} />
            <Text style={styles.username}>Bobby.Fischer</Text>
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
            <Text style={styles.bioName}>Bobby Fischer</Text>
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
          <View style={styles.posts}>
            {posts.map(
              ({
                id,
                username,
                title,
                caption,
                publishAt,
                avatarSrc,
                imageSrc,
              }) => (
                <TouchableOpacity
                  key={id}
                  activeOpacity={0.6}
                  onPress={() =>
                    navigation.navigate(SCREEN_NAMES.PROFILE_POST_DETAIL, {
                      id,
                      username,
                      title,
                      caption,
                      publishAt,
                      avatarSrc,
                      imageSrc,
                    })
                  }>
                  <Image style={styles.post} source={imageSrc} />
                </TouchableOpacity>
              ),
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
