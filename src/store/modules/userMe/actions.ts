import { userMeActions, IUserMeTypes } from './types';

export function userMeRequest() {
  return {
    type: userMeActions.USER_ME_REQUEST,
  };
}

export function userMeSuccess(userMe: IUserMeTypes) {
  return {
    type: userMeActions.USER_ME_SUCCESS,
    payload: {
      userMe,
    },
  };
}

export function userMeFailure() {
  return {
    type: userMeActions.USER_ME_FAILURE,
  };
}
