import {ScaledSheet} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%',
    backgroundColor: '#181818',
  },
  // -----------  MENU ----------------
  goBackContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '15@s',
  },
  goBackText: {
    color: '#eaeaea',
    fontSize: '18@sr',
    fontWeight: '500',
    marginLeft: '15@sr',
  },
  searchBox: {
    backgroundColor: '#303030',
    paddingVertical: '1@sr',
    paddingHorizontal: '10@sr',
    borderRadius: '5@sr',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: '15@sr',
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
