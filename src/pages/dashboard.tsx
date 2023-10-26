import React from 'react';
import Layout from '../../Components/layout';
import { useRouter } from 'next/router';
import canSSRAuth from './utils/canSSRAuth';

export default function Home() {
  const router = useRouter();
  return (
    <>
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
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
