import React from 'react';
import TabelaDescricao from '../Tabelas/tabelaDescricao';
import { listaOcupacao } from '../Ocupacoes/ListaOcupacoes';
import ListaMedidas from '../Bases/GerenciarMedidas/listaMedidas';
import { useContextProjeto } from '../projeto/Context/contextProjeto';
import { cleanNumberInteiro } from '../Bases/formatarNumero';

const Result = () => {
  const { descricao: descricao1 } = TabelaDescricao();
  const { valoresOcupacao, informations } = useContextProjeto();
  
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
            {compartimentacao === 'compartimentacaoNao' && (
              <div key={id}>
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