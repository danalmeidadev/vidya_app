/* eslint-disable camelcase */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'styled-components';
import { IAplicationState } from '~/store';
import { ActivityIndicatorLoading } from '~/components/Loading';
import { Button } from '~/components/Button';
import * as actionGetClients from '~/store/modules/getClients/actions';
import {
  Container,
  Header,
  Title,
  Clients,
  Icon,
  Name,
  Separator,
  Footer,
} from './styles';

export interface ISelectClientsProps {
  id: number;
  companyFantasy: string;
}

interface Props {
  clients: ISelectClientsProps;
  setClients: (category: ISelectClientsProps) => void;
  closeSelectClients: () => void;
}

export function ClientsModal({
  clients,
  setClients,
  closeSelectClients,
}: Props) {
  const dispatch = useDispatch();
  const { colors } = useTheme();
  const { data: listClients, loading } = useSelector(
    (state: IAplicationState) => state.getClients,
  );
  const handleClientsSelect = (item: ISelectClientsProps) => {
    setClients(item);
  };

  const getClients = useCallback(() => {
    dispatch(actionGetClients.getClientsRequest());
  }, [dispatch]);

  useEffect(() => {
    getClients();
  }, [getClients]);

  return (
    <Container>
      <Header>
        <Title>Clientes</Title>
      </Header>
      {loading ? (
        <ActivityIndicatorLoading size="large" />
      ) : (
        <>
          <FlatList
            data={listClients}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }: { item: ISelectClientsProps }) => (
              <Clients
                onPress={() => handleClientsSelect(item)}
                isActive={clients.id === item.id}
              >
                <Name>{item?.companyFantasy}</Name>
              </Clients>
            )}
            ItemSeparatorComponent={() => <Separator />}
          />
          <Footer>
            <Button
              title="Selecione"
              onPress={closeSelectClients}
              backgroundColor={colors.primary}
              colorTitle={colors.white}
              disabled={false}
            />
          </Footer>
        </>
      )}
    </Container>
  );
}
