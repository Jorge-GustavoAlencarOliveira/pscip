import React from 'react';
import { RegiaomoduloProps } from './regiaoReducer';
import TabelaDescricao from '../../Tabelas/tabelaDescricao';
import { Table } from 'react-bootstrap';
import ModalCenter from '../Modal/Modal';

type regiaoProps = {
  regioes: RegiaomoduloProps[];
  OnDelete: (id: number) => void;
};
const ShowRegioes = ({ regioes, OnDelete }: regiaoProps) => {
  const { descricao: descricao1 } = TabelaDescricao();
  const [showModalDeleteRegiao, setShowModalDeleteRegiao] =
    React.useState(false);

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
            <div key={id}>
              <button
                onClick={() => setShowModalDeleteRegiao(true)}
                className="btn btn-secondary float-end mb-2 rounded-2"
              >
                Excluir
              </button>
              <Table bordered className="text-center">
                <thead>
                  <tr>
                    <th colSpan={7} className="bg-primary-subtle text-center">
                      Região {index + 1}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="fw-bold">
                    <td>Área construída:</td>
                    <td>Área a construir</td>
                    <td>Área total</td>
                    <td>Altura</td>
                    <td>Pavimentos</td>
                    <td>Situação</td>
                    <td>Compartimentação</td>
                  </tr>
                  <tr>
                    <td>{areaConstruida} m²</td>
                    <td>{`${areaAconstruir ? areaAconstruir : 0} m²`}</td>
                    <td>{areaTotal} m²</td>
                    <td>{altura} m</td>
                    <td>{pavimentos}</td>
                    <td>{dataConstrucao}</td>
                    <td>
                      {compartimentacao === 'compartimentacaoSim'
                        ? 'Sim'
                        : 'Não compartimentada'}
                    </td>
                  </tr>
                </tbody>
                {ocupacoes.map((ocupacao, index1) => {
                  const { cargaincendio, descricao, divisao } =
                    descricao1[ocupacao[0]][ocupacao[1]][ocupacao[2]];
                  return (
                    <tbody key={index1}>
                      <tr>
                        <td
                          className="text-center bg-primary-subtle"
                          colSpan={7}
                        >
                          Ocupação {index1 + 1}
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={3}>Divisão</td>
                        <td colSpan={3}>Descrição</td>
                        <td>Carga incêndio</td>
                      </tr>
                      <tr>
                        <td colSpan={3}>{divisao}</td>
                        <td colSpan={3}>{descricao}</td>
                        <td>{cargaincendio} MJ/m²</td>
                      </tr>
                    </tbody>
                  );
                })}
              </Table>
              <ModalCenter
                show={showModalDeleteRegiao}
                onHide={() => setShowModalDeleteRegiao(false)}
                size="sm"
              >
                <div>
                  <span>Deseja realmente excluir essa região?</span>
                  <div className='d-flex gap-2 justify-content-end mt-3'>
                    <button
                      onClick={() => {
                        OnDelete(id);
                        setShowModalDeleteRegiao(false);
                      }}
                      className="btn btn-success"
                    >
                      Sim
                    </button>
                    <button onClick={() => setShowModalDeleteRegiao(false)} className="btn btn-danger">Não</button>
                  </div>
                </div>
              </ModalCenter>
            </div>
          );
        })}
      </>
    );
  }
  return null;
};

export default ShowRegioes;
