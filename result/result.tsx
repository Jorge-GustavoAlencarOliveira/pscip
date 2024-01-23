import React from 'react';
import { DataStorage } from '../dataContext';
import TabelaDescricao from '../Tabelas/tabelaDescricao';
import { listaOcupacao } from '../Ocupacoes/ListaOcupacoes';
import { setupAPIClient } from '@/services/api';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import { Table } from 'react-bootstrap';
import ListaMedidas from '../Bases/GerenciarMedidas/listaMedidas';
import { useContextProjeto } from '../projeto/Context/contextProjeto';
import { cleanNumberInteiro } from '../Bases/formatarNumero';

const Result = () => {
  const { descricao: descricao1 } = TabelaDescricao();
  const { valoresOcupacao, informations } = useContextProjeto();
  const router = useRouter();
  const { id } = router.query;
  const pathname = usePathname();

  // async function handleCreateProject() {
  //   if (pathname.startsWith('/projeto')) {
  //     try {
  //       const api = setupAPIClient();
  //       await api.post('/project', {
  //         name: informations.projeto,
  //         dados: informations,
  //         edificacao: valoresOcupacao,
  //       });
  //       toast.success('Projeto salvo com sucesso');
  //       router.push('/dashboard');
  //     } catch (err) {
  //       console.log(err);
  //       toast.error('Seja premium para salvar mais este projeto');
  //     }
  //   } else {
  //     try {
  //       const api = setupAPIClient();
  //       await api.put('/project/update', {
  //         id: id,
  //         name: informations.projeto,
  //         dados: informations,
  //         edificacao: valoresOcupacao,
  //       });
  //       toast.success('Projeto atualizado com sucesso');
  //       router.push('/meusprojetos');
  //     } catch (err) {
  //       console.log(err);
  //       toast.error('Erro ao atualizar projeto');
  //     }
  //   }
  // }

  

  function compartimentacaoCheck(): string[] {
    const medidasFinal = [];
    valoresOcupacao?.map(({ id, dados }) => {
      const { altura, areaTotal, dataConstrucao, compartimentacao } = dados[0];
      if (compartimentacao === 'compartimentacaoNao') {
        dados[1].map((item1) => {
          const { divisao, cargaincendio } =
            descricao1[item1[0]][item1[1]][item1[2]];
          const medidas =
            divisao in listaOcupacao &&
            listaOcupacao[divisao](
              cleanNumberInteiro(altura),
              areaTotal.toString(),
              cargaincendio,
              valoresOcupacao.length,
              dataConstrucao,
            );
          medidas.map((item) => medidasFinal.push(item));
        });
      }
    });
    return [...new Set(medidasFinal)];
  }

  return (
    <>
      {valoresOcupacao?.map(({ id, dados }, index) => {
        const {
          altura,
          areaTotal,
          dataConstrucao,
          compartimentacao,
          areaAconstruir,
          areaConstruida,
          pavimentos,
        } = dados[0];
        return (
          <>
            {/* {compartimentacao === 'compartimentacaoSim' && (
              <div>
                {valoresOcupacao.length > 1 && <h1>Risco {index + 1}</h1>}
                {dados[1].map((item1, index1) => {
                  const { divisao, cargaincendio, descricao } =
                    descricao1[item1[0]][item1[1]][item1[2]];
                  const medidas =
                    divisao in listaOcupacao &&
                    listaOcupacao[divisao](
                      cleanNumberInteiro(altura),
                      areaTotal.toString(),
                      cargaincendio,
                      valoresOcupacao.length,
                      dataConstrucao,
                    );
                  return (
                    <div key={index1}>
                      <p>Divisão: {divisao}</p>
                      <p>Descrição: {descricao}</p>
                      <p>Carga incêndio: {item1[3] || cargaincendio} MJ/m²</p>
                        <p>Área construída: {areaConstruida} m²</p>
                        <p>
                          Área a construir:{' '}
                          {`${areaAconstruir ? areaAconstruir : 0} m²`}
                        </p>
                        <p>Área total: {areaTotal} m²</p>
                        <p>Altura: {altura} m</p>
                        <p>Pavimentos: {pavimentos}</p>
                        <p>Situação: {dataConstrucao}</p>
                        <p>Compartimentação: Sim</p>
                      <div>
                        {medidas && (
                          <ShowMedidas
                            medidas={medidas}
                            dados={dados[0]}
                            divisao={item1}
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )} */}
            {compartimentacao === 'compartimentacaoNao' && (
              <div>
                <ListaMedidas medidas={compartimentacaoCheck()}/>
              </div>
            )}
          </>
        );
      })}
    
    </>
  );
};

export default Result;


   {/* {valoresOcupacao.length > 1 && <h1>Região {index + 1}</h1>}
                {dados[1].map((item1, index1) => {
                  const { divisao, cargaincendio, descricao } =
                    descricao1[item1[0]][item1[1]][item1[2]];
                  return (
                    <div key={index1}>
                      <Table className='text-center' striped='columns'>
                        <thead>
                          <tr className='table-primary'>
                            <th colSpan={10}>Risco {index + 1}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Divisão</td>
                            <td>Descrição</td>
                            <td>Carga incêndio</td>
                            <td>Área construída</td>
                            <td>Área a construir</td>
                            <td>Área total</td>
                            <td>Altura</td>
                            <td>Pavimentos</td>
                            <td>Situação</td>
                            <td>Compartimentação</td>
                          </tr>
                          <tr>
                            <td>{divisao}</td>
                            <td>{descricao}</td>
                            <td>{item1[3] || cargaincendio} MJ/m²</td>
                            <td>{areaConstruida} m²</td>
                            <td>{`${
                              areaAconstruir ? areaAconstruir : 0
                            } m²`}</td>
                            <td>{areaTotal} m²</td>
                            <td>{altura}</td>
                            <td>{pavimentos}</td>
                            <td>{dataConstrucao}</td>
                            <td>Não</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  );
                })} */}
                {/* <ShowMedidas
                  medidas={compartimentacaoCheck()}
                  dados={dados[0]}
                  ocupacoes={dados[1]}
                /> */}

                  {/* <div>
        <div>
          <button
            onClick={handleCreateProject}
            className="btn btn-primary float-end"
          >
            {pathname.startsWith('/projeto')
              ? 'Salvar projeto'
              : 'Atualizar projeto'}
          </button>
        </div>
        <div>
          <button
            className="btn btn-primary"
            onClick={() => router.push('/quadroinformativo')}
          >
            Quadro informativo
          </button>
        </div>
      </div> */}