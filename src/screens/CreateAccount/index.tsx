import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputForm } from '~/components/InputForm';
import { Text, View } from 'react-native';
import { Images } from '~/assets/images';
import { Button } from '~/components/Button';
import { InputFormMask } from '~/components/InputFormMask';
import { ActivityIndicatorLoading } from '~/components/Loading';
import { consultDocumentRequest } from '~/store/modules/consultDocument/actions';
import { useDispatch, useSelector } from 'react-redux';
import { IAplicationState } from '~/store';
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
import { FormInputProps, ICreateAccountProps } from './types';

export function CreateAccount() {
  const dispatch = useDispatch();
  const { data: consultResult, loading } = useSelector(
    (state: IAplicationState) => state.document,
  );
  const [document, setDocument] = useState('');
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ICreateAccountProps>({
    resolver: yupResolver(shemaValidation),
  });

  const handleAutoComplet = () => {
    dispatch(consultDocumentRequest(document.replace(/[^0-9]+/g, '')));
    setValue('email', consultResult.email);
    setValue('cellphone', consultResult.telefone);
    setValue('companyName', consultResult.nome);
    setValue('companyFantasy', consultResult.fantasia);
    setValue('zipCode', consultResult.cep);
    setValue('street', consultResult.logradouro);
    setValue('number', consultResult.numero);
    setValue('state', consultResult.uf);
    setValue('city', consultResult.municipio);
    setValue('distric', consultResult.bairro);
  };

  return loading ? (
    <ActivityIndicatorLoading size="large" hasTitle />
  ) : (
    <Background source={Images.BackgroundWithEffect}>
      <Container>
        <WrapperContent showsVerticalScrollIndicator={false}>
          <WrapperLogo>
            <Image source={Images.Logo} resizeMode="contain" />
          </WrapperLogo>
          <WrapperForm>
            <Fields>
              <InputFormMask
                type="cnpj"
                name="document"
                value={document}
                control={control}
                placeholder="CNPJ"
                autoCorrect={false}
                autoCapitalize="sentences"
                error={errors.document && errors.document.message}
                onChangeText={setDocument}
                onBlur={handleAutoComplet}
              />
            </Fields>
            <Fields>
              <InputForm
                name="companyName"
                control={control}
                placeholder="Nome"
                autoCorrect={false}
                autoCapitalize="sentences"
                error={errors.companyName && errors.companyName.message}
              />
            </Fields>
            <Fields>
              <InputForm
                name="email"
                control={control}
                placeholder="Email"
                autoCorrect={false}
                autoCapitalize="sentences"
                error={errors.name && errors.name.message}
              />
            </Fields>
            <Fields>
              <InputForm
                name="cellphone"
                control={control}
                placeholder="Telefone"
                autoCorrect={false}
                autoCapitalize="sentences"
                error={errors.cellphone && errors.cellphone.message}
              />
            </Fields>
            <Fields>
              <InputForm
                name="companyName"
                control={control}
                placeholder="Razão Social"
                autoCorrect={false}
                autoCapitalize="sentences"
                error={errors.companyName && errors.companyName.message}
              />
            </Fields>
            <Fields>
              <InputForm
                name="companyFantasy"
                control={control}
                placeholder="Nome Fantasia"
                autoCorrect={false}
                autoCapitalize="sentences"
                error={errors.companyFantasy && errors.companyFantasy.message}
              />
            </Fields>
            <Fields>
              <InputForm
                name="zipCode"
                control={control}
                placeholder="CEP"
                autoCorrect={false}
                autoCapitalize="sentences"
                error={errors.zipCode && errors.zipCode.message}
              />
            </Fields>
            <Fields>
              <InputForm
                name="street"
                control={control}
                placeholder="Logradouro"
                autoCorrect={false}
                autoCapitalize="sentences"
                error={errors.street && errors.street.message}
              />
            </Fields>
            <Fields>
              <InputForm
                name="number"
                control={control}
                placeholder="Número"
                autoCorrect={false}
                autoCapitalize="sentences"
                error={errors.number && errors.number.message}
              />
            </Fields>
            <Fields>
              <InputForm
                name="state"
                control={control}
                placeholder="estado"
                autoCorrect={false}
                autoCapitalize="sentences"
                error={errors.state && errors.state.message}
              />
            </Fields>
            <Fields>
              <InputForm
                name="city"
                control={control}
                placeholder="Cidade"
                autoCorrect={false}
                autoCapitalize="sentences"
                error={errors.city && errors.city.message}
              />
            </Fields>
            <Fields>
              <InputForm
                name="distric"
                control={control}
                placeholder="Bairro"
                autoCorrect={false}
                autoCapitalize="sentences"
                error={errors.distric && errors.distric.message}
              />
            </Fields>
          </WrapperForm>
          <WrapperFooter>
            <Button title="Salvar" />
          </WrapperFooter>
        </WrapperContent>
      </Container>
    </Background>
  );
}
