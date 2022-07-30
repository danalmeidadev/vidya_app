/* eslint-disable no-shadow */
/* eslint-disable camelcase */

export enum userServicesActions {
  SERVICES_USER_REQUEST = 'SERVICES_USER_REQUEST',
  SERVICES_USER_SUCCESS = 'SERVICES_USER_SUCCESS',
  SERVICES_USER_FAILURE = 'SERVICES_USER_FAILURE',
}

export interface IUserServices {
  id: number;
  name: string;
  avatar?: string;
  email: string;
  cellphone: string;
  whatsapp: string;
  hasServices: string;
  address: string;
}
export interface IUserServicesCategory {
  id: number;
  name: string;
}
export interface IUserServicesData {
  id: number;
  name: string;
  description: string;
  category: IUserServicesCategory;
  user: IUserServices;
}

export interface IUserServiceState {
  loading?: boolean;
  error?: boolean;
  data: IUserServicesData[];
}
