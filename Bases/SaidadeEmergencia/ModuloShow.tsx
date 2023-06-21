import React from 'react';
import Modulo from './Modulo';
import { moduloProps } from './ModuloReducer';


interface ModuloShowProps {
  modulos: moduloProps[] | [];
  onDeleteModulos: (id: number) => void;
}

const ModuloShow = ({ modulos, onDeleteModulos }: ModuloShowProps) => {
  const populaçãoTotal = modulos?.map((item) => item.populacao).reduce((acc, atual) => {
      if (typeof acc === 'number' && typeof atual === 'number') {
        return acc + atual;
      }
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
      <h2>
        {populaçãoTotal !== 0 && (
          <span>População total: {populaçãoTotal} pessoas</span>
        )}
      </h2>
    </div>
  );
};

export default ModuloShow;
