import React from 'react';
import Numerodesaidas from '../../../Bases/NumeroSaidas/numerodesaidas';
import { useRouter } from 'next/router';
import CalculoSaidas from '../../../Bases/SaidadeEmergencia/Saidas';
import Pavimento from '../../../Bases/SaidadeEmergencia/pavimento';
import Layout from '../../../Components/layout';

interface moduloProps {
  id: number;
  divisao: number;
  text: string;
  text1?: string;
}

const SaidasdeemergenciaPage = () => {
  const router = useRouter();
  const { altura, ocupacao } = router.query;
  const [modulos, setModulos] = React.useState<moduloProps[]>([]);
  let id = 1;

  if (typeof altura === 'string' && typeof ocupacao === 'string') {
    return (
      <>
        <Numerodesaidas altura={altura} ocupacao={ocupacao} />
        {/* <CalculoSaidas /> */}
      </>
    );
  }
  return (
      <Layout>
        <Pavimento />
      </Layout>
  );
};

export default SaidasdeemergenciaPage;
