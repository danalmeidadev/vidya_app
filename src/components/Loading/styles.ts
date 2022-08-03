import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { normalizePx } from '~/utils/normalize';

interface ILoadingProps {
  color?: string;
}

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled.ActivityIndicator<ILoadingProps>`
  color: ${({ color }) => color};
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Poppins500Medium};
  font-size: ${RFValue(12)}px;
  margin-top: ${normalizePx(16)};
`;
