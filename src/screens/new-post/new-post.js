import React from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import Text from '../../components/text/text';
import {styles} from './new-post-styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useMutation} from 'react-query';
import {createNewPost} from '../../services/create-new-post';
import {Controller, useForm} from 'react-hook-form';

const NewPost = () => {
  const {control, handleSubmit} = useForm({
    defaultValues: {
      title: '',
      caption: '',
      imageFiles: '',
    },
  });

  const {mutate, data, isLoading} = useMutation(
    'create-new-post',
    createNewPost,
    {
      onSuccess: res => console.log(res),
    },
  );

  const onSubmit = ({title, caption, imageFiles}) => {
    const formData = new FormData();
    formData.append(
      'data',
      `"title":${title},
    "caption":${caption}`,
    );
    FormData.append('files.images', imageFiles.files[0]);

    mutate(formData);
  };

  // var formdata = new FormData();
  // formdata.append(
  //   'data',
  //   `"title":"image test",
  //   "caption":"test tsetdad"`,
  // );
  // formdata.append('files.images', fileInput.files[0], 'cat.jpg');
  // formdata.append(
  //   'files.images',
  //   fileInput.files[0],
  //   'wp5054503-amoled-computer-wallpapers.jpg',
  // );

  console.log(data);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerBox}>
        <View style={styles.goBack}>
          <Text style={styles.backText}>Send Post</Text>
        </View>
        <TouchableOpacity activeOpacity={0.5} style={styles.sendBtn}>
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
          <TouchableOpacity activeOpacity={0.5}>
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
