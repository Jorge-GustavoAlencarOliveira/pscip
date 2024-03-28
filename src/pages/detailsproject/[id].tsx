import React from 'react';
import Layout from '../../../Components/UI/layout';
import useRouter from 'next/router';
import canSSRAuth from '../utils/canSSRAuth';
import { setupAPIClient } from '@/services/api';
import { Table } from 'react-bootstrap';
import TabelaDescricao from '../../../Tabelas/tabelaDescricao';
import { listaOcupacao } from '../../../Ocupacoes/ListaOcupacoes';
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

const DetailsProject = ({ project }: projectProps) => {
  const { descricao: descricao1 } = TabelaDescricao();

  return (
    <>
      <Layout>
        <Table striped bordered className="table-primary">
          <thead>
            <tr>
              <td>Nome do Projeto</td>
              <td>{project?.dados?.projeto}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Proprietário / Responsável pelo uso</td>
              <td>{project?.dados?.proprietario}</td>
            </tr>
            <tr>
              <td>CPF</td>
              <td>{project?.dados?.cpf}</td>
            </tr>
            <tr>
              <td>Razão Social</td>
              <td>{project?.dados?.razaoSocial}</td>
            </tr>
            <tr>
              <td>CNPJ</td>
              <td>{project?.dados?.cnpj}</td>
            </tr>
          </tbody>
        </Table>
        {/* {project?.edificacao?.map(({ id, dados }, index) => {
          const {
            altura,
            areaTotal,
            dataConstrucao,
            compartimentacao,
            areaAconstruir,
            areaConstruida,
            pavimentos,
          } = dados[0];
          const medidasFinal = [];
          dados[1].map((item1) => {
            const { divisao, cargaincendio } =
              descricao1[item1[0]][item1[1]][item1[2]];
            const medidas =
              divisao in listaOcupacao &&
              typeof altura === 'string' &&
              areaTotal &&
              typeof dataConstrucao === 'string' &&
              listaOcupacao[divisao](
                altura,
                areaTotal.toString(),
                cargaincendio,
                project?.edificacao.length,
                dataConstrucao,
              );
            if (medidas && compartimentacao === 'compartimentacaoNao') {
              medidas.map((item) => medidasFinal.push(item));
            }
          });
          return (
            <>
              {compartimentacao === 'compartimentacaoSim' && (
                <div key={id}>
                  {project?.edificacao.length > 1 && <h1>Risco {index + 1}</h1>}
                  {dados[1].map((item1, index1) => {
                    const { divisao, cargaincendio, descricao } =
                      descricao1[item1[0]][item1[1]][item1[2]];
                    const medidas =
                      divisao in listaOcupacao &&
                      typeof altura === 'string' &&
                      areaTotal &&
                      typeof dataConstrucao === 'string' &&
                      listaOcupacao[divisao](
                        altura,
                        areaTotal.toString(),
                        cargaincendio,
                        project?.edificacao.length,
                        dataConstrucao,
                      );
                    return (
                      <div key={index1}>
                        <p>Divisão: {divisao}</p>
                        <p>Descrição: {descricao}</p>
                        <p>Carga incêndio: {item1[3] || cargaincendio} MJ/m²</p>
                        <div>
                          {medidas && (
                          )}
                        </div>
                      </div>
                    );
                  })}
                  <p>Área construída: {areaConstruida} m²</p>
                  <p>
                    Área a construir:{' '}
                    {`${areaAconstruir ? areaAconstruir : 0} m²`}
                  </p>
                  <p>Área total: {areaTotal} m²</p>
                  <p>Altura: {altura} m</p>
                  <p>Pavimentos: {pavimentos}</p>
                  <p>Situação: {dataConstrucao}</p>
                </div>
              )}
              {compartimentacao === 'compartimentacaoNao' && (
                <div key={id}>
                  {project?.edificacao.length > 1 && <h1>Risco {index + 1}</h1>}
                  {dados[1].map((item1, index1) => {
                    const { divisao, cargaincendio, descricao } =
                      descricao1[item1[0]][item1[1]][item1[2]];
                    return (
                      <div key={index1}>
                        <p>Divisão: {divisao}</p>
                        <p>Descrição: {descricao}</p>
                        <p>Carga incêndio: {item1[3] || cargaincendio} MJ/m²</p>
                      </div>
                    );
                  })}
                  <div key={id}>
                    {medidasFinal && (
                      <ShowMedidas
                        medidas={[...new Set(medidasFinal)]}
                        dados={dados[0]}
                      />
                    )}
                  </div>
                  <p>Área construída: {areaConstruida} m²</p>
                  <p>
                    Área a construir:{' '}
                    {`${areaAconstruir ? areaAconstruir : 0} m²`}
                  </p>
                  <p>Área total: {areaTotal} m²</p>
                  <p>Altura: {altura} m</p>
                  <p>Pavimentos: {pavimentos}</p>
                  <p>Situação: {dataConstrucao}</p>
                </div>
              )}
            </>
          );
        })} */}
      </Layout>
    </>
  );
};

export default DetailsProject;

export const getServerSideProps = canSSRAuth(async (ctx) => {
  const { id } = ctx.params;
  try {
    const api = setupAPIClient(ctx);
    if (typeof id === 'string') {
      const response = await api.get('/project/details', {
        params: {
          id: id,
        },
      });
      const project = response.data;
      if (project) {
        return {
          props: { project: project },
        };
      }
      return {
        redirect: {
          destination: '/dashboard',
          permanent: false,
        },
      };
    }
  } catch (err) {
    console.log(err);
    return {
      redirect: {
        destination: '/calculadoras',
        permanent: false,
      },
    };
  }
});
