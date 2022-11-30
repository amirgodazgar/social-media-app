import {ScaledSheet} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
    height: '100%',
    backgroundColor: '#181818',
    padding: '8@s',
  },
  headerBox: {
    height: '50@sr',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sendBtn: {
    padding: '4@sr',
    backgroundColor: '#fe3d6d',
    borderRadius: '4@sr',
    width: '50@sr',
  },
  sendText: {
    textAlign: 'center',
    fontSize: '14@sr',
    color: '#eaeaea',
  },
  backText: {
    fontSize: '16@sr',
    color: '#eaeaea',
  },
  uploadContainer: {
    height: '200@sr',
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
  captionContainer: {height: '120@sr'},
  textArea: {
    fontSize: '14@sr',
    color: '#eaeaea',
    borderBottomWidth: 1,
    borderColor: '#eaeaea2f',
  },
  tagsContainer: {
    height: '120@sr',
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
