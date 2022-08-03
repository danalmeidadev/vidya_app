import styled from 'styled-components/native';
import { ImageBackground, TouchableOpacity } from 'react-native';
import { normalizePx } from '~/utils/normalize';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Background = styled(ImageBackground)`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  padding-horizontal: ${normalizePx(16)};
`;

export const WrapperContent = styled.ScrollView``;

export const WrapperLogo = styled.View`
  align-items: center;
`;

export const Image = styled.Image`
  width: ${normalizePx(250)};
  height: ${normalizePx(250)};
`;

export const WrapperForm = styled.View`
  margin-bottom: ${RFPercentage(20)}px;
`;

export const Fields = styled.View``;

export const WrapperFooter = styled.View``;

export const ButtonCreateAccount = styled(TouchableOpacity)``;

export const TitleButton = styled.Text``;
