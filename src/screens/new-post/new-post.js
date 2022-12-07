import React, {useState} from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import Text from '../../components/text/text';
import {styles} from './new-post-styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Controller, useForm} from 'react-hook-form';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import useCreatePost from '../../hooks/useCreatePost';
import Indicator from '../../components/indicator/indicator';
import {useNavigation} from '@react-navigation/native';
import {SCREEN_NAMES} from '../../constant/screenRoutes';

const NewPost = () => {
  const [uploadData, setUploadData] = useState(null);
  const {control, handleSubmit, reset} = useForm({
    defaultValues: {
      title: '',
      caption: '',
    },
  });
  const {navigate} = useNavigation();
  const {setCreateNewPost, isLoading, data} = useCreatePost();

  const uploadImage = () => {
    launchImageLibrary({}, res => {
      if (!res.didCancel) {
        const assets = res.assets[0];
        setUploadData({
          name: assets.fileName,
          type: assets.type,
          uri: assets.uri,
        });
      }
    });
  };

  const onSubmit = ({title, caption}, event) => {
    const {name, type, uri} = uploadData;
    const data = JSON.stringify({
      title,
      caption,
    });
    const formData = new FormData();
    formData.append('data', data);
    formData.append('files.images', {
      name,
      type,
      uri,
    });

    setCreateNewPost(formData);

    reset({title: '', caption: ''});

    setTimeout(() => {
      navigate(SCREEN_NAMES.FEED_ROOT);
    }, 2000);
  };

  if (isLoading) return <Indicator />;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerBox}>
        <View style={styles.goBack}>
          <Text style={styles.backText}>Send Post</Text>

          {data ? (
            <Text style={{color: '#9CFF2E'}}>Post has been sent</Text>
          ) : null}
        </View>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          activeOpacity={0.5}
          style={styles.sendBtn}>
          <Text style={styles.sendText}>Send</Text>
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
          <TouchableOpacity activeOpacity={0.5} onPress={uploadImage}>
            <Icon name="plus-circle" size={20} color="#eaeaea" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.captionContainer}>
        <Controller
          name="title"
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.textArea}
              placeholder="Title"
              placeholderTextColor="#b2b2b2"
            />
          )}
        />

        <Controller
          name="caption"
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              style={styles.textArea}
              multiline={true}
              numberOfLines={3}
              placeholder="Write a caption..."
              placeholderTextColor="#b2b2b2"
            />
          )}
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
