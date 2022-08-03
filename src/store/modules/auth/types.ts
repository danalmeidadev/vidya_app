/* eslint-disable no-shadow */
/* eslint-disable camelcase */

export enum authActions {
  AUTH_REQUEST = 'AUTH_REQUEST',
  AUTH_SUCCESS = 'AUTH_SUCCESS',
  AUTH_FAILURE = 'AUTH_FAILURE',
  AUTH_LOGOUT = 'AUTH_LOGOUT',
}

export interface IAuth {
  email: string;
  password: string;
}

export interface IAuthState {
  email: string;
  password: string;
  isLogged?: boolean;
  loading?: boolean;
}
