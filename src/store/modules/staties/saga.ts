/* eslint-disable camelcase */
import { DropdownAlert } from '@nghinv/react-native-dropdown-alert';
import { AxiosResponse } from 'axios';
import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import { fetchStaties, toLivreApiLogged } from '~/services/logged';
import * as actionCategories from './actions';

import { statiesActions } from './types';

interface IProps {
  access_token: string;
}

export function* staties() {
  try {
    const getToken = (state: { auth: { access_token: string } }) =>
      state.auth.access_token;
    const tokenUser: IProps = yield select(getToken);
    toLivreApiLogged.defaults.headers.common.Authorization = `Bearer ${tokenUser}`;
    const response: AxiosResponse<any> = yield call(fetchStaties);
    yield put(actionCategories.getCategoriesSuccess(response.data));
  } catch (error) {
    yield put(actionCategories.getCategoriesFailure());
    DropdownAlert.show({
      type: 'error',
      message: 'Oops! Houve um error ao trazer os estados',
    });
  }
}

export default all([takeLatest(statiesActions.STATIES_REQUEST, staties)]);
