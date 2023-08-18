import React from 'react';
import TabelaSaidaEmergencia from './tabelaSaidaEmergencia';
import { moduloProps } from './ModuloReducer';
import { Table } from 'react-bootstrap';
interface ModuloProps {
  modulo: moduloProps;
  onDelete: (id: number) => void;
}

const Modulo = ({ modulo, onDelete }: ModuloProps) => {
  const { divisao } = TabelaSaidaEmergencia();
  const div = modulo.divisao;
  if (typeof div === 'number') {
    return (
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center my-3">
          <h5>Ambiente: {modulo.ambiente}</h5>
          <button
            className="btn btn-secondary float-end"
            onClick={() => onDelete(modulo.id)}
          >
            Excluir
          </button>
        </div>
        <Table striped bordered hover className="table-primary">
          <thead>
            <tr className="fw-bold">
              <td className="w-50">Divisão:</td>
              <td>{divisao[div][0]}</td>
            </tr>
            {divisao[div][0] === 'A-1' || divisao[div][0] === 'A-2' ? (
              <tr>
                <td>Dormitórios:</td>
                <td>{modulo.text} unidades</td>
              </tr>
            ) : (
              <tr>
                <td>Área:</td>
                <td>{modulo.text} m²</td>
              </tr>
            )}
            {modulo.text1 && (
              <tr>
                <td>Dormitório/Leito:</td>
                <td>{modulo.text1} unidades</td>
              </tr>
            )}
          </thead>
          <tbody>
            <tr>
              <td>População:</td>
              <td>{modulo.populacao} pessoas</td>
            </tr>
            <tr>
              <td>Acessos e descargas:</td>
              <td>
                {modulo.acesso && modulo.acesso < 2 ? 2 : modulo.acesso}{' '}
                unidade(s) de passagem
              </td>
            </tr>
            <tr>
              <td>Escadas e rampas:</td>
              <td>
                {modulo.escada && modulo.escada < 2 ? 2 : modulo.escada}{' '}
                unidade(s) de passagem
              </td>
            </tr>
            <tr>
              <td>Portas:</td>
              <td>{modulo.porta} unidade(s) de passagem</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
  return null;
};

export default Modulo;
