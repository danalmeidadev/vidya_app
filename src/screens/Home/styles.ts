import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { normalizePx } from '~/utils/normalize';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  padding-horizontal: ${normalizePx(16)};
`;

export const WrappertTitle = styled.View`
  width: 100%;
  align-items: center;
  margin-vertical: ${normalizePx(24)};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Poppins600SemiBold};
  font-size: ${normalizePx(16)};
`;

export const CardClients = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.white};
  flex-direction: row;
  align-items: center;
  padding: ${normalizePx(8)};
  border-radius: 8px;
  margin-bottom: ${normalizePx(16)};
  box-shadow: 1px 6px 2px rgba(0, 0, 0, 0.09);
`;

export const WrapperFooter = styled.View`
  width: 90%;
  padding-horizontal: ${normalizePx(16)};
`;

export const WrapperText = styled.View``;

export const ServiveName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Poppins600SemiBold};
  font-size: ${normalizePx(16)};
`;

export const City = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Poppins400Regular};
  font-size: ${normalizePx(12)};
  color: ${({ theme }) => theme.colors.title};
`;

export const WrapperArrow = styled.View`
  width: 100%;
`;

export const IconeArrow = styled(Feather)`
  font-size: ${normalizePx(24)};
`;
