import React from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import Text from '../text/text';
import {styles} from './new-post-styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Layout from '../layout/layout';

const NewPost = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerBox}>
        <View style={styles.goBack}>
          <Text style={styles.backText}>Send Post</Text>
        </View>
        <TouchableOpacity activeOpacity={0.5}>
          <Icon name="check" size={20} color="#fe3d6d" />
        </TouchableOpacity>
      </View>

      <View style={styles.uploadContainer}>
        <View style={styles.imageBox}>
          {['1', '2', '3'].map(i => (
            <Image
              key={i}
              style={styles.image}
              source={require('../../assets/post-pic1.jpg')}
            />
          ))}
        </View>
        <View style={styles.uploaderBox}>
          <Text style={styles.uploadText}>Add photo</Text>
          <TouchableOpacity activeOpacity={0.5}>
            <Icon name="plus-circle" size={20} color="#eaeaea" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.captionContainer}>
        <TextInput
          style={styles.textArea}
          multiline={true}
          numberOfLines={3}
          placeholder="Write a caption..."
          placeholderTextColor="#b2b2b2"
        />
      </View>

      <View style={styles.tagsContainer}>
        {['Tag people', 'Add location', 'Add music', 'Hide comment'].map(i => (
          <View key={i} style={styles.tagBox}>
            <TouchableOpacity activeOpacity={0.5}>
              <Text style={styles.tagText}>{i}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default NewPost;
