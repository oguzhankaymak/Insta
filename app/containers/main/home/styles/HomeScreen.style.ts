import { deviceWidth } from './../../../../utils/Metrics';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchView: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 5,
  },

  inputView: {
    width: deviceWidth - 20,
    height: 28,
    borderWidth: 1,
    borderRadius: 7,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: 6,
  },

  footerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
});
