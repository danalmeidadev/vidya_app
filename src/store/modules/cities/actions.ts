import { citiesActions, ICitiesProps } from './types';

export function getCitiesRequest(cityID: number) {
  return {
    type: citiesActions.CITIES_REQUEST,
    payload: {
      cityID,
    },
  };
}

export function getCitiesSuccess(data: ICitiesProps) {
  return {
    type: citiesActions.CITIES_SUCCESS,
    payload: {
      data,
    },
  };
}
export function getCitiesFailure() {
  return {
    type: citiesActions.CITIES_FAILURE,
  };
}
