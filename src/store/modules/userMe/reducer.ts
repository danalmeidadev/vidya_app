/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { Reducer } from 'redux';
import { IUserMeState, IUserMeTypes, userMeActions } from './types';

const INITIAL_STATE: IUserMeState = {
  data: {} as IUserMeTypes,
  loading: false,
};

const userMe: Reducer<IUserMeState> = (
  state: IUserMeState = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case userMeActions.USER_ME_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case userMeActions.USER_ME_SUCCESS:
      console.log('actions', action.payload.userMe);
      return {
        ...state,
        loading: false,
        data: action.payload.userMe,
      };

    case userMeActions.USER_ME_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default userMe;
