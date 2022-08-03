/* eslint-disable no-shadow */
/* eslint-disable camelcase */

export enum getClientsWithProdductsActions {
  GET_CLIENTS_WITH_PRODUCTS_REQUEST = 'GET_CLIENTS_WITH_PRODUCTS_REQUEST',
  GET_CLIENTS_WITH_PRODUCTS_SUCCESS = 'GET_CLIENTS_WITH_PRODUCTS_SUCCESS',
  GET_CLIENTS_WITH_PRODUCTS_FAILURE = 'GET_CLIENTS_WITH_PRODUCTS_FAILURE',
}

export interface IGetClientsWitProductData {
  name: string;
  description: string;
  midias: string;
  version: string;
  clientId: string;
  id: number;
}

export interface IGetClientsWithProductsData {
  id: number;
  document: string;
  companyName: string;
  companyFantasy: string;
  zipCode: string;
  street: string;
  number: string;
  district: string;
  city: string;
  state: string;
  name: string;
  email: string;
  cellphone: string;
  products: IGetClientsWitProductData[];
}

export interface IGetClientsWithProductsState {
  data: IGetClientsWithProductsData[];
  loading?: boolean;
}
