export interface ICreateProductsServiceProps {
  name: string;
  description: string;
  midias: string;
  version: string;
}

export interface ICreateClientServiceProps {
  document: string;
  companyName: string;
  companyFantasy: string;
  zipCode: string;
  street: string;
  number: string;
  district: string;
  city: string;
  state: string;
  email: string;
  cellphone: string;
}

export interface IUserCreateService {
  name: string;
  email: string;
}
