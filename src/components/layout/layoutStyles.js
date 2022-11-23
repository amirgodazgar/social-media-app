import {ScaledSheet} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  layoutContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: '8@s',
    backgroundColor: '#181818',
  },
  header: {
    height: '12%',
  },
  postsContainer: {
    height: '88%',
  },
  toolbarBox: {
    flex: 1,
    fontSize: '16@sr',
  },
});
