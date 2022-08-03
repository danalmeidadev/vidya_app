import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { normalizePx } from '~/utils/normalize';

interface ButtonProps {
  backgroundColor?: string;
  colorTitle?: string;
  borderRadios?: boolean;
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${RFValue(56)}px;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor || theme.colors.primary};
  border-radius: 5px;
  margin-bottom: ${normalizePx(16)};

  ${({ borderRadios }) =>
    borderRadios
      ? css`
          border-radius: 28px;
        `
      : css`
          border-radius: 10px;
        `}
`;

export const ImagemContainer = styled.View`
  margin-right: ${normalizePx(9)};
`;

export const Text = styled.Text<ButtonProps>`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.Poppins700Bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme, colorTitle }) => colorTitle || theme.colors.white};
`;
