/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Images } from '~/assets/images';
import { authLogout } from '~/store/modules/auth/actions';
import { Container, WrapperLogo, Image, WrapperLogout, Icon } from './styles';

export function HeaderIcon() {
  const dispatch = useDispatch();
  const handleLogout = useCallback(() => {
    dispatch(authLogout());
  }, [dispatch]);
  return (
    <Container>
      <WrapperLogo>
        <Image source={Images.LogoSecondary} resizeMode="contain" />
      </WrapperLogo>
      <WrapperLogout onPress={handleLogout}>
        <Icon name="log-out" />
      </WrapperLogout>
    </Container>
  );
}
