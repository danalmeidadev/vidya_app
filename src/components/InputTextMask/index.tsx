import React from 'react';
import { TextInput } from 'react-native';
import { TextInputMaskProps } from 'react-native-masked-text';
import { useTheme } from 'styled-components';
import { Container } from './styles';

interface IInputProps {
  type:
    | 'credit-card'
    | 'cpf'
    | 'cel-phone'
    | 'cnpj'
    | 'datetime'
    | 'money'
    | 'zip-code';
}

type InputTextProps = TextInputMaskProps & IInputProps;

export function InputTextMask({ type, ...rest }: InputTextProps) {
  const { colors } = useTheme();
  return (
    <Container
      customTextInput={TextInput}
      type={type}
      placeholderTextColor={colors.black}
      {...rest}
    />
  );
}
