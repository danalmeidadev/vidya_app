import styled from 'styled-components/native';
import { normalizePx } from '~/utils/normalize';

export const Container = styled.View`
  width: 100%;
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
