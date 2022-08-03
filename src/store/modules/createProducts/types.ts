/* eslint-disable no-shadow */
/* eslint-disable camelcase */

export enum createProductActions {
  CREATE_PRODUCT_REQUEST = 'CREATE_PRODUCT_REQUEST',
  CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS',
  CREATE_PRODUCT_FAILURE = 'CREATE_PRODUCT_FAILURE',
}

export interface ICreateProductState {
  name: string;
  description: string;
  midias: string;
  version: string;
  clientId: number;
  error?: boolean;
  loading?: boolean;
}
