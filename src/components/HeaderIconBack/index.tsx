/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useNavigation, DrawerActionType } from '@react-navigation/core';
import {
  Container,
  WrapperArrow,
  Icone,
  ScreenName,
  WrapperScreenName,
} from './styles';

interface NavigationProps {
  goBack: () => void;
  dispatch(arg: DrawerActionType): void;
  navigate: (screen: string) => void;
}

type IHeaderProps = {
  screenName?: string;
};

export function HeaderIconBack({ screenName }: IHeaderProps) {
  const navigation = useNavigation<NavigationProps>();

  return (
    <Container>
      <WrapperArrow onPress={() => navigation.goBack()}>
        <Icone name="chevron-left" />
      </WrapperArrow>
      <WrapperScreenName>
        {screenName && <ScreenName>{screenName}</ScreenName>}
      </WrapperScreenName>
    </Container>
  );
}
