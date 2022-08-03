import { DropdownAlert } from '@nghinv/react-native-dropdown-alert';
import { AxiosResponse } from 'axios';
import { all, takeLatest, call, put } from 'redux-saga/effects';
import { fetchCreateUser } from '~/services';
import * as actionUser from './actions';
import { userActions } from './types';

export function* userCreate({ payload }: any) {
  try {
    const { user } = payload;
    console.log('user', user);
    const data = {
      name: user.name,
      email: user.email,
      productId: user.productId,
    };
    const response: AxiosResponse<any> = yield call(fetchCreateUser, data);
    if (response.name !== '') {
      DropdownAlert.show({
        type: 'success',
        message: 'Usuário cadastro com sucesso!',
      });
    }
    yield put(actionUser.usersSuccess(response));
  } catch (error) {
    console.log(error);
    yield put(actionUser.usersFailure());
    DropdownAlert.show({
      type: 'error',
      message: 'Oops! Houve um erro realizar o cadastro. Tente novamente!',
    });
  }
}

export default all([takeLatest(userActions.USERS_REQUEST, userCreate)]);
