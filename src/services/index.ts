import axios from 'axios';
import {
  ICreateClientServiceProps,
  ICreateProductsServiceProps,
  IUserCreateService,
} from './types';

const vidyaApi = axios.create({
  baseURL: 'http://localhost:3000',
});

const consultDocument = axios.create({
  baseURL: 'https://receitaws.com.br/v1/',
  headers: {
    Authorization:
      '231c9b760903697eab7c4e5ac7901d6b01ab1d8aae72fc4eeeab8204c74f8eeb',
  },
});

const fetchConsultDocument = async (document: string) => {
  const response = await consultDocument.get(`cnpj/${document}`);
  return response.data;
};

const fetchCreateProducts = async (product: ICreateProductsServiceProps) => {
  const response = await vidyaApi.post('/products', product);
  return response.data;
};
const fetchCreateclient = async (client: ICreateClientServiceProps) => {
  const response = await vidyaApi.post('/clients', client);
  return response.data;
};
const fetchCreateUser = async (user: IUserCreateService) => {
  const response = await vidyaApi.post('/users', user);
  return response.data;
};
const fetchGetClients = async () => {
  const response = await vidyaApi.get('/clients');
  return response.data;
};
const fetchGetClientsWithProducts = async () => {
  const response = await vidyaApi.get('/clients?_embed=products');
  return response.data;
};
const fetchGetUsersWithProducts = async () => {
  const response = await vidyaApi.get('/products?_embed=users');
  return response.data;
};
const fetchAuth = async () => {
  const response = await vidyaApi.get('/auth');
  return response.data;
};

export {
  fetchAuth,
  fetchConsultDocument,
  vidyaApi,
  fetchCreateProducts,
  fetchCreateclient,
  fetchGetClients,
  fetchGetClientsWithProducts,
  fetchCreateUser,
  fetchGetUsersWithProducts,
};
