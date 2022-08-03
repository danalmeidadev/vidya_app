import { getUsersWithProdductsActions, IGetUsersWitProductData } from './types';

export function getUsersWithProductsRequest() {
  return {
    type: getUsersWithProdductsActions.GET_USERS_WITH_PRODUCTS_REQUEST,
  };
}

export function getUsersWithProductsSuccess(users: IGetUsersWitProductData[]) {
  return {
    type: getUsersWithProdductsActions.GET_USERS_WITH_PRODUCTS_SUCCESS,
    payload: {
      users,
    },
  };
}
export function getUsersWithProductsFailure() {
  return {
    type: getUsersWithProdductsActions.GET_USERS_WITH_PRODUCTS_FAILURE,
  };
}
