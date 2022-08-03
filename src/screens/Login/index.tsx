import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputForm } from '~/components/InputForm';
import { Text, View } from 'react-native';
import { Images } from '~/assets/images';
import { Button } from '~/components/Button';
import { IAuth } from '~/store/modules/auth/types';
import { useDispatch } from 'react-redux';
import { authRequest } from '~/store/modules/auth/actions';
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
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuth>({
    resolver: yupResolver(shemaValidation),
  });

  const handleLogged = (form: IAuth) => {
    dispatch(
      authRequest({
        email: form.email,
        password: form.password,
      }),
    );
  };
  return (
    <Background source={Images.BackgroundWithEffect}>
      <Container>
        <WrapperLogo>
          <Image source={Images.Logo} resizeMode="contain" />
        </WrapperLogo>
        <WrapperForm>
          <Fields>
            <InputForm
              name="email"
              control={control}
              placeholder="Email"
              autoCorrect={false}
              autoCapitalize="none"
              error={errors.email && errors.email.message}
            />
          </Fields>
          <Fields>
            <InputForm
              name="password"
              control={control}
              placeholder="Senha"
              autoCorrect={false}
              autoCapitalize="sentences"
              secureTextEntry
              error={errors.password && errors.password.message}
            />
          </Fields>
        </WrapperForm>
        <WrapperFooter>
          <Button title="Salvar" onPress={handleSubmit(handleLogged)} />
        </WrapperFooter>
      </Container>
    </Background>
  );
}
