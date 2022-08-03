/* eslint-disable no-shadow */
/* eslint-disable camelcase */

export enum userActions {
  USERS_REQUEST = 'USERS_REQUEST',
  USERS_SUCCESS = 'USERS_SUCCESS',
  USERS_FAILURE = 'USERS_FAILURE',
}

export interface IUserState {
  name: string;
  email: string;
  productId: number;
  error?: boolean;
  loading?: boolean;
}
