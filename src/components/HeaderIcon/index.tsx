/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Images } from '~/assets/images';
import { Container, WrapperLogo, Image } from './styles';

export function HeaderIcon() {
  return (
    <Container>
      <WrapperLogo>
        <Image source={Images.LogoSecondary} resizeMode="contain" />
      </WrapperLogo>
    </Container>
  );
}
