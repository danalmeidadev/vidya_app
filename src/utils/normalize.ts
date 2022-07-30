import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const widthScale = SCREEN_WIDTH / 375;
const heightScale = SCREEN_HEIGHT / 812;

const normalize = (size = 16, isWidth = false) => {
  const newSize = isWidth ? size * heightScale : size * widthScale;

  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

const normalizePx = (size = 16, isWidth = false) => {
  return `${normalize(size, isWidth)}px`;
};

export { normalize, normalizePx };
