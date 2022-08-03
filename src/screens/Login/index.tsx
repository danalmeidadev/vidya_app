import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputForm } from '~/components/InputForm';
import { Text, View } from 'react-native';
import { Images } from '~/assets/images';
import { Button } from '~/components/Button';
import { shemaValidation } from './shemaValidation';

import {
  ButtonCreateAccount,
  Container,
  Fields,
  TitleButton,
  WrapperFooter,
  WrapperForm,
  WrapperLogo,
  Image,
  Background,
  WrapperContent,
} from './styles';

export function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(shemaValidation),
  });
  return (
    <Background source={Images.BackgroundWithEffect}>
      <Container>
        <WrapperLogo>
          <Image source={Images.Logo} resizeMode="contain" />
        </WrapperLogo>
        <WrapperForm>
          <Fields>
            <InputForm
              name="name"
              control={control}
              placeholder="CNPJ"
              autoCorrect={false}
              autoCapitalize="sentences"
              error={errors.name && errors.name.message}
            />
          </Fields>
          <Fields>
            <InputForm
              name="name"
              control={control}
              placeholder="Nome"
              autoCorrect={false}
              autoCapitalize="sentences"
              error={errors.name && errors.name.message}
            />
          </Fields>
        </WrapperForm>
        <WrapperFooter>
          <Button title="Salvar" />
        </WrapperFooter>
      </Container>
    </Background>
  );
}
