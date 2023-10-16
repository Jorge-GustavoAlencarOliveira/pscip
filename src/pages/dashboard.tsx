import React from 'react';
import ProtectedRoute from '../../Components/ProtectedRoute/ProtectedRouter';
import Layout from '../../Components/layout';
import { useRouter } from 'next/router';
import canSSRAuth from './utils/canSSRAuth';
import ModuloRegiao from '../../Components/Regiao-ocupacao/moduloRegiao';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <ProtectedRoute>
        <Layout>
          <div>
            <button
              onClick={() => router.push('/projeto')}
              className="btn btn-primary my-3"
            >
              Iniciar Projeto
            </button>
          </div>
        </Layout>
      </ProtectedRoute>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
