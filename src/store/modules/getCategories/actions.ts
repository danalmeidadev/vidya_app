import { categoriesActions } from './types';

export function getCategoriesRequest() {
  return {
    type: categoriesActions.CATEGORIES_REQUEST,
  };
}

export function getCategoriesSuccess(categories: []) {
  return {
    type: categoriesActions.CATEGORIES_SUCCESS,
    payload: {
      categories,
    },
  };
}
export function getCategoriesFailure() {
  return {
    type: categoriesActions.CATEGORIES_FAILURE,
  };
}
