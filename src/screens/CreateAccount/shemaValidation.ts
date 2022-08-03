import * as Yup from 'yup';

export const shemaValidation = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório'),
  email: Yup.string().required('Campo obrigatório'),
  cellphone: Yup.string().required('Campo obrigatório'),
  password: Yup.string()
    .required('Campo obrigatório')
    .min(6, 'A senha deve conter no minimo 6 caracteres'),
  password_verify: Yup.string()
    .required('Campo obrigatório')
    .test('senha-match', 'As senhas devem ser iguais', function (value) {
      return this.parent.password === value;
    }),
});
