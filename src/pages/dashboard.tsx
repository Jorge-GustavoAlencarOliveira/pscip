import Layout from '../../Components/UI/layout';
import Meusprojetos from '../../Components/MeusProjetos/meusProjetos';
import canSSRAuth from './utils/canSSRAuth';
import { setupAPIClient } from '@/services/api';
import { informacoesProps } from '../../Components/Hooks/useDados';

interface ListProjectsProps {
  id: string;
  created_at: string;
  status: boolean;
  dados: informacoesProps;
}

export type MyprojectsProps = {
  projects: ListProjectsProps[];
  count: number;
};



export default function Home({ projects, count }: MyprojectsProps) {
  return (
    <>
      <Layout>
        <Meusprojetos projects={projects} count={count} />
      </Layout>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  try {
    const api = setupAPIClient(ctx);
    const [request, request1] = await Promise.all([
      api.get('/projects?status=true'),
      api.get('/projects/count'),
    ]);

    return {
      props: {
        projects: request.data,
        count: request1.data,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      redirect: {
        destination: '/login/signin',
        permanent: false,
      },
    };
  }
});
