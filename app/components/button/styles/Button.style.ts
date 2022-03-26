import { StyleSheet } from 'react-native';
import { deviceWidth, isTablet } from '../../../utils/Metrics';

export default StyleSheet.create({
  button: {
    width: deviceWidth - 85,
    height: isTablet ? 60 : 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
