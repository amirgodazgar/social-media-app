import {ScaledSheet} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  scrollView: {
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%',
    padding: '20@s',
    backgroundColor: '#E3002C',
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    height: '100@sr',
    width: '100@sr',
    borderRadius: '50@s',
  },
  username: {
    fontSize: '15@s',
    color: '#303841dc',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '1@s',
  },
  role: {
    fontSize: '12@s',
    color: '#303841dc',
    textAlign: 'center',
    marginBottom: '2@s',
  },
  subHeader: {
    fontSize: '20@s',
    fontWeight: '700',
    color: '#303841dc',
    textAlign: 'center',
    marginBottom: '5@s',
  },
  box: {
    height: '300@sr',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
    paddingVertical: '15@s',
    paddingHorizontal: '20@s',
    borderRadius: '15@s',
    marginBottom: '10@sr',
  },
  resume: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingVertical: '15@s',
    paddingHorizontal: '20@s',
    borderRadius: '15@s',
    marginVertical: '10@s',
  },
  pageText: {
    fontSize: '13@s',
    color: '#303841dc',
    fontWeight: '500',
  },
  pageLink: {
    fontSize: '12@s',
    color: '#2192FF',
  },
});
