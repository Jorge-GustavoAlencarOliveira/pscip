import React from 'react';
import { ModuloDeterministicoProps } from './useReducerDeterministico';
import { valorestabelac1 } from '../../CargaIncendio/TabelaDeterministico';
import { definicaoCargaIncendio } from './useDeterministico';
import { FaTrash } from 'react-icons/fa';

type ShowModulosDeterministicoProps = {
  modulos: ModuloDeterministicoProps[];
  onDelete: (id: number) => void;
};

function compareValues (a:number, b: number){
  if(a > b) return a
  else b
}

const ShowModulosDeterministico = ({
  modulos,
  onDelete,
}: ShowModulosDeterministicoProps) => {
  const valores = definicaoCargaIncendio(modulos);
  console.log(valores);
  return (
    <>
      <div className="d-flex flex-column justify-content-center mt-3 bg-light px-2 py-3 rounded-3">
        {modulos.length > 0 && (
          <h6 className="text-center fs-2 mb-4 text-primary">Módulos</h6>
        )}
        {modulos.map(({ id, area, materiais, resultado }) => {
          return (
            <div
              key={id}
              className="d-flex justify-content-center fs-5 w-75 mx-auto"
            >
              <div className="d-flex justify-content-center">
                𝒒𝒇{id + 1}={' '}
                <span className="d-flex flex-column align-items-center">
                  <span className="d-inline">
                    {materiais?.map(({ id: id1, tipo, massa }) => {
                      return (
                        <span key={id1}>
                          ({massa}x{valorestabelac1[+tipo]})
                          {materiais.length !== id1 ? '+' : null}
                        </span>
                      );
                    })}
                  </span>
                  <span
                    style={{ width: '100%', height: '1px', background: '#000' }}
                  ></span>
                  <span>{area}</span>
                </span>
                <span>{' '}= {resultado.toString().replace('.', ',')} MJ/m²</span>
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
        {modulos.length > 1 ? (
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
                  {valores[0]?.toString().replace('.', ',')} + {valores[1]?.toString().replace('.', ',')}
                </span>
                <span
                  style={{ width: '100%', height: '1px', background: '#000' }}
                ></span>
                <span>2</span>
              </div>
              <span>=</span>
              <span>{((valores[0]+valores[1])/2)?.toString().replace('.', ',')} MJ/m2</span>
            </div>
            <div className="d-flex justify-content-center">
              <span className='my-4'>OU</span>
            </div>
            <div className="d-flex justify-content-center">
              <span>85 % da maior carga de incêndio</span><span> = 85% x {valores[0]?.toString().replace('.', ',')} = {(valores[0]*0.85)?.toFixed(2).toString().replace('.', ',')}</span>
            </div>
            <div className="d-flex justify-content-center mt-5">
            <span className="text-center fw-bold fs-4">
              Carga incêndio encontrada:{' '}
              {compareValues((valores[0]*0.85), ((valores[0]+valores[1])/2)).toFixed(2).toString().replace('.', ',')} MJ/m²
            </span>
          </div>
          </div>
        ) : (
          <div className="d-flex justify-content-center mt-4">
            <span className="text-center fw-bold fs-4">
              Carga incêndio encontrada:{' '}
              {valores[0]?.toString().replace('.', ',')} MJ/m²
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default ShowModulosDeterministico;
