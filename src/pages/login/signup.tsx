import React from 'react';
import Link from 'next/link';
import styles from '../home.module.css';
import { Form, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { DataStorage } from '../../../dataContext';
import { toast } from 'react-toastify';
import  canSSRGuest  from '../utils/canSSRGuest'; 
import { UseFormSignUp } from '../../../Components/Hooks/useFormValidation';

const SignUp = () => {
  const {handleSubmit, errors, register, isSubmitting} = UseFormSignUp()
  const {userSignUp} = React.useContext(DataStorage)

  async function handleSignUp({name, email, password, cpf}){
    setTimeout(() => {
      userSignUp({
        name, email, password, cpf
      })
    }, 3000);
  }

  return (
    <div
      className={`d-flex justify-content-center align-items-center ${styles.App}`}
    >
      <div className="w-50">
        <h1 className="text-center">LOGOTIPO</h1>
        <Form onSubmit={handleSubmit(handleSignUp)}>
          <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Nome" {...register('name')}/>
              {errors.name && <span style={{color: 'red'}}>{errors.name.message}</span>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" {...register('email')} />
              {errors.email && <span style={{color: 'red'}}>{errors.email.message}</span>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="******" {...register('password')} />
              {errors.password && <span style={{color: 'red'}}>{errors.password.message}</span>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirme sua Senha</Form.Label>
              <Form.Control type="password" placeholder="******" {...register('confirmPassword')} />
              {errors.confirmPassword && <span style={{color: 'red'}}>{errors.confirmPassword.message}</span>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>CPF</Form.Label>
              <Form.Control type="text" placeholder="" {...register('cpf')} style={errors.cpf && {border: '1px solid red'}}/>
              {errors.cpf && <span style={{color: 'red'}}>{errors.cpf.message}</span>}
            </Form.Group>
            <Button type='submit' disabled={isSubmitting} className="w-100 mt-2">{isSubmitting ? 'Cadastrando' : 'Cadastrar'}</Button>
        </Form>
        <p className="text-center mt-4">
          Você já possui conta?{' '}
          <strong>
            <Link href="/login/signin">Faça login</Link>
          </strong>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {}
  }
})