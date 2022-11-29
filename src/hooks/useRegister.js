import {useNavigation} from '@react-navigation/native';
import {useMutation} from 'react-query';
import {SCREEN_NAMES} from '../constant/screenRoutes';
import {getRegister} from '../services/auth';
import useAuthStore from '../store/store';
import useStorage from './useStorage';

export const useRegister = () => {
  const signUp = useAuthStore(state => state.signUp);
  const {setItem} = useStorage();
  const navigation = useNavigation();

  const onSuccess = res => {
    console.log('onSuccess', res?.jwt);
    signUp(res?.jwt);
    setItem('accessToken', res?.jwt);
    setItem('userInfo', res?.user);
    navigation.navigate(SCREEN_NAMES.LOGIN);
  };
  const onError = err => console.log('Login Error => ', err);

  const {mutate, isLoading, data} = useMutation(getRegister, {
    onSuccess,
    onError,
  });

  const setUserInfo = (email, username, password) => {
    mutate({
      email,
      username,
      password,
    });
  };

  return {
    setUserInfo,
    isLoading,
    data,
  };
};
