import React from 'react';
import { ModuloDeterministicoProps } from './useReducerDeterministico';
import { Table } from 'react-bootstrap';
import { tabelac1 } from '../../CargaIncendio/TabelaDeterministico';
import { valorestabelac1 } from '../../CargaIncendio/TabelaDeterministico';
import { somasValores, numberFormat } from './useDeterministico';

type MemorialDeterministicoProps = {
  modulos: ModuloDeterministicoProps[];
};

const MemorialDeterministico = ({ modulos }: MemorialDeterministicoProps) => {
  return (
    <>
      <Table bordered>
        <thead className="text-center">
          <tr >
            <th style={{ backgroundColor: '#5ea3d7'}} colSpan={5}>MEMORIAL DE CÁLCULO DE CARGA DE INCÊNDIO</th>
          </tr>
        </thead>
        {modulos.map(({ id, resultado, area, materiais }, index) => {
          return (
            <tbody className="text-center" key={id}>
              <tr className="fw-bold">
                <td  colSpan={5}>Módulo {index + 1}</td>
              </tr>
              <tr>
                <td style={{ backgroundColor: '#5ea3d7'}}>ITEM</td>
                <td style={{ backgroundColor: '#5ea3d7'}}>TIPO DO MATERIAL EXISTENTE NA ÁREA CONSIDERADA</td>
                <td style={{ backgroundColor: '#5ea3d7'}}>
                  MASSA TOTAL DE CADA MATERIAL NA ÁREA CONSIDERADA Mi (Kg)
                </td>
                <td style={{ backgroundColor: '#5ea3d7'}}>POTENCIAL CALORÍFICO ESPECÍFICO Hi (MJ/Kg)</td>
                <td style={{ backgroundColor: '#5ea3d7'}}>POTENCIAL CALORÍFICO POR MATERIAL Mi x Hi (MJ)</td>
              </tr>
              {materiais.map(({ id, tipo, massa }) => {
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{tabelac1[+tipo]}</td>
                    <td>{numberFormat(+massa)}</td>
                    <td>{valorestabelac1[+tipo]}</td>
                    <td>{numberFormat(valorestabelac1[+tipo] * +massa)}</td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={3} style={{ backgroundColor: '#5ea3d7'}} >
                  Total do potencial calorífico da área considerada ΣMi x Hi
                  (MJ)
                </td>
                <td colSpan={2}>{numberFormat(somasValores(materiais))}</td>
              </tr>
              <tr>
                <td colSpan={3} style={{ backgroundColor: '#5ea3d7'}} >
                  Área considerada para o cálculo Af (m²)
                </td>
                <td colSpan={2}>{area}</td>
              </tr>
              <tr>
                <td colSpan={3} style={{ backgroundColor: '#5ea3d7'}} >
                Carga de incêndio específica da área considerada para o cálculo Qfi = Σ Mi x Hi / Af
                </td>
                <td colSpan={2}>{(somasValores(materiais)/+area).toFixed(2).replace('.',',')}</td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </>
  );
};

export default MemorialDeterministico;
