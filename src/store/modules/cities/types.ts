/* eslint-disable no-shadow */
/* eslint-disable camelcase */

export enum citiesActions {
  CITIES_REQUEST = 'CITIES_REQUEST',
  CITIES_SUCCESS = 'CITIES_SUCCESS',
  CITIES_FAILURE = 'CITIES_FAILURE',
}

export interface ICitiesProps {
  id: number;
  name: string;
}

export interface ICitiesState {
  loading?: boolean;
  data: ICitiesProps[];
}
