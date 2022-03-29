import { deviceWidth, isTablet } from './../../../../utils/Metrics';
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

  header: {
    width: deviceWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },

  searchIcon: {
    width: isTablet ? 26 : 20,
    height: isTablet ? 26 : 20,
  },

  input: {
    flex: 1,
    paddingLeft: 8,
  },

  logout: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: isTablet ? 36 : 30,
    paddingHorizontal: 10,
  },

  searchInput: {
    flexDirection: 'row',
  },

  inputView: {
    flex: 1,
    height: isTablet ? 38 : 30,
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
