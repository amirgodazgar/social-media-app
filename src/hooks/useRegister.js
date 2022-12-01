import {useNavigation} from '@react-navigation/native';
import {useMutation, useQueryClient} from 'react-query';
import {SCREEN_NAMES} from '../constant/screenRoutes';
import {getRegister} from '../services/auth';
import useAuthStore from '../store/store';
import useStorage from './useStorage';

export const useRegister = () => {
  const signUp = useAuthStore(state => state.signUp);
  const {setItem} = useStorage();
  const navigation = useNavigation();
  const queryClient = useQueryClient();

  const onSuccess = async res => {
    signUp(res?.jwt);
    await setItem('accessToken', res?.jwt);
    await setItem('userInfo', res?.user);
    queryClient.invalidateQueries('userInfo');
    navigation.navigate(SCREEN_NAMES.PROFILE_ROOT);
  };
  const onError = err => console.log('Register Error => ', err);

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
