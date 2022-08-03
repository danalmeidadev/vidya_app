/* eslint-disable no-shadow */
/* eslint-disable camelcase */

export enum consultDocumentActions {
  CONSULT_DOCUMENT_REQUEST = 'CONSULT_DOCUMENT_REQUEST',
  CONSULT_DOCUMENT_SUCCESS = 'CONSULT_DOCUMENT_SUCCESS',
  CONSULT_DOCUMENT_FAILURE = 'CONSULT_DOCUMENT_FAILURE',
}

export interface IConsultDocumentProps {
  nome: string;
  fantasia: string;
  logradouro: string;
  numero: string;
  complemento: string;
  municipio: string;
  bairro: string;
  uf: string;
  cep: string;
  email: string;
  telefone: string;
  cnpj: string;
  situacao: string;
}

export interface IConsultDocumentState {
  loading?: boolean;
  error?: boolean;
  data: IConsultDocumentProps;
}
