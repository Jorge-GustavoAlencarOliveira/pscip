import React from 'react';
import Link from 'next/link';
import styles from '../home.module.css';
import { Form, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { DataStorage } from '../../../dataContext';
import { toast } from 'react-toastify';
import { canSSRGuest } from '../utils/canSSRGuest'; 

const SignUp = () => {
  const router = useRouter();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [endereco, setEndereco] = React.useState('');

  const {login, userSignUp} = React.useContext(DataStorage)
  if(login){
    router.push('/dashboard')
  }
  async function handleSignUp(){
    if(name === '' || email === '' || password === '' || cpf === ''){
       return toast.info('Preencha todos os campos')
    }
    await userSignUp({
      name, email, password, cpf
    })
  }
  return (
    <div
      className={`d-flex justify-content-center align-items-center ${styles.App}`}
    >
      <div className="w-50">
        <h1 className="text-center">LOGOTIPO</h1>
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="" onChange={({target}) => setName(target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="" onChange={({target}) => setEmail(target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="" onChange={({target}) => setPassword(target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
            <Form.Label>CPF</Form.Label>
            <Form.Control type="text" placeholder="" onChange={({target}) => setCpf(target.value)}/>
          </Form.Group>
          <Button onClick={handleSignUp} className="w-100 mt-2">Criar cadastro</Button>
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