import React from 'react';
import canSSRAuth from '../utils/canSSRAuth';
import Brigada from '../../../Bases/Brigada/Brigada';
import Layout from '../../../Components/UI/layout';

const BrigadaPage = () => {
  return (
    <>
      <Layout>
        <Brigada />
      </Layout>
    </>
  );
};

export default BrigadaPage;

export const getServerSideProps = canSSRAuth(async () => {
  return {
    props: {},
  };
});
