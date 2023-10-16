import React from 'react';
import { RegiaomoduloProps } from './regiaoReducer';
import TabelaDescricao from '../../Tabelas/tabelaDescricao';

type regiaoProps = {
  regioes: RegiaomoduloProps[];
  OnDelete: (id: number) => void;
};
const ShowRegioes = ({ regioes, OnDelete }: regiaoProps) => {
  const { descricao: descricao1 } = TabelaDescricao();
  if (regioes.length !== 0) {
    return (
      <>
        {regioes?.map(({ id, dados }, index) => {
          const [informacoes, ocupacoes] = dados;
          const {
            areaAconstruir,
            areaConstruida,
            areaTotal,
            pavimentos,
            altura,
            dataConstrucao,
            compartimentacao,
          } = informacoes;
          return (
            <div key={id} className="border border-secondary p-2 my-4 rounded">
              <div className="d-flex align-items-center justify-content-between">
                <h5>Região {index + 1}</h5>
                <button
                  onClick={() => OnDelete(id)}
                  className="btn btn-secondary"
                >
                  Excluir
                </button>
              </div>
              <p>Área construída: {areaConstruida} m²</p>
              <p>
                Área a construir: {`${areaAconstruir ? areaAconstruir : 0} m²`}
              </p>
              <p>Área total: {areaTotal} m²</p>
              <p>Altura: {altura} m</p>
              <p>Pavimentos: {pavimentos}</p>
              <p>Situação: {dataConstrucao}</p>
              <p>
                Compartimentação:{' '}
                {compartimentacao === 'compartimentacaoSim' ? 'Sim' : 'Não'}
              </p>
              {ocupacoes.map((ocupacao, index1) => {
                const { cargaincendio, descricao, divisao } =
                  descricao1[ocupacao[0]][ocupacao[1]][ocupacao[2]];
                return (
                  <div key={index1}>
                    <p>Ocupacao {index1 + 1}</p>
                    <p>Divisão: {divisao}</p>
                    <p>Descrição: {descricao}</p>
                    <p>Carga incêndio: {cargaincendio} MJ/m²</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </>
    );
  }
  return null;
};

export default ShowRegioes;
