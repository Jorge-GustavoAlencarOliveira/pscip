import React from 'react';
import Numerodesaidas from '../../../Bases/NumeroSaidas/numerodesaidas';
import { useRouter } from 'next/router';
import Layout from '../../../Components/layout';

const SaidasdeemergenciaPage = () => {
  const router = useRouter();
  const { altura, ocupacao } = router.query;

  return (
    <Layout>
      {/* <Numerodesaidas ocupacao={ocupacao} altura='12'/> */}
    </Layout>
  );
};

export default SaidasdeemergenciaPage;
