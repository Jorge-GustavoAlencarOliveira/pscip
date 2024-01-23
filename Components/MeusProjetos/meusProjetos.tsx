import React from 'react';
import ItemProject from '../ListProjects/itemProject';
import Table from 'react-bootstrap/Table';
import { api } from '@/services/apiClient';
import Link from 'next/link';
import Loading from '../Loading/loading';

interface ListProjectsProps {
  id: string;
  name: string;
  status: boolean;
  dados: unknown;
}

const Meusprojetos = () => {
  const [listProjects, setListProjects] = React.useState<ListProjectsProps[] | null>(null);
  const [count, setCount] = React.useState<number | null>(null);
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    async function listProject() {
      try {
        setLoading(true)
        const response = await api.get('/projects');
        const responde1 = await api.get('/projects/count');
        setListProjects(response.data)
        setCount(responde1.data)
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false)
      }
    }
    listProject()
  },[])

  function uptadeList(id: string) {
    const newList = listProjects.filter((item) => item.id !== id);
    setListProjects(newList);
    setCount(count - 1)
  }

  if(loading){
    return(
      <Loading/>
    )
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h3 className='text-primary'>Meus Projetos</h3>
          <p>
            {count === 0
              ? 'Você ainda não possui projetos'
              : `Você possui um total de ${count} projeto(s)`}
          </p>
        </div>
        <div>
          <Link href='/projeto'>
            <button className='btn btn-primary'
            >
              Iniciar um novo projeto
            </button>
          </Link>
        </div>
      </div>
      {count > 0 && (
        <Table responsive className="border-top border-200 my-2">
          <thead>
            <tr>
              <th className="white-space-nowrap" style={{ width: '50%' }}>
                NOME DO PROJETO
              </th>
              <th className="text-center" style={{ width: '20%' }}>
                DATA DE CRIAÇÃO
              </th>
              <th className="text-center" style={{ width: '20%' }}>
                STATUS
              </th>
              <th style={{ width: '10%' }}></th>
            </tr>
          </thead>
          <tbody>
            {listProjects && listProjects.map((item) => {
              return (
                <ItemProject
                  key={item.id}
                  name={item.name}
                  id={item.id}
                  uptadeList={() => uptadeList(item.id)}
                />
              );
            })}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default Meusprojetos;

