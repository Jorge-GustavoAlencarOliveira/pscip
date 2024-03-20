import React from 'react';
import Layout from '../../../Components/layout';
import Navbar from '../../../projeto/Navbar/navbar';
import InformacoesProjeto from '../../../projeto/Abas/informacoesProjeto';
import RegioesOcupacoes from '../../../projeto/Abas/regioesOcupacoes';
import MedidasSeguranca from '../../../projeto/Abas/medidasSeguranca';
import canSSRAuth from '../utils/canSSRAuth';
import RiscosEspeciais from '../../../projeto/Abas/riscosEspeciais';
import NivelDeRisco from '../../../projeto/Abas/niveldeRisco';
import DimensionamentoMedidasDeSeguranca from '../../../projeto/Abas/dimensionamento';
import GerenciamentoProjeto from '../../../projeto/Abas/gerenciamento';
import ContextProjeto from '../../../projeto/Context/contextProjeto';
import { setupAPIClient } from '@/services/api';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

const Projeto = ({project}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  function onShow(index: number) {
    setActiveIndex(index);
  }
  return (
    <Layout>
      <div className="h-100 bg-light p-sm-2 rounded-2">
        <ContextProjeto project={project}>
          <Navbar activeIndex={activeIndex} onshow={onShow} />
          <InformacoesProjeto onshow={onShow} isActive={activeIndex === 0}/>
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

export const getServerSideProps: GetServerSideProps = canSSRAuth(async (ctx) => {
  const {id} = ctx.params
  try{
    const api = setupAPIClient(ctx)
    const project = await api.get('/project/details', {
      params: {
        id: id
      }
    }) 
    console.log(project.data);
    return {
      props: {
        project: project.data
      },
    };
  }catch(error){
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false
      }
    }
  }
});
