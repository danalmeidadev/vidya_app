/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { Reducer } from 'redux';
import { getClientsActions, IGetClientsState } from './types';

const INITIAL_STATE: IGetClientsState = {
  data: [],
  loading: false,
};

const getClients: Reducer<IGetClientsState> = (
  state: IGetClientsState = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case getClientsActions.GET_CLIENTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case getClientsActions.GET_CLIENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.clients,
      };

    case getClientsActions.GET_CLIENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default getClients;
