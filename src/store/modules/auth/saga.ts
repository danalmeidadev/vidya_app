import { DropdownAlert } from '@nghinv/react-native-dropdown-alert';
import { AxiosResponse } from 'axios';
import { all, takeLatest, call, put } from 'redux-saga/effects';
import { login } from '~/services';
import * as actionAccount from './actions';
import { authActions } from './types';

export function* authlogin({ payload }: any) {
  try {
    const { auth } = payload;
    const response: AxiosResponse<any> = yield call(login, auth);

    yield put(actionAccount.authSuccess(response.data));
  } catch (error) {
    yield put(actionAccount.authFailure());
    DropdownAlert.show({
      type: 'error',
      message: 'Oops! Email ou senha invalidos!',
    });
  }
}

export default all([takeLatest(authActions.AUTH_REQUEST, authlogin)]);
