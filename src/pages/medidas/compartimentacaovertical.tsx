import React from 'react';
import CompartimentacaoMaxima from '../../../Bases/Compartimentacao/compartimentacaoMaxima';
import Layout from '../../../Components/UI/layout';
import canSSRAuth from '../utils/canSSRAuth';

const CompartimetacaoverticalPage = () => {
  return (
    <Layout>
      <CompartimentacaoMaxima />
    </Layout>
  );
};

export default CompartimetacaoverticalPage;

export const getServerSideProps = canSSRAuth(async () => {
  return {
    props: {},
  };
});
