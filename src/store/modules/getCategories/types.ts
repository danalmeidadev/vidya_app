/* eslint-disable no-shadow */
/* eslint-disable camelcase */

export enum categoriesActions {
  CATEGORIES_REQUEST = 'CATEGORIES_REQUEST',
  CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS',
  CATEGORIES_FAILURE = 'CATEGORIES_FAILURE',
}

export interface ICategoriesProps {
  id: number;
  name: string;
}

export interface ICategoriesState {
  loading?: boolean;
  error?: boolean;
  data: ICategoriesProps[];
}
