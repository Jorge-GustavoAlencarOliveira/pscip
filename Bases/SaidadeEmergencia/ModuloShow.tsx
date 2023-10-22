import React from 'react';
import Modulo from './Modulo';
import { moduloProps } from './ModuloReducer';
import SaidaPavimento from './saidaPavimento';

interface ModuloShowProps {
  modulos: moduloProps[];
  onDeleteModulos: (id: number) => void;
}

const ModuloShow = ({ modulos, onDeleteModulos }: ModuloShowProps) => {
  const populaçãoTotal = modulos
    ?.map((item) => item.populacao)
    .reduce((acc, atual) => {
      return acc + atual;
    }, 0);
  return (
    <div>
      {modulos?.map((item) => {
        return (
          <div key={item.id}>
            <Modulo modulo={item} onDelete={onDeleteModulos} />
          </div>
        );
      })}
      {populaçãoTotal !== 0 && modulos.length > 1 && (
        <div>
          <span className="fw-bold">População total: </span>
          <span>{populaçãoTotal} pessoas</span>
        </div>
      )}
      <SaidaPavimento modulos={modulos} />
    </div>
  );
};

export default ModuloShow;
