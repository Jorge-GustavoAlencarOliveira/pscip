import React from 'react';
import { moduloProps } from './BrigadaReducer';
import TabelaBrigada from './TabelaBrigada';
import { Table } from 'react-bootstrap';
import { divisao } from '../NumeroSaidas/TabelaNumeroSaidas';

interface ModuloProps {
  modulo: moduloProps;
  onDelete: (id: number) => void;
}

const Modulo = ({ modulo, onDelete }: ModuloProps) => {
  const { divisao, tabelaBrigada } = TabelaBrigada();
  if (typeof modulo.divisao === 'number') {
    const descricao = tabelaBrigada[modulo.divisao].descricao;
    return (
      <div>
        <button className='btn btn-secondary float-end my-2' onClick={() => onDelete(modulo.id)}>
          Excluir
        </button>
        <Table striped bordered hover className="table-primary">
          <thead>
            <tr>
              <th>Pavimento:</th>
              <th>{modulo.pavimento}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Divisão</td>
              <td>{divisao[modulo.divisao]}</td>
            </tr>
            <tr>
              <td>População fixa</td>
              <td>{modulo.populacao}</td>
            </tr>
            <tr>
              <td>Numero de Brigadistas</td>
              <td>{modulo.brigadistas}</td>
            </tr>
            <tr>
              <td>Nivel de Treinamento exigido</td>
              <td>{tabelaBrigada[modulo.divisao].exigido}</td>
            </tr>
            <tr>
              <td>Nivel de Treinamento recomendado:</td>
              <td>{tabelaBrigada[modulo.divisao].recomendado}</td>
            </tr>
          </tbody>
        </Table>
        {descricao?.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </div>
    );
  }
  return null;
};

export default Modulo;
