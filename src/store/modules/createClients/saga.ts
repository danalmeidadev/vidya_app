import { DropdownAlert } from '@nghinv/react-native-dropdown-alert';
import { AxiosResponse } from 'axios';
import { all, takeLatest, call, put } from 'redux-saga/effects';
import { fetchCreateclient } from '~/services';
import * as actionCreateClient from './actions';
import { createClientActions } from './types';

export function* createClient({ payload }: any) {
  try {
    const { client } = payload;
    const data = {
      document: client.document,
      companyName: client.companyName,
      companyFantasy: client.companyFantasy,
      zipCode: client.zipCode,
      street: client.street,
      number: client.number,
      district: client.district,
      city: client.city,
      state: client.state,
      email: client.email,
      cellphone: client.cellphone,
    };
    const response: AxiosResponse<any> = yield call(fetchCreateclient, data);
    if (response.document !== '') {
      DropdownAlert.show({
        type: 'success',
        message: 'Cliente cadastro com sucesso!',
      });
    }
    yield put(actionCreateClient.createClientSuccess(response));
  } catch (error) {
    console.log(error);
    yield put(actionCreateClient.createClientFailure());
    DropdownAlert.show({
      type: 'error',
      message: 'Oops! Houve um erro realizar o cadastro. Tente novamente!',
    });
  }
}

export default all([
  takeLatest(createClientActions.CREATE_CLIENT_REQUEST, createClient),
]);
