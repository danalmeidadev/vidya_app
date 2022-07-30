/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { Reducer } from 'redux';
import { statiesActions, IStatiesState } from './types';

const INITIAL_STATE: IStatiesState = {
  loading: false,
  data: [],
};

const staties: Reducer<IStatiesState> = (
  state: IStatiesState = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case statiesActions.STATIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case statiesActions.STATIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };

    case statiesActions.STATIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default staties;
