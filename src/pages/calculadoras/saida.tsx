import React from 'react'
import canSSRAuth from '../utils/canSSRAuth';
import Pavimento from '../../../Bases/SaidadeEmergencia/pavimento';
import Layout from '../../../Components/layout';

const SaidaPage = () => {
  return (
    <>
      <Layout>
        <Pavimento/>
      </Layout>
    </>
  )
}

export default SaidaPage

export const getServerSideProps = canSSRAuth(async () => {
  return {
    props: {},
  };
});