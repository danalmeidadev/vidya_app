import { all } from 'redux-saga/effects';
import auth from './auth/saga';
import register from './register/saga';
import categories from './getCategories/saga';
import services from './servicesUser/saga';
import userMe from './userMe/saga';
import staties from './staties/saga';
import cities from './cities/saga';

export default function* rootSaga() {
  yield all([auth, register, categories, services, userMe, staties, cities]);
}
