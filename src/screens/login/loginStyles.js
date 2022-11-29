import {ScaledSheet} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%',
    padding: '20@s',
  },
  avatarContainer: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    height: '100@sr',
    width: '100@sr',
    borderRadius: '50@sr',
  },
  header: {
    fontSize: '25@s',
    color: '#ffff',
    textAlign: 'center',
    marginBottom: '10@s',
    fontFamily: 'DancingScript-Bold',
  },
  subHeader: {
    fontSize: '16@s',
    color: '#EAEAEA',
    textAlign: 'center',
    marginBottom: '5@s',
  },
  box: {
    height: '500@sr',
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingVertical: '15@s',
    paddingHorizontal: '20@s',
    borderRadius: '20@s',
  },
  gradient: {
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 3.8,
    elevation: 5,
    borderRadius: 5,
  },
  icon: {
    marginBottom: '12@s',
    padding: '6@s',
  },
  input: {
    width: '90%',
    marginBottom: '15@s',
    borderBottomWidth: 1,
    borderColor: '#fe3d6d',
    borderRadius: 5,
    padding: '8@s',
    color: '#EAEAEA',
  },
  link: {
    color: '#eaeaea',
    fontSize: '14@sr',
  },
});
