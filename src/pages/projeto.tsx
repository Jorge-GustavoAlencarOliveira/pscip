import React from 'react';
import Layout from '../../Components/layout';
import Navbar from '../../projeto/Navbar/navbar';
import InformacoesProjeto from '../../projeto/Abas/informacoesProjeto';
import RegioesOcupacoes from '../../projeto/Abas/regioesOcupacoes';
import MedidasSeguranca from '../../projeto/Abas/medidasSeguranca';
import canSSRAuth from './utils/canSSRAuth';
import RiscosEspeciais from '../../projeto/Abas/riscosEspeciais';
import NivelDeRisco from '../../projeto/Abas/niveldeRisco';
import DimensionamentoMedidasDeSeguranca from '../../projeto/Abas/dimensionamento';
import GerenciamentoProjeto from '../../projeto/Abas/gerenciamento';
import ContextProjeto from '../../projeto/Context/contextProjeto';

const Projeto = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  function onShow(index: number) {
    setActiveIndex(index);
  }

  return (
    <Layout>
      <div className="h-100 bg-light p-sm-2 rounded-2">
        <ContextProjeto>
          <Navbar activeIndex={activeIndex} onshow={onShow} />
          <InformacoesProjeto onshow={onShow} isActive={activeIndex === 0} />
          <RegioesOcupacoes onshow={onShow} isActive={activeIndex === 1} />
          <RiscosEspeciais onshow={onShow} isActive={activeIndex === 2} />
          <NivelDeRisco onshow={onShow} isActive={activeIndex === 3} />
          <MedidasSeguranca onshow={onShow} isActive={activeIndex === 4} />
          <DimensionamentoMedidasDeSeguranca
            onshow={onShow}
            isActive={activeIndex === 5}
          />
          <GerenciamentoProjeto isActive={activeIndex === 6} />
        </ContextProjeto>
      </div>
    </Layout>
  );
};

export default Projeto;

export const getServerSideProps = canSSRAuth(async () => {
  return {
    props: {},
  };
});
