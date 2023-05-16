import React from 'react';
import { DataStorage } from '../dataContext';


const ocup1 = {
  ocupações: [
    'A-2',
    'A-3',
    'C-1',
    'D-2',
    'E-1',
    'E-2',
    'E-3',
    'E-4',
    'E-6',
    'F-2',
    'F-3',
    'F-4',
    'F-8',
    'G-1',
    'G-2',
    'G-3',
    'H-1',
    'H-2',
    'H-3',
    'H-5',
    'H-6',
    'I-1',
    'J-1',
    'J-2',
  ],
  area: (area: number) => {
    if (area <= 3000) return ['Tipo 1 R.I. 6m³', 'Tipo 2 R.I. 8m³'];
    if (area > 3000 && area <= 6000)
      return ['Tipo 1 R.I. 8m³', 'Tipo 2 R.I. 12m³'];
    if (area > 6000 && area <= 10000)
      return ['Tipo 1 R.I. 12m³', 'Tipo 2 R.I. 16m³'];
    if (area > 10000 && area <= 15000)
      return ['Tipo 1 R.I. 16m³', 'Tipo 2 R.I. 20m³'];
    if (area > 15000 && area <= 30000)
      return ['Tipo 1 R.I. 25m³', 'Tipo 2 R.I. 35m³'];
    if (area > 30000) return ['Tipo 1 R.I. 35m³', 'Tipo 2 R.I. 47m³'];
  },
};

const ocup2 = {
  ocupações: ['B-1', 'B-2', 'C-3', 'E-5', 'F-5', 'F-6', 'F-7', 'F-9', 'H-4'],
  area: (area: number) => {
    if (area < 3000) return ['Tipo 3 R.I. 12m³'];
  },
};
const grupo = [ocup1, ocup2];


const ReservaTecnica = () => {
  const {area, cargaIncendio, ocupacao} = React.useContext(DataStorage) 
  const reservas = grupo.map((item) => {
    if(ocupacao) return item.ocupações.includes(ocupacao);
  });
  const ri = reservas.findIndex((item) => item === true);
  return (
    <div>
      <h1>Reserva Técnica</h1>
      <ul>
        {grupo[ri].area(Number(area))?.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default ReservaTecnica;
