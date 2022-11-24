import {ScaledSheet} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  actinsContainer: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '3@sr',
  },
  touchableBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '8@sr',
    marginLeft: '4@sr',
  },
  actionText: {
    fontSize: '12@sr',
    margin: '3@sr',
    color: '#B2B2B2',
  },
  iconBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    margin: '4@sr',
    color: '#B2B2B2',
  },
});
