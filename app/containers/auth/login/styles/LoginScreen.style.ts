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

  forgotText: {
    alignItems: 'flex-end',
    marginTop: 15,
  },

  braceView: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  line: {
    flex: 0.5,
    height: 1,
  },

  facebookButtonView: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  facebookButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  facebookIcon: {
    width: isTablet ? 30 : 18,
    height: isTablet ? 30 : 18,
  },

  facebookText: {
    paddingHorizontal: 5,
  },
});
