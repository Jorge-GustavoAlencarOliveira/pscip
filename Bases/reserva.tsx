import React from 'react';
import { DataStorage } from '../dataContext';

const reservaTecnica = [
  [
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
  ['B-1', 'B-2', 'C-3', 'E-5', 'F-5', 'F-6', 'F-7', 'F-9', 'H-4'],
  ['G-5', 'L-1', 'M-1'],
  ['I-3', 'J-4', 'L-2', 'L-3'],
  [
    'D-1',
    'D-3',
    'D-4',
    'F-1',
    'F-10',
    'F-11',
    'J-3',
    'I-2',
    'G-4',
    'C-2',
    'M-3',
  ],
];

const metodos = [
  {
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
  },
  {
    area: (area: number) => {
      if (area < 3000) return ['Tipo 3 R.I. 12m³'];
      if (area > 3000 && area <= 6000) return ['Tipo 3 R.I. 18m³'];
      if (area > 6000 && area <= 10000) return ['Tipo 3 R.I. 25m³'];
      if (area > 10000 && area <= 15000) return ['Tipo 3 R.I. 30m³'];
      if (area > 15000 && area <= 30000) return ['Tipo 3 R.I. 40m³'];
      if (area > 30000) return ['Tipo 3 R.I. 60m³'];
    },
  },
  {
    area: (area: number) => {
      if (area < 3000) return ['Tipo 3 R.I. 20m³'];
      if (area > 3000 && area <= 6000) return ['Tipo 4 R.I. 20m³'];
      if (area > 6000 && area <= 10000) return ['Tipo 4 R.I. 30m³'];
      if (area > 10000 && area <= 15000) return ['Tipo 5 R.I. 45m³'];
      if (area > 15000 && area <= 30000) return ['Tipo 5 R.I. 50m³'];
      if (area > 30000) return ['Tipo 5 R.I. 90m³'];
    },
  },
  {
    area: (area: number) => {
      if (area < 3000) return ['Tipo 3 R.I. 20m³'];
      if (area > 3000 && area <= 6000) return ['Tipo 4 R.I. 30m³'];
      if (area > 6000 && area <= 10000) return ['Tipo 5 R.I. 50m³'];
      if (area > 10000 && area <= 15000) return ['Tipo 5 R.I. 80m³'];
      if (area > 15000 && area <= 30000) return ['Tipo 5 R.I. 110m³'];
      if (area > 30000) return ['Tipo 5 R.I. 140m³'];
    },
  },
];

interface reservaProps {
  area: string,
  cargaIncendio: string,
  ocupacao: string
}

const ReservaTecnica = ({area, cargaIncendio, ocupacao}: reservaProps) => {
  
  const valor = reservaTecnica.map((item) => {
    if (ocupacao) {
      return item.includes(ocupacao);
    }
  });
  const metodo = valor.findIndex((item) => item === true);

  if (metodo === 4 && ocupacao === 'F-1' && Number(cargaIncendio) > 300)
    return (
      <div>
        <h1>Reserva Técnica</h1>
        <ul>
          {metodos[2]?.area(Number(area))?.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    );
  if (
    metodo === 4 &&
    Number(cargaIncendio) <= 300 &&
    ocupacao === 'D-1' || 
    ocupacao === 'D-3' || 
    ocupacao === 'D-4' ||
    ocupacao === 'F-1' ||
    ocupacao ===  'F-10' ||
    ocupacao ===  'F-11 ' ||
    ocupacao ===  'G-4' ||
    ocupacao ===  'M-3'
  )
    return (
      <div>
        <h1>Reserva Técnica</h1>
        <ul>
          {metodos[0]?.area(Number(area))?.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    );
  if (
    metodo === 4 && 
    Number(cargaIncendio) > 300 &&
    ocupacao === 'D-1' ||
    ocupacao === 'D-3' ||
    ocupacao === 'D-4' ||
    ocupacao === 'F-11' ||
    ocupacao === 'G-4' 
  ) {
    return (
      <div>
        <h1>Reserva Técnica</h1>
        <ul>
          {metodos[1]?.area(Number(area))?.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
  if (
    metodo === 4 && 
    Number(cargaIncendio) > 800 && 
    ocupacao === 'C-2' ||
    ocupacao === 'F-10' ||
    ocupacao === 'I-2' ||
    ocupacao === 'J-3' ||
    ocupacao === 'M-3' 
  )
    return (
      <div>
        <h1>Reserva Técnica</h1>
        <ul>
          {metodos[2]?.area(Number(area))?.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    );
  if (
    metodo === 4 && 
    Number(cargaIncendio) > 300 &&
    Number(cargaIncendio) <= 800 &&
    ocupacao === 'C-2' ||
    ocupacao === 'F-10' ||
    ocupacao === 'I-2' ||
    ocupacao === 'J-3' ||
    ocupacao === 'M-3' 
  )
    return (
      <div>
        <h1>Reserva Técnica</h1>
        <ul>
          {metodos[1]?.area(Number(area))?.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    );
  return (
    <div>
      <h1>Reserva Técnica</h1>
      <ul>
        {metodos[metodo]?.area(Number(area))?.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default ReservaTecnica;
