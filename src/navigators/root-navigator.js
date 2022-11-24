import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Feed from '../components/feed/feed';
import NewPost from '../components/new-post/new-post';
import PostDetail from '../components/post-detail/post-detail';
import Profile from '../components/profile/profile';
import Setting from '../components/setting/setting';

const headerStyles = {
  headerStyle: {
    backgroundColor: '#181818',
  },
  headerTintColor: '#eaeaea',
};

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const ProfileStack = createNativeStackNavigator();
const FeedStack = createNativeStackNavigator();

const ProfileDrawerScreen = () => (
  <Drawer.Navigator
    screenOptions={{
      drawerStyle: {
        backgroundColor: '#181818',
      },
      drawerActiveTintColor: '#eaeaea',
      drawerInactiveTintColor: '#808080',
      headerStyle: {
        backgroundColor: '#181818',
      },
      headerTintColor: '#eaeaea',
    }}>
    <Drawer.Screen name="Profile" component={Profile} />
    <Drawer.Screen name="Setting" component={Setting} />
  </Drawer.Navigator>
);

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#181818',
        },
        headerTintColor: '#eaeaea',
      }}>
      <ProfileStack.Screen
        name="Main:Profile"
        component={ProfileDrawerScreen}
        options={{headerShown: false}}
      />
      <ProfileStack.Screen name="Profile:PostDetail" component={PostDetail} />
    </ProfileStack.Navigator>
  );
};

const FeedStackNavigator = () => (
  <FeedStack.Navigator>
    <FeedStack.Screen name="Feed" options={headerStyles} component={Feed} />
    <FeedStack.Screen
      name="Feed:PostDetail"
      options={headerStyles}
      component={PostDetail}
    />
  </FeedStack.Navigator>
);

const RootNavigation = () => {
  const getIcon = (routeName, isFocused) => {
    const color = isFocused ? '#fe3d6d' : '#B2B2B2';
    const TabIcon = ({name}) => <Icon size={22} color={color} name={name} />;

    switch (routeName) {
      case 'Profile:Root':
        return <TabIcon name="user" />;
      case 'NewPost':
        return <TabIcon name="plus" />;
      case 'Feed':
        return <TabIcon name="home" />;

      default:
        return <TabIcon name="user" />;
    }
  };

  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        initialRouteName="Profile:Root"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            return getIcon(route.name, focused);
          },
          tabBarActiveTintColor: '#fe3d6d',
          tabBarInactiveTintColor: '#B2B2B2',
          tabBarStyle: {
            backgroundColor: '#181818',
          },
          headerStyle: {
            backgroundColor: '#181818',
          },
          headerTintColor: '#eaeaea',
        })}>
        <Tab.Screen
          name="Feed"
          options={{headerShown: false}}
          component={FeedStackNavigator}
        />
        <Tab.Screen
          name="NewPost"
          options={{title: 'Create a new post'}}
          component={NewPost}
        />
        <Tab.Screen
          name="Profile:Root"
          component={ProfileStackScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </View>
  );
};

export default RootNavigation;
