import React from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import { Container } from './styles';

type InputTextProps = TextInputProps;

export function InputText({ ...rest }: InputTextProps) {
  const { colors } = useTheme();
  return <Container {...rest} placeholderTextColor={colors.black} />;
}
