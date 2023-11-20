import React from 'react';
import Layout from '../../Components/layout';
import { useRouter } from 'next/router';
import canSSRAuth from './utils/canSSRAuth';
import Isolamento from '../../Bases/Isolamento/Isolamento';
import Brigada from '../../Bases/Brigada/Brigada';
import NivelDeRisco from '../../Bases/NiveldeRisco';

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
          {/* <Isolamento />
          <Brigada /> */}
          <NivelDeRisco/>
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
