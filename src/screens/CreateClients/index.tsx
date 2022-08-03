import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputForm } from '~/components/InputForm';
import { Images } from '~/assets/images';
import { Button } from '~/components/Button';
import { InputFormMask } from '~/components/InputFormMask';
import { ActivityIndicatorLoading } from '~/components/Loading';
import { consultDocumentRequest } from '~/store/modules/consultDocument/actions';
import { createClientRequest } from '~/store/modules/createClients/actions';
import { useDispatch, useSelector } from 'react-redux';
import { IAplicationState } from '~/store';
import { HeaderIconBack } from '~/components/HeaderIconBack';
import { shemaValidation } from './shemaValidation';

import {
  Container,
  Fields,
  WrapperFooter,
  WrapperForm,
  WrapperLogo,
  Image,
  Background,
  WrapperContent,
} from './styles';
import { ICreateAccountProps } from './types';

export function CreateClients() {
  const dispatch = useDispatch();
  const [document, setDocument] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const { data: consultResult, loading } = useSelector(
    (state: IAplicationState) => state.document,
  );
  const { loading: clientLoading } = useSelector(
    (state: IAplicationState) => state.createClient,
  );
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
    setValue('district', consultResult.bairro);
  };

  const handleCreateClient = (form: ICreateAccountProps) => {
    if (document === '') {
      setError(true);
      return;
    }
    dispatch(
      createClientRequest({
        cellphone: form.cellphone,
        city: form.city,
        companyFantasy: form.companyFantasy,
        companyName: form.companyName,
        district: form.district,
        document: document.replace(/[^0-9]+/g, ''),
        email: form.email,
        number: form.number,
        state: form.state,
        street: form.street,
        zipCode: form.zipCode,
      }),
    );
  };

  return loading ? (
    <ActivityIndicatorLoading size="large" hasTitle />
  ) : (
    <>
      <HeaderIconBack screenName="Cadastrar cliente" />
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
                  error={error}
                  message="Campo obrigatório"
                  onChangeText={setDocument}
                  onBlur={handleAutoComplet}
                />
              </Fields>

              <Fields>
                <InputForm
                  name="email"
                  control={control}
                  placeholder="Email"
                  autoCorrect={false}
                  autoCapitalize="sentences"
                  error={errors.email && errors.email.message}
                />
              </Fields>
              <Fields>
                <InputFormMask
                  type="cel-phone"
                  name="cellphone"
                  control={control}
                  placeholder="Telefone"
                  autoCorrect={false}
                  autoCapitalize="sentences"
                  error={!!errors.cellphone}
                  message={errors.cellphone && errors.cellphone.message}
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
                <InputFormMask
                  type="zip-code"
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
                  placeholder="Estado"
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
                  name="district"
                  control={control}
                  placeholder="Bairro"
                  autoCorrect={false}
                  autoCapitalize="sentences"
                  error={errors.district && errors.district.message}
                />
              </Fields>
            </WrapperForm>
            <WrapperFooter>
              <Button
                title="Salvar"
                onPress={handleSubmit(handleCreateClient)}
                loading={clientLoading}
              />
            </WrapperFooter>
          </WrapperContent>
        </Container>
      </Background>
    </>
  );
}
