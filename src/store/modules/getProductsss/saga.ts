/* eslint-disable camelcase */
import { DropdownAlert } from '@nghinv/react-native-dropdown-alert';
import { AxiosResponse } from 'axios';
import { all, takeLatest, call, put } from 'redux-saga/effects';
import { fetchGetClients } from '~/services';
import * as actionGetClients from './actions';
import { getClientsActions } from './types';

export function* getClients() {
  try {
    const response: AxiosResponse<any> = yield call(fetchGetClients);
    yield put(actionGetClients.getClientsSuccess(response));
  } catch (error) {
    yield put(actionGetClients.getClientsFailure());
    DropdownAlert.show({
      type: 'error',
      message: 'Oops! Houve um error ao trazer ao listar as empresas',
    });
  }
}

export default all([
  takeLatest(getClientsActions.GET_CLIENTS_REQUEST, getClients),
]);
