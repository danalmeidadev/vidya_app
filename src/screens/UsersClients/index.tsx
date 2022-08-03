import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputForm } from '~/components/InputForm';
import { Images } from '~/assets/images';
import { Button } from '~/components/Button';
import { HeaderIconBack } from '~/components/HeaderIconBack';
import { useDispatch } from 'react-redux';
import { usersRequest } from '~/store/modules/user/actions';
import { RouteProp, useRoute } from '@react-navigation/native';
import { shemaValidation } from './shemaValidation';

import {
  Container,
  Fields,
  WrapperFooter,
  WrapperForm,
  WrapperLogo,
  Image,
  Background,
} from './styles';
import { IUserProps, ParamList } from './types';

export function UsersClients() {
  const dispatch = useDispatch();
  const { params } = useRoute<RouteProp<ParamList, 'Detail'>>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserProps>({
    resolver: yupResolver(shemaValidation),
  });

  const handleUserCreate = (form: IUserProps) => {
    dispatch(
      usersRequest({
        email: form.name,
        name: form.name,
        productId: Number(params.product),
      }),
    );
  };

  return (
    <Background source={Images.BackgroundWithEffect}>
      <HeaderIconBack screenName="Adicionar usuário" />
      <Container>
        <WrapperLogo>
          <Image source={Images.Logo} resizeMode="contain" />
        </WrapperLogo>
        <WrapperForm>
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
        </WrapperForm>
        <WrapperFooter>
          <Button title="Salvar" onPress={handleSubmit(handleUserCreate)} />
        </WrapperFooter>
      </Container>
    </Background>
  );
}
