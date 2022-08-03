import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputForm } from '~/components/InputForm';
import { Modal } from 'react-native';
import { Images } from '~/assets/images';
import { Button } from '~/components/Button';
import { createProductRequest } from '~/store/modules/createProducts/actions';
import { useDispatch } from 'react-redux';
import { HeaderIconBack } from '~/components/HeaderIconBack';
import { InputButton } from '~/components/InputButton';
import { useNavigation } from '@react-navigation/native';
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
import { ICreateProductsProps } from './types';
import { ClientsModal } from '../ClientsModal';

export function Products() {
  const dispatch = useDispatch();
  const [ClientsOpenModal, setClientsOpenModal] = useState<boolean>(false);
  const [clients, setClients] = useState({
    id: 0,
    companyFantasy: 'Clientes',
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateProductsProps>({
    resolver: yupResolver(shemaValidation),
  });

  const handleCreateClients = (form: ICreateProductsProps) => {
    dispatch(
      createProductRequest({
        description: form.description,
        midias: form.midias,
        name: form.name,
        version: form.version,
        clientId: clients.id,
      }),
    );
  };

  const handleClientsOpenModal = () => {
    setClientsOpenModal(state => !state);
  };

  return (
    <>
      <HeaderIconBack screenName="Cadastrar produto" />
      <Background source={Images.BackgroundWithEffect}>
        <WrapperContent showsVerticalScrollIndicator={false}>
          <Container>
            <WrapperLogo>
              <Image source={Images.Logo} resizeMode="contain" />
            </WrapperLogo>
            <WrapperForm>
              <Fields>
                <InputButton
                  title={String(clients.companyFantasy)}
                  onPress={handleClientsOpenModal}
                  errorName="Campo obrigatório"
                  error={!!errors.clientId}
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
              <Fields>
                <InputForm
                  name="description"
                  control={control}
                  placeholder="Descrição"
                  autoCorrect={false}
                  autoCapitalize="sentences"
                  error={errors.description && errors.description.message}
                />
              </Fields>
              <Fields>
                <InputForm
                  name="midias"
                  control={control}
                  placeholder="Link da imagem"
                  autoCorrect={false}
                  autoCapitalize="sentences"
                  error={errors.midias && errors.midias.message}
                />
              </Fields>
              <Fields>
                <InputForm
                  name="version"
                  control={control}
                  placeholder="Versão"
                  autoCorrect={false}
                  autoCapitalize="sentences"
                  error={errors.version && errors.version.message}
                />
              </Fields>
            </WrapperForm>
            <WrapperFooter>
              <Button
                title="Salvar"
                onPress={handleSubmit(handleCreateClients)}
              />
            </WrapperFooter>
          </Container>
        </WrapperContent>
      </Background>
      <Modal visible={ClientsOpenModal}>
        <ClientsModal
          clients={clients}
          setClients={setClients}
          closeSelectClients={handleClientsOpenModal}
        />
      </Modal>
    </>
  );
}
