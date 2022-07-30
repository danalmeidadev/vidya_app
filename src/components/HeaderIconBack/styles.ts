import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { normalizePx } from '~/utils/normalize';

export const Container = styled.View`
  margin-left: ${normalizePx(16)};
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
