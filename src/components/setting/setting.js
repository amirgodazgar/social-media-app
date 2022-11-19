import React from 'react';
import {ScrollView, View, TouchableOpacity, TextInput} from 'react-native';
import Layout from '../layout/layout';
import Text from '../text/text';
import {styles} from './settingStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Setting = () => {
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
    <Layout>
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.goBackContainer}>
            <TouchableOpacity activeOpacity={0.5}>
              <Icon name="arrow-left" size={20} color="#eaeaea" />
            </TouchableOpacity>
            <Text style={styles.goBackText}>Setting</Text>
          </View>
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
              <TouchableOpacity key={title} activeOpacity={0.5}>
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
      </ScrollView>
    </Layout>
  );
};

export default Setting;
