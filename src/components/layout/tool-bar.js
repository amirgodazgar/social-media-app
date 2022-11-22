import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Text from '../text/text';
import {styles} from './layoutStyles';

const ToolBar = () => {
  const actions = [
    {name: 'home', title: 'Home'},
    {name: 'search', title: 'Search'},
    {name: 'plus', title: 'New post'},
    {name: 'heart', title: 'Notifications'},
    {name: 'user', title: 'Profile'},
  ];
  const isSelected = name => (name === 'home' ? '#fe3d6d' : '#B2B2B2');
  const Tab = createBottomTabNavigator();

  const Action = (name, title) => (
    <TouchableOpacity
      key={name}
      style={styles.toolbarTouchableBox}
      activeOpacity={0.6}
      onPress={() => {}}>
      <Icon
        style={styles.toolbarIcon}
        size={22}
        name={name}
        color={isSelected(name)}
      />
      <Text style={[styles.actionText, {color: isSelected(name)}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.toolbarBox}>
      {/* <Tab.Navigator initialRouteName="Home"> */}
        {/* {actions.map(({name, title}) => (
          <Tab.Screen
            key={title}
            name={title}
            component={() => <Action name={name} title={title} />}
          />
        ))} */}
        {/* <Tab.Screen name="Home" component={Action} /> */}
      {/* </Tab.Navigator> */}
    </View>
  );
};

export default ToolBar;
