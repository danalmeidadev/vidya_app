/* eslint-disable no-shadow */
/* eslint-disable camelcase */

export enum userMeActions {
  USER_ME_REQUEST = 'USER_ME_REQUEST',
  USER_ME_SUCCESS = 'USER_ME_SUCCESS',
  USER_ME_FAILURE = 'USER_ME_FAILURE',
}

export interface IUserMeTypes {
  id: number;
  name: string;
  avatar: string;
  email: string;
  cellphone: string;
  whatsapp: number;
  hasAdverts: number;
  address: [];
}

export interface IUserMeState {
  data: IUserMeTypes;
  loading?: boolean;
}
