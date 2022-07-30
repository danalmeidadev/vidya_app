/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { Reducer } from 'redux';
import {
  IAuthRegisterProps,
  IAuthRegisterState,
  registerActions,
} from './types';

const INITIAL_STATE: IAuthRegisterState = {
  register: {} as IAuthRegisterProps,
};

const register: Reducer<IAuthRegisterState> = (
  state: IAuthRegisterState = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case registerActions.REGISTER_REQUEST:
      return {
        ...state,
        isLogged: false,
        loading: true,
        isError: false,
      };

    case registerActions.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };

    case registerActions.REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default register;
