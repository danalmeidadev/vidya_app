/* eslint-disable camelcase */
import { DropdownAlert } from '@nghinv/react-native-dropdown-alert';
import { AxiosResponse } from 'axios';
import { all, takeLatest, call, put } from 'redux-saga/effects';
import { fetchGetClientsWithProducts } from '~/services';
import * as actionGetClientsWithProducts from './actions';
import { getClientsWithProdductsActions } from './types';

export function* getClientsWithProducts() {
  try {
    const response: AxiosResponse<any> = yield call(
      fetchGetClientsWithProducts,
    );
    yield put(
      actionGetClientsWithProducts.getClientsWithProductsSuccess(response),
    );
  } catch (error) {
    yield put(actionGetClientsWithProducts.getClientsWithProductsFailure());
    DropdownAlert.show({
      type: 'error',
      message: 'Oops! Houve um error ao trazer os dados',
    });
  }
}

export default all([
  takeLatest(
    getClientsWithProdductsActions.GET_CLIENTS_WITH_PRODUCTS_REQUEST,
    getClientsWithProducts,
  ),
]);
