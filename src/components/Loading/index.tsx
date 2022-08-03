import React from 'react';
import { Container, Loading, Text } from './styles';

interface Props {
  size: 'large' | 'small';
  color?: string;
  hasTitle?: boolean;
}

export function ActivityIndicatorLoading({ size, color, hasTitle }: Props) {
  return (
    <Container>
      <Loading color={color} size={size} />
      {hasTitle && <Text>Estamos trazendo suas informações! Aguarde...</Text>}
    </Container>
  );
}
