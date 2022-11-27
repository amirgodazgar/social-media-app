import React, {useEffect} from 'react';
import {
  StatusBar,
  View,
  Image,
  TextInput,
  Button,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Text from '../../components/text/text';
import {styles} from './loginStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Controller, useForm} from 'react-hook-form';
import {useLogin} from '../../hooks/useLogin';
import useAuthStore from '../../store/store';

const Login = () => {
  const userInfo = useAuthStore(state => state.userInfo);
  const {control, handleSubmit} = useForm({
    defaultValues: {
      identifier: '',
      password: '',
    },
  });

  const {setUserInfo, isLoading, data} = useLogin();

  const onSubmit = ({identifier, password}) => {
    setUserInfo(identifier, password);
  };

  // useEffect(() => {
  //   setItem('accessToken', data?.jwt);
  //   setItem('userInfo', data?.user);
  //   console.log('submit', data?.user);
  // }, [data]);

  // const storage = {
  //   accessToken: '',
  //   userInfo: {
  //     id: 2,
  //     username: 'reza.heydari',
  //     email: 'r@gmail.com',
  //   },
  // };

  console.log('0000000', data, isLoading);

  // const res = {
  //   jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjY4NTk4ODk0LCJleHAiOjE2NzExOTA4OTR9.XzLnSLkMa3wn5P49BVi574mx2ARLKVUi5-rvVL08fAU',
  //   user: {
  //     blocked: false,
  //     confirmed: true,
  //     createdAt: '2022-11-10T14:29:48.075Z',
  //     email: 'r@gmail.com',
  //     id: 2,
  //     provider: 'local',
  //     updatedAt: '2022-11-10T14:29:48.075Z',
  //     username: 'reza.heydari',
  //   },
  // };

  return (
    <LinearGradient
      style={{flex: 1}}
      colors={['#181818', '#fe3d6d', '#181818']}>
      <ScrollView contentContainerStyle={styles.viewContainer}>
        <StatusBar
          animated={true}
          backgroundColor="#fe3d6d"
          barStyle="default"
          showHideTransition="fade"
          hidden={false}
        />
        <LinearGradient style={styles.gradient} colors={['#181818', '#181818']}>
          <View style={styles.box}>
            <Text style={styles.header}>Welcome back to Wow</Text>
            <Text style={styles.subHeader}>Login to your account</Text>

            <View style={styles.avatarContainer}>
              {isLoading ? (
                <ActivityIndicator size="large" color="#EAEAEA" />
              ) : (
                !userInfo && (
                  <Image
                    style={styles.avatar}
                    source={require('../../assets/login.png')}
                  />
                )
              )}
              {userInfo && (
                <View>
                  <Text style={styles.subHeader}>
                    Welcome {userInfo.username}
                  </Text>
                  <Text style={styles.subHeader}>Email : {userInfo.email}</Text>
                </View>
              )}
            </View>
            <View style={styles.avatarContainer}>
              <Icon
                name="envelope"
                size={15}
                style={styles.icon}
                color="#fe3d6d"
                solid
              />
              <Controller
                name="identifier"
                control={control}
                rules={{
                  required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    keyboardType="email-address"
                    placeholder="Email"
                    placeholderTextColor={'#EAEAEA'}
                    style={styles.input}
                  />
                )}
              />
            </View>
            <View style={styles.avatarContainer}>
              <Icon
                name="lock"
                size={15}
                style={styles.icon}
                color="#fe3d6d"
                solid
              />
              <Controller
                name="password"
                control={control}
                rules={{
                  required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    secureTextEntry={true}
                    placeholder="Password"
                    placeholderTextColor={'#EAEAEA'}
                    style={styles.input}
                  />
                )}
              />
            </View>
            <Button
              onPress={handleSubmit(onSubmit)}
              title="Login"
              color="#fe3d6d"
            />
          </View>
        </LinearGradient>

        <View>
          {!isLoading && (
            <Text style={{color: '#eee'}}>{String(userInfo?.username)}</Text>
          )}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Login;
