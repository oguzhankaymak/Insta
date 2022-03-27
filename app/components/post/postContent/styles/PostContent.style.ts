import { StyleSheet } from 'react-native';
import { deviceWidth, isTablet } from '../../../../utils/Metrics';

export default StyleSheet.create({
  postImage: {
    height: isTablet ? 600 : 400,
    width: deviceWidth,
  },

  scrollBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },

  round: {
    width: isTablet ? 7 : 5,
    height: isTablet ? 7 : 5,
    borderRadius: isTablet ? 7 : 5,
    alignItems: 'center',
    marginLeft: 2,
    marginRight: 2,
  },
});
