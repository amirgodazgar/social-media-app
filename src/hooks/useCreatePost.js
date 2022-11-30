import {useMutation} from 'react-query';
import {createNewPost} from '../services/create-new-post';

const useCreatePost = () => {
  const onSuccess = async res => {
    console.log('response', res);
    return res;
  };
  const onError = err => console.log('Login Error => ', err);
  const setCreateNewPost = formData => {
    mutate(formData);
  };

  const {mutate, isLoading} = useMutation(createNewPost, {
    onSuccess,
    onError,
  });

  return {setCreateNewPost, isLoading, data};
};

export default useCreatePost;
