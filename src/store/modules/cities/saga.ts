/* eslint-disable camelcase */
import { DropdownAlert } from '@nghinv/react-native-dropdown-alert';
import { AxiosResponse } from 'axios';
import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import { fetchCities, toLivreApiLogged } from '~/services/logged';
import * as actionCities from './actions';

import { citiesActions } from './types';

interface IProps {
  access_token: string;
}

export function* cities({ payload }: any) {
  try {
    const getToken = (state: { auth: { access_token: string } }) =>
      state.auth.access_token;
    const tokenUser: IProps = yield select(getToken);
    toLivreApiLogged.defaults.headers.common.Authorization = `Bearer ${tokenUser}`;
    const response: AxiosResponse<any> = yield call(
      fetchCities,
      payload.cityID,
    );
    yield put(actionCities.getCitiesSuccess(response.data));
  } catch (error) {
    yield put(actionCities.getCitiesFailure());
    DropdownAlert.show({
      type: 'error',
      message: 'Oops! Houve um error ao trazer os estados',
    });
  }
}

export default all([takeLatest(citiesActions.CITIES_REQUEST, cities)]);
