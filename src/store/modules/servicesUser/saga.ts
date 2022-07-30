/* eslint-disable camelcase */
import { DropdownAlert } from '@nghinv/react-native-dropdown-alert';
import { AxiosResponse } from 'axios';
import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import { getServicesUser, toLivreApiLogged } from '~/services/logged';
import * as actionCategories from './actions';

import { userServicesActions } from './types';

interface IProps {
  access_token: string;
}

export function* getServices() {
  try {
    const getToken = (state: { auth: { access_token: string } }) =>
      state.auth.access_token;
    const tokenUser: IProps = yield select(getToken);
    toLivreApiLogged.defaults.headers.common.Authorization = `Bearer ${tokenUser}`;
    const response: AxiosResponse<any> = yield call(getServicesUser);
    yield put(actionCategories.getUserServiceSuccess(response.data));
  } catch (error) {
    yield put(actionCategories.getUserServiceFailure());
    DropdownAlert.show({
      type: 'error',
      message: 'Oops! Houve um error ao trazer as categorias',
    });
  }
}

export default all([
  takeLatest(userServicesActions.SERVICES_USER_REQUEST, getServices),
]);
