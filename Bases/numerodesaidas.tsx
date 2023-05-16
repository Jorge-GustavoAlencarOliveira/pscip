import React from 'react';
import { DataStorage } from '../dataContext';

const divisao = [
  'A-1',
  'A-2',
  'A-3',
  'B-1',
  'B-2',
  'C-1',
  'C-2',
  'C-3',
  'D-1',
  'D-2',
  'D-3',
  'D-4',
  'E-1',
  'E-2',
  'E-3',
  'E-4',
  'E-5',
  'F-1',
  'F-2',
  'F-3',
  'F-4',
  'F-5',
  'F-6',
  'F-7',
  'F-8',
  'F-9',
  'F-11',
];

const saidasEscadas = [
  ['Não se aplica'],
  [
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: EP',
    'Número de saídas: 1, Tipo de Escada: PF',
    'Número de saídas: 1, Tipo de Escada: PF',
  ],
  [
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: EP',
    'Número de saídas: 2, Tipo de Escada: PF',
    'Número de saídas: 2, Tipo de Escada: PF',
  ],
];

const Numerodesaidas = () => {
  const { ocupacao, altura } = React.useContext(DataStorage);
  const div = divisao.indexOf(ocupacao);
  if (Number(altura) <= 12) {
    return (
      <div>
        <h1>Número de saídas</h1>
        <p>{saidasEscadas[div][0]}</p>
      </div>
    );
  }
  if (Number(altura) > 12 && Number(altura) <= 30) {
    return (
      <div>
        <h1>Número de saídas</h1>
        <p>{saidasEscadas[div][1]}</p>
      </div>
    );
  }
  if (Number(altura) < 30 && Number(altura) <= 54) {
    return (
      <div>
        <h1>Número de saídas</h1>
        <p>{saidasEscadas[div][2]}</p>
      </div>
    );
  }
  if (Number(altura) > 54) {
    return (
      <div>
        <h1>Número de saídas</h1>
        <p>{saidasEscadas[div][3]}</p>
      </div>
    );
  }
  return null;
};

export default Numerodesaidas;
