import { StyleSheet } from 'react-native';
import { isTablet, deviceWidth } from '../../../utils/Metrics';

export default StyleSheet.create({
  image: {
    height: isTablet ? 600 : 400,
    width: deviceWidth,
  },

  gridImage: {
    width: isTablet ? deviceWidth / 3 : deviceWidth / 2,
    height: 200,
  },

  loading: {
    position: 'absolute',
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
