import Layout from '../../Components/UI/layout';
import Meusprojetos from '../../Components/MeusProjetos/meusProjetos';
import canSSRAuth from './utils/canSSRAuth';
import { setupAPIClient } from '@/services/api';
import { informacoesProps } from '../../Components/Hooks/useDados';
import { allDataBuildingProps } from '../../projeto/Context/contextProjeto';

type ListProjectsProps = {
  created_at: string;
  dados: informacoesProps;
  id: string
} & allDataBuildingProps

export type MyprojectsProps = {
  projects: ListProjectsProps[];
  count: number;
};

export default function Home({ projects, count }: MyprojectsProps) {
  console.log(projects);
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
  }
});
