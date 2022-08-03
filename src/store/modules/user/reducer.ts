/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { Reducer } from 'redux';
import { IUserState, userActions } from './types';

const INITIAL_STATE: IUserState = {
  email: '',
  name: '',
  productId: 0,
  error: false,
  loading: false,
};

const user: Reducer<IUserState> = (
  state: IUserState = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case userActions.USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case userActions.USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case userActions.USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};
export default user;
