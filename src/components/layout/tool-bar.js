import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Text from '../text/text';
import {styles} from './layoutStyles';

const ToolBar = () => {
  const actions = [
    {name: 'home', text: 'Home'},
    {name: 'search', text: 'Search'},
    {name: 'plus', text: 'New post'},
    {name: 'heart', text: 'Notifications'},
    {name: 'user', text: 'Profile'},
  ];
  const isSelected = name => (name === 'home' ? '#fe3d6d' : '#EAEAEA');

  return (
    <View style={styles.toolbarBox}>
      {actions.map(({name, text}) => (
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
            {text}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ToolBar;
