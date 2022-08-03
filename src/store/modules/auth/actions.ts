import { IAuthState, authActions } from './types';

export function authRequest(auth: IAuthState) {
  return {
    type: authActions.AUTH_REQUEST,
    payload: {
      auth,
    },
  };
}

export function authSuccess(auth: IAuthState) {
  return {
    type: authActions.AUTH_SUCCESS,
    payload: {
      auth,
    },
  };
}
export function authFailure() {
  return {
    type: authActions.AUTH_FAILURE,
  };
}

export function authLogout() {
  return {
    type: authActions.AUTH_LOGOUT,
  };
}
