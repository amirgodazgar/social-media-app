import {ScaledSheet} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    borderBottomWidth: '1@sr',
    borderColor: '#eaeaea2f',
  },
  myStoryAvatar: {
    position: 'absolute',
    top: 35,
    left: 35,
    height: '17@sr',
    width: '17@sr',
    borderRadius: '50@sr',
    marginHorizontal: '4@sr',
    marginTop: '9@sr',
    borderWidth: '1@sr',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fe3d6d',
  },
  myStoryIcon: {
    color: '#fffffff2',
  },
  avatar: {
    height: '45@sr',
    width: '45@sr',
    borderRadius: '50@sr',
    marginHorizontal: '4@sr',
    marginTop: '9@sr',
    borderWidth: '2.5@sr',
    borderColor: '#fe3d6d',
  },
  myStoryAvatarStyle: {
    height: '45@sr',
    width: '45@sr',
    borderRadius: '50@sr',
    marginHorizontal: '4@sr',
    marginTop: '9@sr',
    borderWidth: '2.5@sr',
    borderColor: '#181818',
  },
});
