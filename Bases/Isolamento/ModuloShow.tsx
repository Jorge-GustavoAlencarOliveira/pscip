import React from 'react';
import { moduloProps } from './IsolamentoReducer';
import Modulo from './Modulo';
import { Table } from 'react-bootstrap';
import PdfIsolamento from '../../geradorPdf/pdfIsolamento';

interface ModuloProps {
  modulos: moduloProps[];
  onDelete: (id: number) => void;
}

const ModuloShow = ({ modulos, onDelete }: ModuloProps) => {
  return (
    <div>
      {modulos.map((item) => {
        return (
          <div key={item.id}>
            <Modulo modulo={item} onDelete={onDelete} />
            <Table striped bordered className='table-success'>
              <tbody className='fw-bold'>
                <tr>
                  <td className='w-50'>Edificação expositora</td>
                  <td>
                    {item.risco1?.distancia &&
                    item.risco2?.distancia &&
                    item.risco1?.distancia > item.risco2?.distancia
                      ? item.risco1?.risco
                      : item.risco2?.risco}
                  </td>
                </tr>
                <tr>
                  <td>Edificação em exposição</td>
                  <td>
                    {item.risco1?.distancia &&
                    item.risco2?.distancia &&
                    item.risco1?.distancia < item.risco2?.distancia
                      ? item.risco1?.risco
                      : item.risco2?.risco}{' '}
                  </td>
                </tr>
              </tbody>
            </Table>
            <button onClick={() => PdfIsolamento(item)} className='btn btn-primary btn-lg'>Gerar Memorial</button>
          </div>
        );
      })}
    </div>
  );
};

export default ModuloShow;
