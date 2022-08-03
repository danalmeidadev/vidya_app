/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { Reducer } from 'redux';
import { ICreateProductState, createProductActions } from './types';

const INITIAL_STATE: ICreateProductState = {
  description: '',
  midias: '',
  name: '',
  version: '',
  error: false,
  loading: false,
};

const auth: Reducer<ICreateProductState> = (
  state: ICreateProductState = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case createProductActions.CREATE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case createProductActions.CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case createProductActions.CREATE_PRODUCT_FAILURE:
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
export default auth;
