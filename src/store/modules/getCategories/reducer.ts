/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { Reducer } from 'redux';
import { ICategoriesState, categoriesActions } from './types';

const INITIAL_STATE: ICategoriesState = {
  error: false,
  loading: false,
  data: [],
};

const categories: Reducer<ICategoriesState> = (
  state: ICategoriesState = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case categoriesActions.CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case categoriesActions.CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.categories,
      };

    case categoriesActions.CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default categories;
