/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { Reducer } from 'redux';
import {
  getClientsWithProdductsActions,
  IGetClientsWithProductsState,
} from './types';

const INITIAL_STATE: IGetClientsWithProductsState = {
  data: [],
  loading: false,
};

const getClients: Reducer<IGetClientsWithProductsState> = (
  state: IGetClientsWithProductsState = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case getClientsWithProdductsActions.GET_CLIENTS_WITH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case getClientsWithProdductsActions.GET_CLIENTS_WITH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.clients,
      };

    case getClientsWithProdductsActions.GET_CLIENTS_WITH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default getClients;
