import AsyncStorage from '@react-native-async-storage/async-storage';
import {useQuery} from 'react-query';

const getUserInformation = async () => {
  return Promise.all([
    AsyncStorage.getItem('@accessToken'),
    AsyncStorage.getItem('@userInfo'),
  ]).then(res => {
    return {
      accessToken: res[0],
      userInfo: JSON.parse(res[1]),
    };
  });
};

const useUserInfo = () => {
  const {data, isLoading} = useQuery('userInfo', getUserInformation);
  return {data, isLoading};
};

export default useUserInfo;
