/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { Reducer } from 'redux';
import {
  getUsersWithProdductsActions,
  IGetUsersWithProductsState,
} from './types';

const INITIAL_STATE: IGetUsersWithProductsState = {
  data: [],
  loading: false,
};

const getUsersWithProducts: Reducer<IGetUsersWithProductsState> = (
  state: IGetUsersWithProductsState = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case getUsersWithProdductsActions.GET_USERS_WITH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case getUsersWithProdductsActions.GET_USERS_WITH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.users,
      };

    case getUsersWithProdductsActions.GET_USERS_WITH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default getUsersWithProducts;
