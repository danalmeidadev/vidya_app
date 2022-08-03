import { getClientsActions, IGetClientsData } from './types';

export function getClientsRequest() {
  return {
    type: getClientsActions.GET_CLIENTS_REQUEST,
  };
}

export function getClientsSuccess(clients: IGetClientsData[]) {
  return {
    type: getClientsActions.GET_CLIENTS_SUCCESS,
    payload: {
      clients,
    },
  };
}
export function getClientsFailure() {
  return {
    type: getClientsActions.GET_CLIENTS_FAILURE,
  };
}
