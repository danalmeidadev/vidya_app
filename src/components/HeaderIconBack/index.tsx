/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useNavigation, DrawerActionType } from '@react-navigation/core';
import { Container, WrapperArrow, Icone } from './styles';

interface NavigationProps {
  goBack: () => void;
  dispatch(arg: DrawerActionType): void;
  navigate: (screen: string) => void;
}

export function HeaderIconBack() {
  const navigation = useNavigation<NavigationProps>();

  return (
    <Container>
      <WrapperArrow onPress={() => navigation.goBack()}>
        <Icone name="chevron-left" />
      </WrapperArrow>
    </Container>
  );
}
