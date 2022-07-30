import styled from 'styled-components/native';

interface ILoadingProps {
  color?: string;
}

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled.ActivityIndicator<ILoadingProps>`
  color: ${({ theme, color }) => theme.colors.primary || color};
`;
