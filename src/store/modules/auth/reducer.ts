/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { Reducer } from 'redux';
import { IAuthState, authActions } from './types';

const INITIAL_STATE: IAuthState = {
  email: '',
  isLogged: false,
  password: '',
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
        loading: true,
        isLogged: false,
      };

    case authActions.AUTH_SUCCESS:
      console.log('auth', action);
      return {
        ...state,
        loading: false,
        isLogged: true,
        email: action.payload.auth.email,
        password: action.payload.auth.password,
      };

    case authActions.AUTH_FAILURE:
      return {
        ...state,
        loading: false,
        isLogged: false,
        error: true,
      };
    case authActions.AUTH_LOGOUT:
      return {
        ...state,
        isLogged: false,
      };

    default:
      return state;
  }
};

export default auth;
