import * as Yup from 'yup';

export const shemaValidation = Yup.object().shape({
  email: Yup.string().required('Campo obrigatório'),
  cellphone: Yup.string().required('Campo obrigatório'),
  companyName: Yup.string().required('Campo obrigatório'),
  companyFantasy: Yup.string().required('Campo obrigatório'),
  zipCode: Yup.string().required('Campo obrigatório'),
  street: Yup.string().required('Campo obrigatório'),
  number: Yup.string().required('Campo obrigatório'),
  state: Yup.string().required('Campo obrigatório'),
  city: Yup.string().required('Campo obrigatório'),
  district: Yup.string().required('Campo obrigatório'),
});
