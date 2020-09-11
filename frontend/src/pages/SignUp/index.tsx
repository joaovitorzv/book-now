import React, { useState } from 'react';

import * as Yup from 'yup';
import { Formik, Field, Form, FormikProps } from 'formik';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';
import { Input, BlackButton, Anchor, ErrorText } from '../../GlobalStyles';

import Header from '../../components/Header';
import { KeyboardArrowRight } from '@styled-icons/material-sharp/KeyboardArrowRight'

import { IFormStatus, formStatusProps } from '../../types/IFormStatus';

import api from '../../apis/api';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatorio'),
  email: Yup.string()
    .email('Digite um email válido')
    .required('Email obrigatorio'),
  password: Yup.string().required('Senha obrigatoria'),
});

interface IFormValues {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const [displayFormStatus, setDisplayFormStatus] = useState(false);
  const [formStatus, setFormStatus] = useState<IFormStatus>({
    message: '',
    type: '',
  });

  const history = useHistory();

  const handleSumbit = async (data: IFormValues, setSubmitting: Function) => {
    try {
      await api.post('/users', {
        name: data.name,
        email: data.email,
        password: data.password
      });

      history.push('/');
    } catch (error) {
      setFormStatus(formStatusProps.invalidEmail);
      setDisplayFormStatus(true);
      setSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          onSubmit={(values: IFormValues, actions) => {
            handleSumbit(values, actions.setSubmitting)
          }}
          validationSchema={validationSchema}
        >
          {(props: FormikProps<IFormValues>) => {
            const {
              touched,
              errors,
              isSubmitting,
            } = props
            return (
              <Form>
                <div className="inputs">
                  <h2>Entre na sua conta</h2>
                  <Field
                    name="name"
                    placeholder="Nome completo"
                    type="text"
                    as={Input}
                  />
                  {errors.name && touched.name && <ErrorText>{errors.name}</ErrorText>}

                  <Field
                    name="email"
                    placeholder="Email"
                    type="email"
                    as={Input}
                  />
                  {errors.email && touched.email && <ErrorText>{errors.email}</ErrorText>}

                  <Field
                    name="password"
                    placeholder="Senha"
                    type="password"
                    as={Input}
                  />
                  {errors.password && touched.password && <ErrorText>{errors.password}</ErrorText>}
                  {displayFormStatus && <ErrorText>{formStatus.message}</ErrorText>}
                </div>

                <div className="form-actions">
                  <BlackButton disabled={isSubmitting} type="submit">
                    {isSubmitting ? "Criando..." : "Criar"} <KeyboardArrowRight size={30} />
                  </BlackButton>
                  <Anchor to="/login">
                    <span>Já tenho uma conta</span>
                  </Anchor>
                </div>
              </Form>
            )
          }}
        </Formik>
      </Container>
    </>
  );
}

export default SignUp;