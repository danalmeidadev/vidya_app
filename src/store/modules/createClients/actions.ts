import { ICreateClientState, createClientActions } from './types';

export function createClientRequest(client: ICreateClientState) {
  return {
    type: createClientActions.CREATE_CLIENT_REQUEST,
    payload: {
      client,
    },
  };
}

export function createClientSuccess() {
  return {
    type: createClientActions.CREATE_CLIENT_SUCCESS,
  };
}
export function createClientFailure() {
  return {
    type: createClientActions.CREATE_CLIENT_FAILURE,
  };
}
