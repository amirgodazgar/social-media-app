import React from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import Layout from '../layout/layout';
import Text from '../text/text';
import {styles} from './profileStyles';

import Icon from 'react-native-vector-icons/FontAwesome5';
import List from 'react-native-vector-icons/FontAwesome';
import Reels from 'react-native-vector-icons/FontAwesome';
import UserTag from 'react-native-vector-icons/FontAwesome5';

const Profile = () => {
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
    require('../../assets/post1.jpeg'),
    require('../../assets/post4.jpeg'),
    require('../../assets/post5.jpg'),
    require('../../assets/post-pic2.jpg'),
    require('../../assets/post2.jpg'),
    require('../../assets/post-pic3.jpg'),
    require('../../assets/guitar.jpg'),
    require('../../assets/post-pic1.jpg'),
    require('../../assets/canada.jpg'),
    require('../../assets/movies.jpeg'),
    require('../../assets/post-pic2.jpg'),
    require('../../assets/post3.jpeg'),
  ];

  //avatar api
  // https://api.lorem.space/image/face?w=150&h=151

  return (
    <Layout>
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
            <View style={styles.usernameBox}>
              <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
                <Icon name="bars" size={20} style={styles.icon} />
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
              {posts.map((src, index) => (
                <TouchableOpacity key={index.toString()} activeOpacity={0.6}>
                  <Image style={styles.post} source={src} />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default Profile;
