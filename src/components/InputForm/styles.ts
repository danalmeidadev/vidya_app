import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const Error = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Poppins600SemiBold};
  color: ${({ theme }) => theme.colors.error};
  font-size: ${RFValue(12)}px;
  margin-bottom: 12px;
`;
