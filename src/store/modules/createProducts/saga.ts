import { DropdownAlert } from '@nghinv/react-native-dropdown-alert';
import { CommonActions } from '@react-navigation/native';
import { AxiosResponse } from 'axios';
import { all, takeLatest, call, put } from 'redux-saga/effects';
import { Routes } from '~/routes';
import { fetchCreateProducts } from '~/services';
import * as actionCreateProduct from './actions';
import { createProductActions } from './types';
import * as actionClientsProducts from '../getClientsWithProducts/actions';

export function* createProduct({ payload }: any) {
  try {
    const { product } = payload;
    const data = {
      name: product.name,
      description: product.description,
      midias: product.midias,
      version: product.version,
      clientId: product.clientId,
    };
    const response: AxiosResponse<any> = yield call(fetchCreateProducts, data);
    if (response.name !== '') {
      DropdownAlert.show({
        type: 'success',
        message: 'Produto cadastrado com sucesso!',
      });
    }

    yield put(actionCreateProduct.createProductSuccess(response));
  } catch (error) {
    yield put(actionCreateProduct.createProductFailure());
    DropdownAlert.show({
      type: 'error',
      message: 'Oops! Houve um erro ao cadastrar o produto!',
    });
  }
}

export default all([
  takeLatest(createProductActions.CREATE_PRODUCT_REQUEST, createProduct),
]);
