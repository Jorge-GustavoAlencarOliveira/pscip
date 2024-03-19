import React from 'react';
import { moduloProps } from './BrigadaReducer';
import {tabelaBrigada} from './TabelaBrigada';
import { Table } from 'react-bootstrap';
import { divisao } from '../NumeroSaidas/TabelaNumeroSaidas';

interface ModuloProps {
  modulo: moduloProps;
  onDelete: (id: number) => void;
}

const Modulo = ({ modulo, onDelete }: ModuloProps) => {
  const {pavimento, divisao: div, populacao, brigadistas} = modulo
    return (
      <div>
        <button className='btn btn-secondary float-end my-2' onClick={() => onDelete(modulo.id)}>
          Excluir
        </button>
        <Table striped bordered hover className="table-primary">
          <thead>
            <tr>
              <th>Pavimento:</th>
              <th>{pavimento}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Divisão</td>
              <td>{divisao[div]}</td>
            </tr>
            <tr>
              <td>População fixa</td>
              <td>{populacao}</td>
            </tr>
            <tr>
              <td>Numero de Brigadistas</td>
              <td>{brigadistas}</td>
            </tr>
            <tr>
              <td>Nivel de Treinamento exigido</td>
              <td>{tabelaBrigada[div].exigido}</td>
            </tr>
            <tr>
              <td>Nivel de Treinamento recomendado:</td>
              <td>{tabelaBrigada[div].recomendado}</td>
            </tr>
          </tbody>
        </Table>
 
      </div>
    );
  }


export default Modulo;
