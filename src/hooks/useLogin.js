import {useMutation} from 'react-query';
import {login} from '../services/auth';
import useAuthStore from '../store/store';
import useStorage from './useStorage';

export const useLogin = () => {
  const signIn = useAuthStore(state => state.signIn);
  const serUserInfo = useAuthStore(state => state.serUserInfo);
  const {setItem} = useStorage();

  const onSuccess = res => {
    console.log('onSuccess', res?.jwt);
    signIn(res?.jwt);
    serUserInfo(res.user);
    setItem('accessToken', res?.jwt);
    setItem('userInfo', res?.user);
  };
  const onError = err => console.log('Login Error => ', err);

  const {mutate, isLoading, data} = useMutation(login, {
    onSuccess,
    onError,
  });

  const setUserInfo = (identifier, password) => {
    mutate({
      identifier,
      password,
    });
  };

  return {
    setUserInfo,
    isLoading,
    data,
  };
};
