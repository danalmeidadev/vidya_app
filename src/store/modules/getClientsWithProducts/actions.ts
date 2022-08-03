import {
  IGetClientsWithProductsData,
  getClientsWithProdductsActions,
} from './types';

export function getClientsWithProductsRequest() {
  return {
    type: getClientsWithProdductsActions.GET_CLIENTS_WITH_PRODUCTS_REQUEST,
  };
}

export function getClientsWithProductsSuccess(
  clients: IGetClientsWithProductsData[],
) {
  return {
    type: getClientsWithProdductsActions.GET_CLIENTS_WITH_PRODUCTS_SUCCESS,
    payload: {
      clients,
    },
  };
}
export function getClientsWithProductsFailure() {
  return {
    type: getClientsWithProdductsActions.GET_CLIENTS_WITH_PRODUCTS_FAILURE,
  };
}
