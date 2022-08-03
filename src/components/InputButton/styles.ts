import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';
import { normalizePx } from '~/utils/normalize';

interface IPropsStatus {
  error: boolean;
}
export const Container = styled.View`
  padding-bottom: 10px;
`;

export const ButtonSelect = styled(TouchableOpacity)``;

export const WrapperValue = styled.View`
  width: 100%;
  padding: ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  margin-bottom: 16px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Poppins400Regular};
  color: ${({ theme }) => theme.colors.black};
`;

export const Error = styled.Text<IPropsStatus>`
  ${({ theme, error }) =>
    error
      ? css`
          color: ${theme.colors.error};
        `
      : css`
          color: transparent;
        `}
`;
