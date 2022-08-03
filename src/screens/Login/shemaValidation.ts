import * as Yup from 'yup';

export const shemaValidation = Yup.object().shape({
  email: Yup.string().email('email inválido').required('Campo obrigatório'),
  password: Yup.string()
    .required('Campo obrigatório')
    .min(6, 'A senha deve conter no minimo 6 caracteres'),
});
