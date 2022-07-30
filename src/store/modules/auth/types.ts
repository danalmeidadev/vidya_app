/* eslint-disable no-shadow */
/* eslint-disable camelcase */

export enum authActions {
  AUTH_REQUEST = 'AUTH_REQUEST',
  AUTH_SUCCESS = 'AUTH_SUCCESS',
  AUTH_FAILURE = 'AUTH_FAILURE',
  AUTH_LOGOUT = 'AUTH_LOGOUT',
  AUTH_SET_TOKEN = 'AUTH_SET_TOKEN',
}

export interface IAuthState {
  email: string;
  loading?: boolean;
  access_token?: string;
  password: string;
  isLogged?: boolean;
  error?: boolean;
}
