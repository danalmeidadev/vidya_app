import { ICreateProductState, createProductActions } from './types';

export function createProductRequest(product: ICreateProductState) {
  return {
    type: createProductActions.CREATE_PRODUCT_REQUEST,
    payload: {
      product,
    },
  };
}

export function createProductSuccess() {
  return {
    type: createProductActions.CREATE_PRODUCT_SUCCESS,
  };
}
export function createProductFailure() {
  return {
    type: createProductActions.CREATE_PRODUCT_FAILURE,
  };
}
