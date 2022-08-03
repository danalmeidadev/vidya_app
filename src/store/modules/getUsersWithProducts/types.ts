/* eslint-disable no-shadow */
/* eslint-disable camelcase */

export enum getUsersWithProdductsActions {
  GET_USERS_WITH_PRODUCTS_REQUEST = 'GET_USERS_WITH_PRODUCTS_REQUEST',
  GET_USERS_WITH_PRODUCTS_SUCCESS = 'GET_USERS_WITH_PRODUCTS_SUCCESS',
  GET_USERS_WITH_PRODUCTS_FAILURE = 'GET_USERS_WITH_PRODUCTS_FAILURE',
}

export interface IGetUsersWitProductData {
  name: string;
  email: string;
}

export interface IGetUsersWithProductsData {
  name: string;
  description: string;
  midias: string;
  version: string;
  clientId: string;
  id: number;
  cellphone: string;
  users: IGetUsersWitProductData[];
}

export interface IGetUsersWithProductsState {
  data: IGetUsersWithProductsData[];
  loading?: boolean;
}
