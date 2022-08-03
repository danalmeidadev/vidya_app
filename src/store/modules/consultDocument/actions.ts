import { consultDocumentActions, IConsultDocumentProps } from './types';

export function consultDocumentRequest(document: string) {
  return {
    type: consultDocumentActions.CONSULT_DOCUMENT_REQUEST,
    payload: {
      document,
    },
  };
}

export function consultDocumentSuccess(document: IConsultDocumentProps) {
  return {
    type: consultDocumentActions.CONSULT_DOCUMENT_SUCCESS,
    payload: {
      document,
    },
  };
}
export function consultDocumentFailure() {
  return {
    type: consultDocumentActions.CONSULT_DOCUMENT_FAILURE,
  };
}
