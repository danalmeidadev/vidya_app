import * as Yup from 'yup';

export const shemaValidation = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório'),
  description: Yup.string().required('Campo obrigatório'),
  midias: Yup.string().required('Campo obrigatório'),
  version: Yup.string().required('Campo obrigatório'),
});
