import React from 'react';
import { ocupacaoModulosProps } from './ocupacaoReducer';
import TabelaDescricao from '../../Tabelas/tabelaDescricao';
import TabelaOcupacao from '../../Tabelas/tabelaOcupacao';
import { Table } from 'react-bootstrap';

type ModuloProps = {
  modulo: ocupacaoModulosProps;
  onDelete: (id: number) => void;
  index: number;
};

const ShowModuloOcupacao = ({ modulo, onDelete, index }: ModuloProps) => {
  const { descricao } = TabelaDescricao();
  const { ocupacao } = TabelaOcupacao();
  const dado =
    descricao[modulo.ocupacao[0]][modulo.ocupacao[1]][modulo.ocupacao[2]];
  return (
    <div className="d-flex mb-4 pt-3 gap-3">
      <Table bordered className="text-center ">
        <thead>
          <tr>
            <th className="bg-primary-subtle" colSpan={4}>
              Ocupação {index + 1}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="w-25 fw-bold">Ocupação</td>
            <td className="w-25 fw-bold">Divisão</td>
            <td className="w-25 fw-bold">Descrição</td>
            <td className="w-25 fw-bold">Carga incêndio</td>
          </tr>
          <tr>
            <td>{ocupacao[modulo.ocupacao[0]]}</td>
            <td>{dado?.divisao}</td>
            <td>{dado?.descricao}</td>
            <td>{dado?.cargaincendio} MJ/m²</td>
          </tr>
        </tbody>
      </Table>
      <div>
        <button
          className="btn btn-secondary float-end mb-3"
          onClick={() => onDelete(modulo.id)}
        >
          Excluir
        </button>
      </div>
    </div>
  );
};

export default ShowModuloOcupacao;
