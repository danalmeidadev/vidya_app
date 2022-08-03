import { all } from 'redux-saga/effects';
import document from './consultDocument/saga';
import createProduct from './createProducts/saga';
import createClient from './createClients/saga';
import getClients from './getClients/saga';
import getClientsWithProducts from './getClientsWithProducts/saga';
import getUsersWithProducts from './getUsersWithProducts/saga';
import user from './user/saga';

export default function* rootSaga() {
  yield all([
    document,
    createProduct,
    createClient,
    getClients,
    getClientsWithProducts,
    getUsersWithProducts,
    user,
  ]);
}
