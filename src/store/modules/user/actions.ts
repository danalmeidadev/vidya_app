import { IUserState, userActions } from './types';

export function usersRequest(user: IUserState) {
  return {
    type: userActions.USERS_REQUEST,
    payload: {
      user,
    },
  };
}

export function usersSuccess() {
  return {
    type: userActions.USERS_SUCCESS,
  };
}
export function usersFailure() {
  return {
    type: userActions.USERS_FAILURE,
  };
}
