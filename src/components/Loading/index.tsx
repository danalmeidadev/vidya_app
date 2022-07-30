import React from 'react';
import { Container, Loading } from './styles';

interface Props {
  size: 'large' | 'small';
  color?: string;
}

export function ActivityIndicatorLoading({ size, color }: Props) {
  return (
    <Container>
      <Loading color={color} size={size} />
    </Container>
  );
}
