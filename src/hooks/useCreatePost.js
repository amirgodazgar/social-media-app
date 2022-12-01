import {useMutation} from 'react-query';
import {createNewPost} from '../services/create-new-post';

const useCreatePost = () => {
  const onSuccess = async res => {
    return res;
  };
  const onError = err => console.log('error => ', err);
  const setCreateNewPost = formData => {
    mutate(formData);
  };

  const {mutate, isLoading, data} = useMutation(createNewPost, {
    onSuccess,
    onError,
  });

  return {setCreateNewPost, isLoading, data};
};

export default useCreatePost;
