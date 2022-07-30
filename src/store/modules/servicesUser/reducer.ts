/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { Reducer } from 'redux';
import { userServicesActions, IUserServiceState } from './types';

const INITIAL_STATE: IUserServiceState = {
  error: false,
  loading: false,
  data: [],
};

const services: Reducer<IUserServiceState> = (
  state: IUserServiceState = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case userServicesActions.SERVICES_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case userServicesActions.SERVICES_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.service,
      };

    case userServicesActions.SERVICES_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default services;
