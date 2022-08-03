/* eslint-disable camelcase */
import { DropdownAlert } from '@nghinv/react-native-dropdown-alert';
import { AxiosResponse } from 'axios';
import { all, takeLatest, call, put } from 'redux-saga/effects';
import { fetchGetUsersWithProducts } from '~/services';
import * as actionGetUsersWithProducts from './actions';
import { getUsersWithProdductsActions } from './types';

export function* getUsersWithProducts() {
  try {
    const response: AxiosResponse<any> = yield call(fetchGetUsersWithProducts);
    yield put(actionGetUsersWithProducts.getUsersWithProductsSuccess(response));
  } catch (error) {
    yield put(actionGetUsersWithProducts.getUsersWithProductsFailure());
    DropdownAlert.show({
      type: 'error',
      message: 'Oops! Houve um error ao trazer os dados',
    });
  }
}

export default all([
  takeLatest(
    getUsersWithProdductsActions.GET_USERS_WITH_PRODUCTS_REQUEST,
    getUsersWithProducts,
  ),
]);
