import React from 'react';
import Layout from '../../../Components/layout';
import { useRouter } from 'next/router';
import { canSSRAuth } from '../utils/canSSRAuth';
import { setupAPIClient } from '@/services/api';
import { Table } from 'react-bootstrap';
import TabelaDescricao from '../../../Tabelas/tabelaDescricao';
import { listaOcupacao } from '../../../Ocupacoes/ListaOcupacoes';
import ShowMedidas from '../../../result/showMedidas';

const DetailsProject = ({ project }) => {
  const {descricao} = TabelaDescricao()
  const [medidas1, setMedidas] = React.useState<string[][]>([]);
  
  React.useEffect(() => {
    project?.edificacao?.map((item) => {
      if (item[0].compartimentacao === 'compartimentacaoNao') {
        item[1].map((item1) => {
          const valor = descricao[item1[0]][item1[1]][item1[2]].divisao;
          const medidas =
            valor in listaOcupacao &&
            typeof item[0].altura === 'string' &&
            item[0].areaTotal &&
            typeof item[0].dataConstrucao === 'string' &&
            listaOcupacao[valor](
              item[0].altura,
              item[0].areaTotal.toString(),
              descricao[item1[0]][item1[1]][item1[2]].cargaincendio,
              project?.edificacao?.length,
              item[0].dataConstrucao,
            );
          if (medidas) {
            setMedidas((item) => [...item, medidas]);
          }
        });
      }
    });
  }, []);
  let medidasFinal: string[] = [];
  medidas1.map((item) => {
    item.map((item1) => {
      medidasFinal.push(item1);
    });
  });
  const final = [...new Set(medidasFinal)];

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
        {project?.edificacao?.map((item, index) => {
        return (
          <div key={index}>
            {project?.edificacao?.length > 1 && <h1>Risco {index + 1}</h1>}
            {item[1].map((item1, index1) => {
              const valor = descricao[item1[0]][item1[1]][item1[2]].divisao;
              const medidas =
                valor in listaOcupacao &&
                typeof item[0].altura === 'string' &&
                item[0].areaTotal &&
                typeof item[0].dataConstrucao === 'string' &&
                listaOcupacao[valor](
                  item[0].altura,
                  item[0].areaTotal.toString(),
                  descricao[item1[0]][item1[1]][item1[2]].cargaincendio,
                  project?.edificacao?.length,
                  item[0].dataConstrucao,
                );
              if (item[0].compartimentacao === 'compartimentacaoSim') {
                return (
                  <div key={index1}>
                    <p>Divisão: {valor}</p>
                    <p>
                      Descrição:{' '}
                      {descricao[item1[0]][item1[1]][item1[2]].descricao}
                    </p>
                    <p>
                      Carga incêndio:{' '}
                      {item1[3] ||
                        descricao[item1[0]][item1[1]][item1[2]]
                          .cargaincendio}{' '}
                      MJ/m²
                    </p>
                    <div>
                      {medidas && (
                        <ShowMedidas
                          medidas={medidas}
                          dados={item[0]}
                          ocupacao={valor}
                        />
                      )}
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={index1}>
                    <p>Divisão: {valor}</p>
                    <p>
                      Descrição:{' '}
                      {descricao[item1[0]][item1[1]][item1[2]].descricao}
                    </p>
                    <p>
                      Carga incêndio:{' '}
                      {item1[3] ||
                        descricao[item1[0]][item1[1]][item1[2]]
                          .cargaincendio}{' '}
                      MJ/m²
                    </p>
                  </div>
                );
              }
            })}
            <div>
              {final.length !== 0 && (
                <ShowMedidas medidas={final} dados={item[0]} ocupacoes={item[1]} />
              )}
            </div>
            <br />
            <p>Área construída: {item[0].areaConstruida} m²</p>
            <p>Área a construir: {item[0].areaAconstruir} m²</p>
            <p>Área total: {item[0].areaTotal} m²</p>
            <p>Altura: {item[0].altura} m</p>
            <p>Pavimentos: {item[0].pavimentos}</p>
            <p>Situação: {item[0].dataConstrucao}</p>
          </div>
        );
      })}
      </Layout>
    </>
  );
};

export default DetailsProject;

export const getServerSideProps = canSSRAuth(async (ctx) => {
  const { id } = ctx.params;
  try{
    const api = setupAPIClient(ctx);
    if (typeof id === 'string') {
      const response = await api.get('/project/details', {
        params: {
          id: id,
        },
      });
      const project = response.data;
      if(project){
        return {
          props: { project: project },
        };
      }
      return {
        redirect: {
          destination: '/dashboard',
          permanent: false,
        }
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
});
