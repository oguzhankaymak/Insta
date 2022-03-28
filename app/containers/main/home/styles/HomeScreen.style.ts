import { deviceWidth } from './../../../../utils/Metrics';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
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
});
