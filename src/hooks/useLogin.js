import {useState} from 'react';
import {useMutation} from 'react-query';
import {login} from '../services/auth';
import useAuthStore from '../store/store';

export const useLogin = () => {
  const [userData, setUserData] = useState(null);
  const {mutate, isLoading, data} = useMutation(login);
  const signIn = useAuthStore(state => state.signIn);
  const serUserInfo = useAuthStore(state => state.serUserInfo);

  const setUserInfo = (identifier, password) => {
    mutate(
      {
        identifier,
        password,
      },
      {
        onSuccess: res => {
          serUserInfo(res.user);
          setTimeout(() => {
            signIn(res?.jwt);
          }, 2000);
        },
        onError: err => console.log('Login Error => ', err),
      },
    );
  };

  console.log(userData);

  return {
    setUserInfo,
    isLoading,
  };
};
