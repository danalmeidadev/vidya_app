import styled from 'styled-components/native';
import { normalizePx } from '~/utils/normalize';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: ${normalizePx(24)};
  height: ${normalizePx(130)};
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const WrapperLogo = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: ${normalizePx(150)};
  height: ${normalizePx(130)};
`;

export const WrapperLogout = styled(TouchableOpacity)``;

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.white};
`;
