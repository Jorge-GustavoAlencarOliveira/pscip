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
    <div className='py-5'>
      {modulos.map((item) => {
        return (
          <div key={item.id} className='pb-5'>
            <Modulo modulo={item} onDelete={onDelete} />
            <Table striped bordered className='table'>
              <tbody>
                <tr>
                  <td className='w-50 fw-bold'>Edificação expositora</td>
                  <td>
                    {item.risco1?.distancia &&
                    item.risco2?.distancia &&
                    item.risco1?.distancia > item.risco2?.distancia
                      ? item.risco1?.risco
                      : item.risco2?.risco}
                  </td>
                </tr>
                <tr>
                  <td className='fw-bold' >Edificação em exposição</td>
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
            <div>
              <button onClick={() => PdfIsolamento(item)} className='btn btn-primary float-end'>Gerar memorial</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ModuloShow;
