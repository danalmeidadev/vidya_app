import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useLayoutEffect } from 'react';
import { FlatList, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderIcon } from '~/components/HeaderIcon';
import { HeaderIconBack } from '~/components/HeaderIconBack';
import { Routes } from '~/routes';
import { IAplicationState } from '~/store';
import { getClientsWithProductsRequest } from '~/store/modules/getClientsWithProducts/actions';
import { IGetClientsWithProductsData } from '~/store/modules/getClientsWithProducts/types';
import {
  CardClients,
  Container,
  IconeArrow,
  ServiveName,
  Title,
  City,
  WrapperArrow,
  WrapperFooter,
  WrapperText,
  WrappertTitle,
} from './styles';

export function Home() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const getClientsWithProducts = useSelector(
    (state: IAplicationState) => state.getClientsWithProducts.data,
  );

  const getClientsProducts = useCallback(() => {
    dispatch(getClientsWithProductsRequest());
  }, [dispatch]);

  useEffect(() => {
    getClientsProducts();

    return () => getClientsProducts();
  }, [getClientsProducts]);

  const renderClientsProducts = ({
    item,
    index,
  }: {
    item: IGetClientsWithProductsData;
    index: number;
  }) => {
    return (
      <CardClients
        onPress={() =>
          navigation.dispatch(
            CommonActions.navigate({
              name: Routes.LOGGED.PRODUCTDETAILS,
              params: {
                products: item.products,
              },
            }),
          )
        }
      >
        <WrapperFooter>
          <WrapperText>
            <ServiveName>{item.companyFantasy}</ServiveName>
            <City>{`Cidade: ${item.city}`}</City>
          </WrapperText>
        </WrapperFooter>
        <WrapperArrow>
          <IconeArrow name="chevron-right" />
        </WrapperArrow>
      </CardClients>
    );
  };
  return (
    <>
      <HeaderIcon />
      <Container>
        <WrappertTitle>
          <Title>Clientes</Title>
        </WrappertTitle>
        <FlatList
          data={getClientsWithProducts}
          keyExtractor={item => String(item.id)}
          renderItem={renderClientsProducts}
        />
      </Container>
    </>
  );
}
