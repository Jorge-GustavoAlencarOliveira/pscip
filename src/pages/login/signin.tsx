import React from 'react';
import Link from 'next/link';
import styles from '../home.module.css';
import { Form, Button } from 'react-bootstrap';
import { DataStorage } from '../../../dataContext';
import { useRouter } from 'next/router';
import {FaGoogle} from 'react-icons/fa'
import { toast } from 'react-toastify';
import  canSSRGuest  from '../utils/canSSRGuest';
const SignIn = () => {
  const router = useRouter()
  const {login, userLogin} = React.useContext(DataStorage)
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false)
  if(login){
    router.push('/dashboard')
  }
  async function handleLogin(){
    if(email === '' || password === ''){
      return toast.info('Preencha todos os campos')
    }
    try{
      setLoading(true)
      await userLogin({email, password})
    }
    catch(err){
      console.log('Erro ao logar')
    }
    finally{
      setLoading(false)
    }
  }
  return (
    <div
      className={`d-flex justify-content-center align-items-center ${styles.App}`}
    >
      <div className="w-50">
        <h1 className="text-center">LOGOTIPO</h1>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="" onChange={({target}) => setEmail(target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="" onChange={({target}) => setPassword(target.value)}/>
          </Form.Group>
          <Button disabled={loading} onClick={handleLogin} className="w-100 mt-2">Acessar</Button>
          <Button className="w-100 mt-2 d-flex justify-content-center align-items-center gap-3">
            <span>Logar com o Google</span>
            <FaGoogle size={20}/>
          </Button>
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
