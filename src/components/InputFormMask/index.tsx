import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { InputTextMask } from '../InputTextMask';
import { Container, Error } from './styles';

interface InputFormProps extends TextInputProps {
  control: Control<any, any>;
  name: string;
  error?: boolean;
  message?: string;
  type:
    | 'credit-card'
    | 'cpf'
    | 'cel-phone'
    | 'cnpj'
    | 'datetime'
    | 'money'
    | 'zip-code';
}

export function InputFormMask({
  control,
  name,
  error,
  message,
  ...rest
}: InputFormProps) {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputTextMask onChangeText={onChange} value={value} {...rest} />
        )}
        name={name}
      />
      {error && <Error>{message}</Error>}
    </Container>
  );
}
