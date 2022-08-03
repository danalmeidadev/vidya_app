import styled from 'styled-components/native';
import { normalizePx } from '~/utils/normalize';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding-horizontal: ${normalizePx(16)};
`;

export const WrappperCard = styled(TouchableOpacity)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 2px black;

  margin-top: ${normalizePx(24)};
  border-radius: 12px;
`;

export const Card = styled.View``;

export const WrapperDescription = styled.View`
  width: 95%;
  padding-horizontal: ${normalizePx(16)};
  padding-bottom: ${normalizePx(16)};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Poppins500Medium};
  color: ${({ theme }) => theme.colors.title};
`;
export const Users = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Poppins700Bold};
  color: ${({ theme }) => theme.colors.title};
  margin-top: ${normalizePx(16)};
`;

export const Image = styled.Image`
  width: ${normalizePx(250)};
  height: ${normalizePx(150)};
`;
