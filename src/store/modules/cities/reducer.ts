/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { Reducer } from 'redux';
import { ICitiesState, citiesActions } from './types';

const INITIAL_STATE: ICitiesState = {
  loading: false,
  data: [],
};

const cities: Reducer<ICitiesState> = (
  state: ICitiesState = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case citiesActions.CITIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case citiesActions.CITIES_SUCCESS:
      console.log('action', action.payload);
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };

    case citiesActions.CITIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default cities;
