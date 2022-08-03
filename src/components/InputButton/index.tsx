import React from 'react';
import { Container, ButtonSelect, WrapperValue, Name, Error } from './styles';

interface IProps {
  title: string;
  errorName: string;
  error: boolean;
  disabled?: boolean;
  onPress: () => void;
}

export function InputButton({
  title,
  errorName,
  error,
  disabled,
  onPress,
}: IProps) {
  return (
    <Container>
      <ButtonSelect onPress={onPress} disabled={disabled}>
        <WrapperValue>
          <Name>{title}</Name>
        </WrapperValue>
      </ButtonSelect>
      {error && (
        <Error error={title === 'Selecione' ? error : false}>{errorName}</Error>
      )}
    </Container>
  );
}
