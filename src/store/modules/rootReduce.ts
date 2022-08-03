import { combineReducers } from 'redux';
import document from './consultDocument/reducer';
import createProduct from './createProducts/reducer';
import createClient from './createClients/reducer';
import getClients from './getClients/reducer';
import getClientsWithProducts from './getClientsWithProducts/reducer';
import getUsersWithProducts from './getUsersWithProducts/reducer';
import user from './user/reducer';

export default combineReducers({
  document,
  createProduct,
  createClient,
  getClients,
  getClientsWithProducts,
  getUsersWithProducts,
  user,
});
