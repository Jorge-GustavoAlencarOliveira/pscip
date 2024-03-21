import React from 'react';
import ItemProject from '../ListProjects/itemProject';
import Table from 'react-bootstrap/Table';
import { MyprojectsProps } from '@/pages/dashboard';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { setupAPIClient } from '@/services/api';

const Meusprojetos = ({ projects, count: projectsNumber }: MyprojectsProps) => {
  const router = useRouter();
  const listProjects = projects;
  const count = projectsNumber;

  async function createProject() {
    try{
      const api = setupAPIClient()
      const user = await api.post('/project')
      router.push(`/projeto/${user.data.id}`)
      toast.success('Projeto criado com sucesso')
    }catch(err){
      console.log(err);
    }
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h3 className="text-primary">Meus Projetos</h3>
          <p>
            {count === 0
              ? 'Você ainda não possui projetos'
              : `Você possui um total de ${count} projeto(s)`}
          </p>
        </div>
        <div>
            <button onClick={createProject} className="btn btn-primary">Iniciar um novo projeto</button>
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
            {listProjects &&
              listProjects.map((item) => {
                return (
                  <ItemProject
                    key={item.id}
                    dados={item.dados}
                    id={item.id}
                    created_at={item.created_at}
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
