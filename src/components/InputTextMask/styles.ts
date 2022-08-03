import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TextInputMask)`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.Poppins400Regular};
  color: ${({ theme }) => theme.colors.black};
  padding: ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  margin-bottom: 16px;
`;
