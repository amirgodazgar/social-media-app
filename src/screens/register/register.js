import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  StatusBar,
  View,
  Image,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Text from '../../components/text/text';
import {styles} from './registerStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Controller, useForm} from 'react-hook-form';
import {useRegister} from '../../hooks/useRegister';
import {useNavigation} from '@react-navigation/native';
import {SCREEN_NAMES} from '../../constant/screenRoutes';

const Register = () => {
  const navigation = useNavigation();
  const {setUserInfo, isLoading, data} = useRegister();
  const {control, handleSubmit} = useForm({
    defaultValues: {
      email: '',
      username: '',
      password: '',
    },
  });

  const onSubmit = ({email, username, password}) => {
    setUserInfo(email, username, password);
  };

  // const res = {
  //   jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDMsImlhdCI6MTY2ODU4NDQ3NiwiZXhwIjoxNjcxMTc2NDc2fQ.v_grLxnxWZ81PQMC1T9kK692M2Nxme85OLseaVSfwjs',
  //   user: {
  //     id: 43,
  //     username: 'uuuu.ttyy',
  //     email: 'yyaaaaa@gmail.com',
  //     provider: 'local',
  //     confirmed: true,
  //     blocked: false,
  //     createdAt: '2022-11-16T07:41:16.822Z',
  //     updatedAt: '2022-11-16T07:41:16.822Z',
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
            <Text style={styles.header}>Welcome to WOW</Text>

            <Text style={styles.subHeader}>Create a new account</Text>

            <View style={styles.avatarContainer}>
              <Image
                style={styles.avatar}
                source={require('../../assets/login.png')}
              />
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
                name="email"
                control={control}
                rules={{
                  required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    onBlur={onBlur}
                    onChangeText={onChange}
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
                name="user"
                size={15}
                style={styles.icon}
                color="#fe3d6d"
                solid
              />

              <Controller
                name="username"
                control={control}
                rules={{
                  required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    keyboardType="default"
                    placeholder="Username"
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
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    secureTextEntry={true}
                    placeholder="Password"
                    placeholderTextColor={'#EAEAEA'}
                    style={styles.input}
                  />
                )}
              />
            </View>
            <View style={styles.avatarContainer}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate(SCREEN_NAMES.LOGIN)}>
                <Text style={styles.link}>I have an account</Text>
              </TouchableOpacity>
            </View>

            <Button
              onPress={handleSubmit(onSubmit)}
              // onPress={() => signUp('true')}
              title="Register"
              color="#fe3d6c"
            />
          </View>
        </LinearGradient>
      </ScrollView>
    </LinearGradient>
  );
};

export default Register;
