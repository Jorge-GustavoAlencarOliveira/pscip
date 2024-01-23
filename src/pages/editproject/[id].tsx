import React from 'react';
import Layout from '../../../Components/layout';
import Navbar from '../../../projeto/Navbar/navbar';
import InformacoesProjeto from '../../../projeto/Abas/informacoesProjeto';
import RegioesOcupacoes from '../../../projeto/Abas/regioesOcupacoes';
import MedidasSeguranca from '../../../projeto/Abas/medidasSeguranca';
import canSSRAuth from '../utils/canSSRAuth';
import { setupAPIClient } from '@/services/api';
import { informacoesProps } from '../../../Components/Hooks/useDados';
import { RegiaomoduloProps } from '../../../Components/Regiao-ocupacao/regiaoReducer';

type ProjectDetailsProps = {
  id: string;
  dados: informacoesProps;
  edificacao: RegiaomoduloProps[];
};

type projectProps = {
  project: ProjectDetailsProps;
};

const EditProject = ({ project }: projectProps) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  function onShow(index: number) {
    setActiveIndex(index);
  }
  return (
    <Layout>
      <Navbar isActive={activeIndex} onshow={onShow} />
      <InformacoesProjeto
        dados={project.dados}
        onshow={onShow}
        isActive={activeIndex === 0}
      />
      <RegioesOcupacoes
        edificacao={project.edificacao}
        onshow={onShow}
        isActive={activeIndex === 1}
      />
      <MedidasSeguranca isActive={activeIndex === 2} />
    </Layout>
  );
};

export default EditProject;

export const getServerSideProps = canSSRAuth(async (ctx) => {
  const { id } = ctx.params;
  try {
    const api = setupAPIClient(ctx);
    const response = await api.get('/project/details', {
      params: {
        id: id,
      },
    });
    return {
      props: { project: response.data },
    };
  } catch (err) {
    console.log(err);
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    };
  }
});
