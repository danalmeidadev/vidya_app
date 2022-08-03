import { ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import { normalizePx } from '~/utils/normalize';

export const Background = styled(ImageBackground)`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  padding-top: ${normalizePx(150)};
`;

export const WrapperLogo = styled.View`
  align-items: center;
`;

export const Image = styled.Image`
  width: ${normalizePx(250)};
  height: ${normalizePx(250)};
`;

export const WrapperButton = styled.View`
  width: 90%;
  margin: 0 auto;
`;
