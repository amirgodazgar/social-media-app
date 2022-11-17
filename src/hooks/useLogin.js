import {useMutation} from 'react-query';

const useLogin = userInfo =>
  useMutation(({email, password}) => login(email, password), {
    onSuccess: data => console.log(data),
  });
