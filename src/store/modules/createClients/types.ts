/* eslint-disable no-shadow */
/* eslint-disable camelcase */

export enum createClientActions {
  CREATE_CLIENT_REQUEST = 'CREATE_CLIENT_REQUEST',
  CREATE_CLIENT_SUCCESS = 'CREATE_CLIENT_SUCCESS',
  CREATE_CLIENT_FAILURE = 'CREATE_CLIENT_FAILURE',
}

export interface ICreateClientState {
  document: string;
  companyName: string;
  companyFantasy: string;
  zipCode: string;
  street: string;
  number: string;
  district: string;
  city: string;
  state: string;
  email: string;
  cellphone: string;
  error?: boolean;
  loading?: boolean;
}
