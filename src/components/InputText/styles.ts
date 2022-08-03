import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TextInput)`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.Poppins400Regular};
  color: ${({ theme }) => theme.colors.black};
  padding: ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  margin-bottom: 16px;
`;
