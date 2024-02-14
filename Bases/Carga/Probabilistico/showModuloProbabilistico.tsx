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
      <div className="d-flex flex-column">
        {modulos.map(({ id, material, altura, resultado }, index) => {
          return (
            <div className="d-flex">
              <Table bordered key={id} className='table-secondary'>
                <thead>
                  <tr>
                    <th>
                      <span  style={{marginLeft: '50px'}}>Módulo {index + 1}</span>
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="text-center">
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
                <button className="btn" style={{marginLeft: '-50px'}} onClick={() => onDelete(id)}>
                  <FaTrash size={16} />
                </button>
              </div>
            </div>
          );
        })}
        <span className="fs-5 fw-bold text-center bg-primary text-light rounded-3">
          Carga incêndio adotada: {numberFormat(cargaFinal?.resultado)} MJ/m2
        </span>
      </div>
    );
  }
  return null;
};

export default ShowModuloProbabilistico;
