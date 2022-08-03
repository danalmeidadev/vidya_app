/* eslint-disable camelcase */
import { DropdownAlert } from '@nghinv/react-native-dropdown-alert';
import { AxiosResponse } from 'axios';
import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import { fetchConsultDocument } from '~/services';
import * as actionConsultDocument from './actions';

import { consultDocumentActions } from './types';

export function* consult({ payload }: any) {
  try {
    const { document } = payload;
    const response: AxiosResponse<any> = yield call(
      fetchConsultDocument,
      document,
    );
    yield put(actionConsultDocument.consultDocumentSuccess(response));
  } catch (error) {
    yield put(actionConsultDocument.consultDocumentFailure());
    DropdownAlert.show({
      type: 'error',
      message: 'Oops! Houve um error ao trazer as categorias',
    });
  }
}

export default all([
  takeLatest(consultDocumentActions.CONSULT_DOCUMENT_REQUEST, consult),
]);
