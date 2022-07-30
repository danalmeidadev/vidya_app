import { statiesActions, IStatiesProps } from './types';

export function getCategoriesRequest() {
  return {
    type: statiesActions.STATIES_REQUEST,
  };
}

export function getCategoriesSuccess(data: IStatiesProps) {
  return {
    type: statiesActions.STATIES_SUCCESS,
    payload: {
      data,
    },
  };
}
export function getCategoriesFailure() {
  return {
    type: statiesActions.STATIES_FAILURE,
  };
}
