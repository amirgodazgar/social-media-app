import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {styles} from './indicator-styles';

const Indicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#eaeaea" />
    </View>
  );
};

export default Indicator;
