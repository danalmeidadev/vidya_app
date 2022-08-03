/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { Reducer } from 'redux';
import {
  IConsultDocumentState,
  IConsultDocumentProps,
  consultDocumentActions,
} from './types';

const INITIAL_STATE: IConsultDocumentState = {
  error: false,
  loading: false,
  data: {} as IConsultDocumentProps,
};

const consultDocument: Reducer<IConsultDocumentState> = (
  state: IConsultDocumentState = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case consultDocumentActions.CONSULT_DOCUMENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case consultDocumentActions.CONSULT_DOCUMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.document,
      };

    case consultDocumentActions.CONSULT_DOCUMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default consultDocument;
