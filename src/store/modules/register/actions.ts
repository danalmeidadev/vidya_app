import { IAuthRegisterProps, registerActions } from './types';

export function registerRequest(register: IAuthRegisterProps) {
  return {
    type: registerActions.REGISTER_REQUEST,
    payload: {
      register,
    },
  };
}

export function registerSuccess(register: string) {
  return {
    type: registerActions.REGISTER_SUCCESS,
    payload: {
      register,
    },
  };
}
export function registerFailure() {
  return {
    type: registerActions.REGISTER_FAILURE,
  };
}
