/* eslint-disable camelcase */
import { DropdownAlert } from '@nghinv/react-native-dropdown-alert';
import { AxiosResponse } from 'axios';
import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import { getUserMe, toLivreApiLogged } from '~/services/logged';
import * as actionUserMe from './actions';
import { userMeActions } from './types';

interface IProps {
  access_token: string;
}

export function* userMe() {
  try {
    const getToken = (state: { auth: { access_token: string } }) =>
      state.auth.access_token;
    const tokenUser: IProps = yield select(getToken);
    toLivreApiLogged.defaults.headers.common.Authorization = `Bearer ${tokenUser}`;
    const response: AxiosResponse<any> = yield call(getUserMe);

    yield put(actionUserMe.userMeSuccess(response.data));
  } catch (error) {
    yield put(actionUserMe.userMeFailure());
  }
}

export default all([takeLatest(userMeActions.USER_ME_REQUEST, userMe)]);
