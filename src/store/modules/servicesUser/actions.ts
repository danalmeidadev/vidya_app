import { userServicesActions } from './types';

export function getUserServiceRequest() {
  return {
    type: userServicesActions.SERVICES_USER_REQUEST,
  };
}

export function getUserServiceSuccess(service: []) {
  return {
    type: userServicesActions.SERVICES_USER_SUCCESS,
    payload: {
      service,
    },
  };
}
export function getUserServiceFailure() {
  return {
    type: userServicesActions.SERVICES_USER_FAILURE,
  };
}
