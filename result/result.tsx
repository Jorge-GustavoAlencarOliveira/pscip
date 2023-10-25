import React from 'react';
import { DataStorage } from '../dataContext';
import TabelaDescricao from '../Tabelas/tabelaDescricao';
import { listaOcupacao } from '../Ocupacoes/ListaOcupacoes';
import ShowMedidas from './showMedidas';
import { setupAPIClient } from '@/services/api';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

const Result = () => {
  const { descricao: descricao1 } = TabelaDescricao();
  const { valoresOcupacao, informations } = React.useContext(DataStorage);
  const router = useRouter();
  const { id } = router.query;
  const pathname = usePathname();


  async function handleCreateProject() {
    if (pathname.startsWith('/projeto')) {
      try {
        const api = setupAPIClient();
        await api.post('/project', {
          name: informations.projeto,
          dados: informations,
          edificacao: valoresOcupacao,
        });
        toast.success('Projeto salvo com sucesso');
        router.push('/meusprojetos');
      } catch (err) {
        console.log(err);
        toast.error('Seja premium para salvar mais este projeto');
      }
    } else {
      try {
        const api = setupAPIClient();
        await api.put('/project/update', {
          id: id,
          name: informations.projeto,
          dados: informations,
          edificacao: valoresOcupacao,
        });
        toast.success('Projeto atualizado com sucesso');
        router.push('/meusprojetos');
      } catch (err) {
        console.log(err);
        toast.error('Erro ao atualizar projeto');
      }
    }
  }

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
            typeof altura === 'string' &&
            areaTotal &&
            typeof dataConstrucao === 'string' &&
            listaOcupacao[divisao](
              altura,
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
            {compartimentacao === 'compartimentacaoSim' && (
              <div>
                {valoresOcupacao.length > 1 && <h1>Risco {index + 1}</h1>}
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
                      valoresOcupacao.length,
                      dataConstrucao,
                    );
                  return (
                    <div key={index1}>
                      <p>Divisão: {divisao}</p>
                      <p>Descrição: {descricao}</p>
                      <p>Carga incêndio: {item1[3] || cargaincendio} MJ/m²</p>
                      <div>
                        {medidas && (
                          <ShowMedidas medidas={medidas} dados={dados[0]} divisao={item1}/>
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
                <p>Compartimentação: Sim</p>
              </div>
            )}
            {compartimentacao === 'compartimentacaoNao' && (
              <div>
                {valoresOcupacao.length > 1 && <h1>Risco {index + 1}</h1>}
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
                <ShowMedidas
                  medidas={compartimentacaoCheck()}
                  dados={dados[0]}
                  ocupacoes={dados[1]}
                />
                <p>Área construída: {areaConstruida} m²</p>
                <p>
                  Área a construir:{' '}
                  {`${areaAconstruir ? areaAconstruir : 0} m²`}
                </p>
                <p>Área total: {areaTotal} m²</p>
                <p>Altura: {altura} m</p>
                <p>Pavimentos: {pavimentos}</p>
                <p>Situação: {dataConstrucao}</p>
                <p>Compartimentação: Não</p>
              </div>
            )}
          </>
        );
      })}
      <div>
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
      </div>
    </>
  );
};

export default Result;
