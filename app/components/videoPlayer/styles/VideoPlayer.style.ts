import { StyleSheet } from 'react-native';
import { deviceWidth, isTablet } from '../../../utils/Metrics';

export default StyleSheet.create({
  video: {
    height: isTablet ? 600 : 400,
    width: deviceWidth,
  },

  gridVieo: {
    width: 200,
    height: 200,
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  activityIndicator: {
    position: 'absolute',
  },
});
