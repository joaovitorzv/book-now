export interface IFormStatus {
  message: string;
  type: string;
}

export interface IFormStatusProps {
  [key: string]: IFormStatus;
}

export const formStatusProps: IFormStatusProps = {
  invalidEmail: {
    message: 'Email já cadastrado',
    type: 'success'
  },
  invalid: {
    message: 'Credenciais invalidas, tente novamente',
    type: 'error',
  },
  error: {
    message: 'Algo deu errado, tente novamente',
    type: 'error'
  },
}