import React from 'react';
import Link from 'next/link';
import styles from '../home.module.css';
import { Form, Button } from 'react-bootstrap';
import { DataStorage } from '../../../dataContext';
import  canSSRGuest  from '../utils/canSSRGuest';
import { UseFormSignIn } from '../../../Components/Hooks/useFormValidation';

const SignIn = () => {
  const {userLogin} = React.useContext(DataStorage)
  const {handleSubmit, errors, isSubmitting, register } = UseFormSignIn()

  async function handleLogin({name, email, password, cpf}){   
    await userLogin({email, password})
  }
  
  return (
    <div
      className={`d-flex justify-content-center align-items-center ${styles.App}`}
    >
      <div className="w-50">
        <h1 className="text-center">LOGOTIPO</h1>
        <Form onSubmit={handleSubmit(handleLogin)}>
          <Form.Group className="mb-3" >
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" {...register('email')}/>
            {errors.email && <span style={{color: 'red'}}>{errors.email.message}</span>}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" {...register('password')}/>
            {errors.password && <span style={{color: 'red'}}>{errors.password.message}</span>}
          </Form.Group>
          <Button type='submit' disabled={isSubmitting} className="w-100 mt-2">{isSubmitting ? "Acessando" : "Acessar"}</Button>
        </Form>
        <p className="text-center mt-4">
          Você ainda não possui conta?{' '}
          <strong>
            <Link href="/login/signup">Cadastre-se</Link>
          </strong>
        </p>
      </div>
    </div>
  );
};

export default SignIn;

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {}
  }
})

{/* <Button className="w-100 mt-2 d-flex justify-content-center align-items-center gap-3">
  <span>Logar com o Google</span>
  <FaGoogle size={20}/>
</Button> */}