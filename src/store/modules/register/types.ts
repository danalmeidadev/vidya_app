/* eslint-disable no-shadow */
/* eslint-disable camelcase */

export enum registerActions {
  REGISTER_REQUEST = 'REGISTER_REQUEST',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  REGISTER_FAILURE = 'REGISTER_FAILURE',
}

export interface IAuthRegisterProps {
  email: string;
  password: string;
  loading?: boolean;
  access_token?: string;
  name?: string;
  cellphone?: string;
  whatsapp?: number;
  password_verify?: string;
  error?: boolean;
}

export interface IAuthRegisterState {
  register: IAuthRegisterProps;
}
