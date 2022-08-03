/* eslint-disable no-shadow */
/* eslint-disable camelcase */

export enum getClientsActions {
  GET_CLIENTS_REQUEST = 'GET_CLIENTS_REQUEST',
  GET_CLIENTS_SUCCESS = 'GET_CLIENTS_SUCCESS',
  GET_CLIENTS_FAILURE = 'GET_CLIENTS_FAILURE',
}

export interface IGetClientsData {
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
}

export interface IGetClientsState {
  data: IGetClientsData[];
  loading?: boolean;
}
