import React from 'react';
import Layout from '../../../Components/layout';
import Navbar from '../../../projeto/Navbar/navbar';
import InformacoesProjeto from '../../../projeto/informacoesProjeto';
import RegioesOcupacoes from '../../../projeto/regioesOcupacoes';
import MedidasSeguranca from '../../../projeto/medidasSeguranca';
import canSSRAuth from '../utils/canSSRAuth';
import { setupAPIClient } from '@/services/api';


const EditProject = ({project}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  function onShow(index: number) {
    setActiveIndex(index);
  }
  return (
    <Layout>
      <Navbar isActive={activeIndex} onshow={onShow} />
      <InformacoesProjeto dados={project.dados} onshow={onShow} isActive={activeIndex === 0} />
      <RegioesOcupacoes edificacao={project.edificacao} onshow={onShow} isActive={activeIndex === 1} />
      <MedidasSeguranca isActive={activeIndex === 2} />
    </Layout>
  );
};

export default EditProject;


export const getServerSideProps = canSSRAuth(async(ctx) => {
  const {id} = ctx.params
  try{
    const api = setupAPIClient(ctx)
    const response = await api.get('/project/details', {
      params: {
        id: id
      }
    })
    return {
      props: { project: response.data
      }
    }
  }catch(err){
    console.log(err)
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    };
  }
}) 