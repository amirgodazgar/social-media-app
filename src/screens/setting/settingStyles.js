import {ScaledSheet} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%',
    backgroundColor: '#181818',
    paddingHorizontal: '8@s',
  },
  // -----------  MENU ----------------

  searchBox: {
    backgroundColor: '#303030',
    paddingHorizontal: '10@sr',
    borderRadius: '5@sr',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: '15@sr',
    width: '100%',
  },
  searchText: {
    color: '#b2b2b2b2',
    fontSize: '16@sr',
    fontWeight: '500',
    marginLeft: '14@sr',
  },
  listContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: '10@sr',
  },
  listText: {
    color: '#eaeaea',
    fontSize: '16@sr',
    fontWeight: '400',
  },
});
