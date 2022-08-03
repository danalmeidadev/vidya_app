import {
  CommonActions,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';
import { FlatList } from 'react-native';
import { HeaderIconBack } from '~/components/HeaderIconBack';
import { Routes } from '~/routes';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersWithProductsRequest } from '~/store/modules/getUsersWithProducts/actions';
import { IAplicationState } from '~/store';
import { IProductDetailsProps, ParamList } from './types';
import {
  Card,
  Container,
  WrappperCard,
  Image,
  WrapperDescription,
  Description,
  Users,
} from './styles';

export function ProductDetails() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { params } = useRoute<RouteProp<ParamList, 'Detail'>>();
  const getUsersWithProducts = useSelector(
    (state: IAplicationState) => state.getUsersWithProducts,
  );

  const getUsersProducts = useCallback(() => {
    dispatch(getUsersWithProductsRequest());
  }, [dispatch]);

  useEffect(() => {
    getUsersProducts();
  }, [getUsersProducts]);

  const renderCards = ({
    item,
    index,
  }: {
    item: IProductDetailsProps;
    index: number;
  }) => {
    return (
      <WrappperCard
        onPress={() =>
          navigation.dispatch(
            CommonActions.navigate({
              name: Routes.LOGGED.USERSCLIENTS,
              params: {
                product: item.id,
              },
            }),
          )
        }
      >
        <Card>
          <Image source={{ uri: item.midias }} resizeMode="contain" />
        </Card>
        <WrapperDescription>
          <Description>{item.description}</Description>
          <Users>{`Total de usuários: ${getUsersWithProducts?.data[index]?.users?.length}`}</Users>
        </WrapperDescription>
      </WrappperCard>
    );
  };
  return (
    <>
      <HeaderIconBack />
      <Container>
        <FlatList
          data={params?.products}
          keyExtractor={item => String(item.id)}
          renderItem={renderCards}
        />
      </Container>
    </>
  );
}
