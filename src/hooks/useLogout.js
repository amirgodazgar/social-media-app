import {useNavigation} from '@react-navigation/native';
import {SCREEN_NAMES} from '../constant/screenRoutes';
import useAuthStore from '../store/store';
import useStorage from './useStorage';

export const useLogout = () => {
  const {clear} = useStorage();
  const signOut = useAuthStore(state => state.signOut);
  const removeUserInfo = useAuthStore(state => state.removeUserInfo);
  const navigation = useNavigation();

  const logout = () => {
    clear();
    signOut();
    removeUserInfo();
    navigation.navigate(SCREEN_NAMES.LOGIN);
  };
  return logout;
};

export default useLogout;
