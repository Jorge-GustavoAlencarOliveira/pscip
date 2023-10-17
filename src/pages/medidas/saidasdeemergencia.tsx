import React from 'react';
import Numerodesaidas from '../../../Bases/NumeroSaidas/numerodesaidas';
import { useRouter } from 'next/router';
import Pavimento from '../../../Bases/SaidadeEmergencia/pavimento';
import Layout from '../../../Components/layout';

const SaidasdeemergenciaPage = () => {
  const router = useRouter();
  const { altura, ocupacao } = router.query;

  return (
    <Layout>
      {/* <Numerodesaidas ocupacao={ocupacao} altura='12'/> */}
      <Pavimento />
    </Layout>
  );
};

export default SaidasdeemergenciaPage;
