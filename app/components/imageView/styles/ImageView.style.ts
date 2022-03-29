import { StyleSheet } from 'react-native';
import { isTablet, deviceWidth } from '../../../utils/Metrics';

export default StyleSheet.create({
  profileImage: {
    width: isTablet ? 50 : 25,
    height: isTablet ? 50 : 25,
    borderRadius: isTablet ? 50 : 25,
  },

  image: {
    height: isTablet ? 600 : 400,
    width: deviceWidth,
  },

  gridImage: {
    width: deviceWidth / 2,
    height: isTablet ? 400 : 200,
  },

  loading: {
    position: 'absolute',
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
