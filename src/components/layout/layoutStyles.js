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
    height: '10%',
  },
  postsContainer: {
    height: '81%',
  },
  toolbarBox: {
    height: '9%',
    borderTopWidth: '1@sr',
    borderColor: '#eaeaea2f',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  toolbarTouchableBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  toolbarIcon: {
    marginBottom: '3@sr',
  },
  actionText: {
    fontSize: '12@sr',
    fontWeight: '400',
   
  },
});
