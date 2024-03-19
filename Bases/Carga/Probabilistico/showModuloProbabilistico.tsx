import React from 'react';
import { ModuloMetodoProbabilistico } from './useReducerProbabilistico';
import { useProbabilistico } from './useMetodoProbabilistico';
import { numberFormat } from '../Deterministico/useDeterministico';
import { Table } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';

type showModuloProps = {
  modulos: ModuloMetodoProbabilistico[];
  onDelete: (id: number) => void;
};

const ShowModuloProbabilistico = ({ modulos, onDelete }: showModuloProps) => {
  const { formatModulos } = useProbabilistico();
  const cargaFinal = formatModulos(modulos);
  if (modulos.length > 0) {
    return (
      <div className="d-flex flex-column bg-light px-2 py-3 rounded-3">
        {modulos.map(({ id, material, altura, resultado }, index) => {
          return (
            <div className="d-flex">
              <Table bordered key={id} className='table table-success table-striped text-center'>
                <thead>
                  <tr>
                    <th colSpan={2}>
                      Módulo {index + 1}
                    </th>
                  </tr>
                </thead>
                <tbody >
                  <tr>
                    <td >Material</td>
                    <td>{material}</td>
                  </tr>
                  <tr>
                    <td >Altura</td>
                    <td>{numberFormat(+altura)} metros</td>
                  </tr>
                  <tr>
                    <td >Carga incêndio</td>
                    <td>{numberFormat(resultado)} MJ/m²</td>
                  </tr>
                </tbody>
              </Table>
              <div>
                <button className="btn btn-secondary ms-2" onClick={() => onDelete(id)}>
                  Excluir
                </button>
              </div>
            </div>
          );
        })}
        <span className="fs-5 fw-bold text-center bg-success text-light rounded-3">
          Carga incêndio adotada: {numberFormat(cargaFinal?.resultado)} MJ/m2
        </span>
      </div>
    );
  }
  return null;
};

export default ShowModuloProbabilistico;
