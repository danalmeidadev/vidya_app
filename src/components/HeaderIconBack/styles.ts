import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { normalizePx } from '~/utils/normalize';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;

  padding-left: ${normalizePx(16)};
  padding-top: 50px;
  padding-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const WrapperArrow = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  width: ${normalizePx(42)};
  height: ${normalizePx(42)};
  border-width: ${normalizePx(1)};
  border-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
`;

export const Icone = styled(Feather)`
  font-size: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.white};
`;
export const WrapperScreenName = styled.View`
  width: 100%;
`;
export const ScreenName = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.white};
  margin-left: ${normalizePx(24)};
`;
