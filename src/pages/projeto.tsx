import React from 'react';
import Layout from '../../Components/layout';
import ProtectedRoute from '../../Components/ProtectedRoute/ProtectedRouter';
import Navbar from '../../projeto/Navbar/navbar';
import InformacoesProjeto from '../../projeto/informacoesProjeto';
import DadosEdificacao from '../../projeto/dadosEdificacao';
import RegioesOcupacoes from '../../projeto/regioesOcupacoes';
import MedidasSeguranca from '../../projeto/medidasSeguranca';
import canSSRAuth from './utils/canSSRAuth';

const Projeto = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  function onShow(index: number) {
    setActiveIndex(index);
  }
  return (
    <ProtectedRoute>
      <Layout>
        <Navbar isActive={activeIndex} onshow={onShow} />
        <InformacoesProjeto onshow={onShow} isActive={activeIndex === 0} />
        {/* <DadosEdificacao onshow={onShow} isActive={activeIndex === 1} /> */}
        <RegioesOcupacoes onshow={onShow} isActive={activeIndex === 1} />
        <MedidasSeguranca isActive={activeIndex === 2} />
      </Layout>
    </ProtectedRoute>
  );
};

export default Projeto;

export const getServerSideProps = canSSRAuth(async () => {
  return {
   props: {}
  }
})