import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Images } from '~/assets/images';
import { Button } from '~/components/Button';
import { Routes } from '~/routes';
import { useTheme } from 'styled-components/native';
import {
  Container,
  WrapperLogo,
  Image,
  WrapperButton,
  Background,
} from './styles';
import { INavigationProps } from './types';

export function GetStart() {
  const { navigate } = useNavigation<INavigationProps>();
  const { colors } = useTheme();
  return (
    <Background source={Images.BackgroundWithEffect}>
      <Container>
        <WrapperLogo>
          <Image source={Images.Logo} resizeMode="contain" />
        </WrapperLogo>
        <WrapperButton>
          <Button
            title="Entrar"
            backgroundColor={colors.primary}
            colorTitle={colors.white}
            onPress={() => navigate(Routes.UNLOGGED.LOGIN)}
          />
        </WrapperButton>
      </Container>
    </Background>
  );
}
