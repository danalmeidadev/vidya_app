import { Dimensions, Platform } from 'react-native';
import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';

const { width, height } = Dimensions.get('window');

export default {
  headerPadding: Platform.OS === 'ios' ? 20 : 0,
  basePadding: 20,
  baseMargin: 10,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  statusHeight: getStatusBarHeight(),
  marginBottom: getBottomSpace(),
};
