import { all, takeLatest, call, put } from 'redux-saga/effects';
import { DropdownAlert } from '@nghinv/react-native-dropdown-alert';
import { AxiosResponse } from 'axios';
import { registerAccounRequest } from '~/services';
import * as actionAccount from './actions';
import * as actionLogin from '../auth/actions';

import { registerActions } from './types';

export function* authRegister({ payload }: any) {
  try {
    const { register } = payload;
    const response: AxiosResponse<any> = yield call(
      registerAccounRequest,
      register,
    );
    if (response.data) {
      yield put(actionLogin.authSuccess(response.data));
    }
    if (response.data) {
      DropdownAlert.show({
        type: 'success',
        message: 'Sua conta foi criada com sucesso!',
      });
    }
  } catch (error) {
    yield put(actionAccount.registerFailure());
    DropdownAlert.show({
      type: 'error',
      message:
        'Oops! Houve um error ao criar sua conta, por favor tente novamente!',
    });
  }
}

export default all([
  takeLatest(registerActions.REGISTER_REQUEST, authRegister),
]);
