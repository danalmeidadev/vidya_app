import { Control } from 'react-hook-form';

export type ICreateAccountProps = {
  document: string;
  companyName: string;
  companyFantasy: string;
  zipCode: string;
  street: string;
  number: string;
  distric: string;
  city: string;
  state: string;
  name: string;
  email: string;
  cellphone: string;
};

export type FormInputProps = {
  control: Control<ICreateAccountProps>;
};
