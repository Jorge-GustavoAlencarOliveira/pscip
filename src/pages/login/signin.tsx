import React from 'react';
import Link from 'next/link';
import styles from '../home.module.css';
import { Form, Button } from 'react-bootstrap';

const SignIn = () => {
  return (
    <div
      className={`d-flex justify-content-center align-items-center ${styles.App}`}
    >
      <div className="w-50">
        <h1 className="text-center">LOGOTIPO</h1>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="*****" />
          </Form.Group>
          <Button className="w-100 mt-2">Acessar</Button>
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
