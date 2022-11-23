import {ScaledSheet} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
    height: '100%',
    backgroundColor: '#181818',
    paddingHorizontal: '8@s',
  },
  headerBox: {
    flex: 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  goBack: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backText: {
    fontSize: '16@sr',
    color: '#eaeaea',
    marginLeft: '10@sr',
  },
  uploadContainer: {
    flex: 0.3,
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: '#eaeaea2f',
  },
  imageBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginVertical: '15@sr',
  },
  image: {
    height: '100@sr',
    width: '100@sr',
    borderRadius: '5@sr',
  },
  uploaderBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginBottom: '6@sr',
  },
  uploadText: {
    color: '#eaeaea',
    fontSize: '15@sr',
  },
  captionContainer: {flex: 0.1},
  textArea: {
    fontSize: '14@sr',
    color: '#eaeaea',
    borderBottomWidth: 1,
    borderColor: '#eaeaea2f',
  },
  tagsContainer: {
    flex: 0.5,
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
  tagBox: {
    borderBottomWidth: 1,
    borderColor: '#eaeaea2f',
    paddingVertical: '10@sr',
    marginVertical: '2@sr',
  },
  tagText: {
    fontSize: '15@sr',
    color: '#eaeaea',
  },
});
