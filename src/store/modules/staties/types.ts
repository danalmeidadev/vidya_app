/* eslint-disable no-shadow */
/* eslint-disable camelcase */

export enum statiesActions {
  STATIES_REQUEST = 'STATIES_REQUEST',
  STATIES_SUCCESS = 'STATIES_SUCCESS',
  STATIES_FAILURE = 'STATIES_FAILURE',
}

export interface IStatiesProps {
  id: number;
  name: string;
  abbreviation: string;
}

export interface IStatiesState {
  loading?: boolean;
  data: IStatiesProps[];
}
