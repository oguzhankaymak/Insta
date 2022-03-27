import { StyleSheet } from 'react-native';
import { isTablet } from '../../../../utils/Metrics';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginRight: 15,
    marginTop: 8,
  },

  body: {
    flexDirection: 'row',
  },

  button: {
    paddingLeft: 3,
    paddingRight: 3,
  },

  icon: {
    width: isTablet ? 30 : 22,
    height: isTablet ? 30 : 22,
  },
});
