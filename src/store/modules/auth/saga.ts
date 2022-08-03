import { DropdownAlert } from '@nghinv/react-native-dropdown-alert';
import { AxiosResponse } from 'axios';
import { all, takeLatest, call, put } from 'redux-saga/effects';
import { fetchAuth } from '~/services';
import * as actionAuth from './actions';
import { authActions, IAuth } from './types';

export function* auth({ payload }: any) {
  try {
    const response: AxiosResponse<any> = yield call(fetchAuth);
    const email = response.findIndex(
      (user: IAuth) => user.email === payload.auth.email,
    );
    const password = response.findIndex(
      (user: IAuth) => user.password === payload.auth.password,
    );

    if (email === 0 && password === 0) {
      yield put(actionAuth.authSuccess(response));
    } else {
      DropdownAlert.show({
        type: 'error',
        message: 'Oops! Email ou senha invalidos',
      });
      yield put(actionAuth.authFailure());
    }
  } catch (error) {
    yield put(actionAuth.authFailure());
    DropdownAlert.show({
      type: 'error',
      message: 'Oops! Email ou senha invalidos',
    });
  }
}

export default all([takeLatest(authActions.AUTH_REQUEST, auth)]);
