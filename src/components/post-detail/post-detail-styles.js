import {ScaledSheet} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  postBox: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    height: '560@sr',
    backgroundColor: '#181818',
    paddingHorizontal: '8@s',
  },
  userInfo: {
    flex: 0.16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingHorizontal: '5@sr',
    paddingVertical: '2@sr',
  },
  avatarBox: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
  avatar: {
    marginTop: '6@sr',
    height: '70@sr',
    width: '70@sr',
    borderRadius: '50@sr',
  },
  userInfoTexts: {
    width: '65%',
    paddingHorizontal: '10@sr',
    justifyContent: 'center',
    alignContent: 'center',
  },
  username: {
    fontSize: '17@sr',
    fontWeight: '600',
  },
  time: {
    fontSize: '13@sr',
    fontWeight: '500',
    color: '#B2B2B2',
  },

  followBox: {
    width: '30%',
  },
  followBtn: {
    marginTop: '28@sr',
    borderRadius: '5@sr',
    backgroundColor: '#fe3d6d',
    padding: '4@sr',
  },
  btnText: {
    textAlign: 'center',
    fontSize: '14@sr',
    fontWeight: '600',
  },
  caption: {
    flex: 0.2,
    paddingHorizontal: '5@sr',
    paddingVertical: '2@sr',
  },
  title: {
    fontSize: '14@sr',
    fontWeight: '600',
    color: '#fe3d6d',
  },
  summary: {
    fontSize: '12@sr',
    fontWeight: '500',
    color: '#B2B2B2',
  },
  photoContainer: {
    flex: 0.57,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingVertical: '2@sr',
  },
  postImage: {
    height: '100%',
    width: '100%',
  },
});
