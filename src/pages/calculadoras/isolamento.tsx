import React from 'react';
import canSSRAuth from '../utils/canSSRAuth';
import Layout from '../../../Components/UI/layout';
import Isolamento from '../../../Bases/Isolamento/Isolamento';

const IsolamentoPage = () => {
  return (
    <Layout>
      <Isolamento />
    </Layout>
  );
};

export default IsolamentoPage;

export const getServerSideProps = canSSRAuth(async () => {
  return {
    props: {},
  };
});
