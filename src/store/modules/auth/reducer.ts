/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { Reducer } from 'redux';
import { authActions, IAuthState } from './types';

const INITIAL_STATE: IAuthState = {
  email: '',
  password: '',
  access_token: '',
  error: false,
  isLogged: false,
  loading: false,
};

const auth: Reducer<IAuthState> = (
  state: IAuthState = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case authActions.AUTH_REQUEST:
      return {
        ...state,
        isLogged: false,
        loading: true,
        isError: false,
      };

    case authActions.AUTH_SUCCESS:
      return {
        ...state,
        isLogged: true,
        loading: false,
        error: false,
        access_token: action.payload.auth.access_token,
      };

    case authActions.AUTH_SET_TOKEN:
      return {
        ...state,
        access_token: action.payload.auth.access_token,
      };
    case authActions.AUTH_FAILURE:
      return {
        ...state,
        isLogged: false,
        loading: false,
        error: true,
      };

    case authActions.AUTH_LOGOUT:
      return {
        ...state,
        isLogged: false,
        access_token: '',
      };

    default:
      return state;
  }
};

export default auth;
