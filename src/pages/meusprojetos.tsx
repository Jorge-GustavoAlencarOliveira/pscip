import React from 'react';
import Layout from '../../Components/layout';
import { setupAPIClient } from '@/services/api';
import canSSRAuth  from './utils/canSSRAuth';
import ItemProject from '../../Components/ListProjects/itemProject';

interface ListProjectsProps {
  id: string;
  name: string;
  status: boolean;
  dados: unknown
}

interface  MeusProjetosProps{
  list: ListProjectsProps[];
  count: number
}

const Meusprojetos = ({list, count}: MeusProjetosProps) => {
  return (
    <>
      <Layout>
        <div className='my-3'>
          {count === 0 ? <h3 >Você não possui projetos</h3> : <h3>Você possui {count} projeto(s):</h3>}
        </div>
          {list?.map((item) => {
            return <ItemProject key={item.id} name={item.name} id={item.id}/>
          })}
      </Layout>
    </>
  );
};

export default Meusprojetos;

export const getServerSideProps = canSSRAuth(async (ctx) => {
  try {
    const api = setupAPIClient(ctx);
    const response = await api.get('/projects');
    const count = await api.get('/projects/count')
    return { props: 
      { list: response.data,
        count: count.data 
      }
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



