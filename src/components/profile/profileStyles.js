import {ScaledSheet} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%',
    backgroundColor: '#181818',
  },
  // -----------  MENU ----------------
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: '15@s',
  },
  usernameBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    fontSize: '16@sr',
    fontWeight: '500',
    color: '#EAEAEA',
    marginHorizontal: '6@sr',
  },
  text: {
    color: '#EAEAEA',
  },
  icon: {
    color: '#EAEAEA',
  },
  // -----------  USER INFO--------------
  userInfoContainer: {
    marginBottom: '15@s',
  },
  informationBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  information: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    marginTop: '6@sr',
    height: '70@sr',
    width: '70@sr',
    borderRadius: '50@sr',
  },
  infoText: {
    fontSize: '15@sr',
    color: '#EAEAEA',
  },
  infoNumber: {
    fontSize: '17@sr',
    color: '#EAEAEA',
    fontWeight: '600',
  },
  bioBox: {
    marginVertical: '10@sr',
  },
  bioName: {
    fontSize: '14@sr',
    fontWeight: '500',
    color: '#EAEAEA',
  },
  bioText: {
    fontSize: '14@sr',
    color: '#EAEAEA',
  },
  EditProfileBtn: {
    width: '100%',
    backgroundColor: '#303030',
    borderRadius: '5@sr',
    padding: '4@sr',
  },
  editText: {
    fontSize: '15@sr',
    color: '#EAEAEA',
    fontWeight: '500',
    textAlign: 'center',
  },
  // ----------- STORIES --------------
  storiesContainer: {
    marginBottom: '15@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  storyImage: {
    height: '40@sr',
    width: '40@sr',
    borderRadius: '50@sr',
    marginBottom: '2@sr',
  },
  story: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addStory: {
    borderWidth: 1,
    borderColor: '#EAEAEA',
    height: '40@sr',
    width: '40@sr',
    borderRadius: '50@sr',
    marginBottom: '2@sr',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addStoryIcon: {
    color: '#EAEAEA',
  },

  // ----------- STORIES --------------
  postsContainer: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  postTabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },

  postTab: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  activeTab: {
    borderBottomWidth: 1,
    borderColor: '#ffffff',
  },
  posts: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
  },
  post: {
    height: '107@sr',
    width: '107@sr',
    margin: '2@sr',
  },
});
