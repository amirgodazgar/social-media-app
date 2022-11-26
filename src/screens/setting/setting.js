import React from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import Text from '../../components/text/text';
import {styles} from './settingStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import useAuthStore from '../../store/store';

const Setting = () => {
  const signOut = useAuthStore(state => state.signOut);

  const listItems = [
    {
      icon: 'user-plus',
      title: 'Follow and invite friends',
    },
    {
      icon: 'bell',
      title: 'Notifications',
    },
    {
      icon: 'lock',
      title: 'Privacy',
    },
    {
      icon: 'shield-alt',
      title: 'Security',
    },
    {
      icon: 'bullhorn',
      title: 'Ads',
    },
    {
      icon: 'user',
      title: 'Account',
    },
    {
      icon: 'life-ring',
      title: 'Help',
    },
    {
      icon: 'info-circle',
      title: 'About',
    },
    {
      icon: 'sign-out-alt',
      title: 'Logout',
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Icon name="search" color="#b2b2b2b2" size={16} />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#b2b2b2b2"
            style={styles.searchText}
          />
        </View>
      </View>

      <View style={styles.listContainer}>
        {listItems.map(({icon, title}) => (
          <TouchableOpacity
            key={title}
            activeOpacity={0.5}
            onPress={title === 'Logout' ? () => signOut() : null}>
            <View style={styles.listItem}>
              <View style={{marginRight: icon === 'user-plus' ? 6 : 14}}>
                <Icon name={icon} size={20} color="#eaeaea" solid />
              </View>
              <Text style={styles.listText}>{title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Setting;
