/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { Reducer } from 'redux';
import { ICreateClientState, createClientActions } from './types';

const INITIAL_STATE: ICreateClientState = {
  cellphone: '',
  city: '',
  companyFantasy: '',
  companyName: '',
  district: '',
  document: '',
  email: '',
  number: '',
  state: '',
  street: '',
  zipCode: '',
  error: false,
  loading: false,
};

const createClient: Reducer<ICreateClientState> = (
  state: ICreateClientState = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case createClientActions.CREATE_CLIENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case createClientActions.CREATE_CLIENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case createClientActions.CREATE_CLIENT_FAILURE:
      return {
        ...state,
        isLogged: false,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};
export default createClient;
