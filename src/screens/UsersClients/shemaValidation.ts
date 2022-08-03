import * as Yup from 'yup';

export const shemaValidation = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório'),
  email: Yup.string().required('Campo obrigatório'),
});
