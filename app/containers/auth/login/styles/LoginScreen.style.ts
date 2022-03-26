import { StyleSheet } from 'react-native';
import { deviceWidth, isTablet, deviceHeight } from '../../../../utils/Metrics';

export default StyleSheet.create({
  scrollView: {
    flex: 1,
  },

  container: {
    alignItems: 'center',
  },

  header: {
    marginTop: deviceHeight / 7,
  },

  body: {
    marginTop: 30,
  },

  formItem: {
    alignItems: 'center',
    marginTop: 10,
  },

  inputView: {
    width: deviceWidth - 70,
    borderWidth: 1,
    borderRadius: 3,
    justifyContent: 'center',
    paddingHorizontal: 3,
    marginTop: 6,
  },

  input: {
    padding: isTablet ? 20 : 8,
  },

  footer: {
    marginTop: 40,
  },
});
