import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './actionsStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Text from '../text/text';

const Actions = () => {
  return (
    <View style={styles.actinsContainer}>
      <View style={styles.iconBox}>
        <TouchableOpacity
          style={styles.touchableBox}
          activeOpacity={0.6}
          onPress={() => {}}>
          <Icon style={styles.icon} size={18} name="heart" />
          <Text style={styles.actionText}>10,140</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchableBox}
          activeOpacity={0.6}
          onPress={() => {}}>
          <Icon style={styles.icon} size={18} name="comment" />
          <Text style={styles.actionText}>857</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchableBox}
          activeOpacity={0.6}
          onPress={() => {}}>
          <Icon style={styles.icon} size={18} name="paper-plane" />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.touchableBox}
          activeOpacity={0.6}
          onPress={() => {}}>
          <Icon style={styles.icon} size={18} name="bookmark" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Actions;
