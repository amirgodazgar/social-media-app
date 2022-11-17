import {ScaledSheet} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    padding: '4@sr',
    borderBottomWidth: '1@sr',
    borderColor: '#eaeaea2f',
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
});
