import { StyleSheet } from 'react-native';
import { isTablet } from '../../../../utils/Metrics';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 12,
    paddingLeft: 10,
    paddingRight: 20,
  },

  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  userImage: {
    width: isTablet ? 50 : 25,
    height: isTablet ? 50 : 25,
    borderRadius: isTablet ? 50 : 25,
  },

  username: {
    marginStart: 10,
    fontWeight: 'bold',
  },

  placeName: {
    marginStart: 10,
  },

  iconMore: {
    width: isTablet ? 24 : 15,
    height: isTablet ? 24 : 15,
  },
});
