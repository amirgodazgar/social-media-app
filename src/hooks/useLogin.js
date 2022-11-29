import {useMutation, useQueryClient} from 'react-query';
import {login} from '../services/auth';
import useAuthStore from '../store/store';
import useStorage from './useStorage';

export const useLogin = () => {
  const signIn = useAuthStore(state => state.signIn);
  const setUserInformation = useAuthStore(state => state.setUserInfo);
  const {setItem} = useStorage();
  const queryClient = useQueryClient();

  const onSuccess = async res => {
    signIn(res?.jwt);
    setUserInformation(res.user);
    await setItem('accessToken', res?.jwt);
    await setItem('userInfo', res?.user);
    queryClient.invalidateQueries('userInfo');
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
