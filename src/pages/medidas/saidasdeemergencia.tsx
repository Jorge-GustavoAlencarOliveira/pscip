import React from 'react';
import Numerodesaidas from '../../../Bases/NumeroSaidas/numerodesaidas';
import { useRouter } from 'next/router';
import CalculoSaidas from '../../../Bases/SaidadeEmergencia/Saidas';
import Pavimento from '../../../Bases/SaidadeEmergencia/pavimento';
import Layout from '../../../Components/layout';
import ProtectedRoute from '../../../Components/ProtectedRoute/ProtectedRouter';

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
