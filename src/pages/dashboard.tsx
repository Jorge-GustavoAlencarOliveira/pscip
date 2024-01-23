import React from 'react';
import Layout from '../../Components/layout';
import canSSRAuth from './utils/canSSRAuth';
import Meusprojetos from '../../Components/MeusProjetos/meusProjetos';

export default function Home() {
  return (
    <>
      <Layout>
        <Meusprojetos />
      </Layout>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async () => {
  return {
    props: {},
  };
});
