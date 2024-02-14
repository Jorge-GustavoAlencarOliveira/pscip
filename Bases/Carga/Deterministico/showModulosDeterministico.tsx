import React from 'react';
import { ModuloDeterministicoProps } from './useReducerDeterministico';
import { valorestabelac1 } from '../../CargaIncendio/TabelaDeterministico';
import { definicaoCargaIncendio, numberFormat, maioresModulos } from './useDeterministico';
import { FaTrash } from 'react-icons/fa';
import { pdfMetodoDeterministico } from '../../../geradorPdf/pdfCargaIncendio';
import MemorialDeterministico from './memorialDeterministico';

type ShowModulosDeterministicoProps = {
  modulos: ModuloDeterministicoProps[];
  onDelete: (id: number) => void;
};

function compareValues (a:number, b: number){
  if(a > b) return a
  else return b
}

const ShowModulosDeterministico = ({
  modulos,
  onDelete,
}: ShowModulosDeterministicoProps) => {

  const valores = definicaoCargaIncendio(modulos);
  const maioresValores = maioresModulos(modulos)
  if(modulos.length > 0)
  return (
    <>
      <div className="d-flex flex-column justify-content-center mt-3 bg-light px-2 py-3 rounded-3">
        <MemorialDeterministico modulos={modulos}/>
        {modulos.map(({ id, area, materiais, resultado }, index) => {
          return (
            <div
              key={id}
              className="d-flex justify-content-center fs-5 w-75 mx-auto mt-4"
            >
              <div className="d-flex justify-content-center">
                𝒒𝒇{index + 1}={' '}
                <span className="d-flex flex-column align-items-center">
                  <span className="d-inline">
                    {materiais?.map(({ id: id1, tipo, massa }) => {
                      return (
                        <span key={id1}>
                          ({numberFormat(+massa)}x{valorestabelac1[+tipo]})
                          {materiais.length !== id1 ? '+' : null}
                        </span>
                      );
                    })}
                  </span>
                  <span
                    style={{ width: '100%', height: '1px', background: '#000' }}
                  ></span>
                  <span>{numberFormat(+area)}</span>
                </span>
                <span>= {numberFormat(resultado)} MJ/m²</span>
              </div>
              <div>
                <button
                  className="btn ms-5 pb-5"
                  onClick={() => onDelete(id)}
                >
                  <FaTrash size={16}/>
                </button>
              </div>
            </div>
          );
        })}
        {modulos.length > 1  && (
          <div className='fs-5 mt-5'>
            <div className='d-flex justify-content-center gap-1'>
              <div
                className="d-flex flex-column text-center"
                style={{ maxWidth: 'fit-content' }}
              >
                <span >Soma das duas maiores carga incêndio encontradas</span>
                <span
                  style={{ width: '100%', height: '1px', background: '#000' }}
                ></span>
                <span >2</span>
              </div>
              <span>=</span>
              <div className="d-flex flex-column text-center"
                style={{ maxWidth: 'fit-content' }}>
                <span>
                  {numberFormat(valores[0])} + {numberFormat(valores[1])}
                </span>
                <span
                  style={{ width: '100%', height: '1px', background: '#000' }}
                ></span>
                <span>2</span>
              </div>
              <span>=</span>
              <span>{numberFormat(((valores[0]+valores[1])/2))} MJ/m2</span>
            </div>
            <div className="d-flex justify-content-center">
              <span className='my-4'>OU</span>
            </div>
            <div className="d-flex justify-content-center">
              <span>85 % da maior carga de incêndio</span><span> = 85% x {numberFormat(valores[0])} = {numberFormat(valores[0]*0.85)} MJ/m²</span>
            </div>
            <div className="d-flex justify-content-center mt-5">
            <span className="text-center fw-bold fs-4">
              Carga incêndio encontrada:{' '}
              {numberFormat(compareValues((valores[0]*0.85), ((valores[0]+valores[1])/2)))} MJ/m²
            </span>
          </div>
          </div>
        )}
        {modulos.length === 1 && (
            <div className="d-flex justify-content-center mt-4">
              <span className="text-center fw-bold fs-4">
                Carga incêndio encontrada:{' '}
                {numberFormat(valores[0])} MJ/m²
              </span>
            </div>
        )}
        {modulos.length >= 1 && (
          <div>
            <button className='btn btn-primary float-end mt-5' onClick={() => pdfMetodoDeterministico([maioresValores[0], maioresValores[1]])}>Gerar Memorial</button>
          </div>
        )}
      </div>
    </>
  );
  return null
};

export default ShowModulosDeterministico;
