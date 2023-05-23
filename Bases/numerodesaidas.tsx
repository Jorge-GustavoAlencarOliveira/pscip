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
  'E-6',
  'F-1',
  'F-2',
  'F-3',
  'F-4',
  'F-5 ',
  'F-6 ',
  'F-7 ',
  'F-8 ',
  'F-9',
  'F-10',
  'F-11',
  'G-1',
  'G-2',
  'G-3',
  'G-4',
  'G-5',
  'H-1',
  'H-2',
  'H-3',
  'H-4',
  'H-5',
  'H-6',
  'I-1',
  'I-2',
  'I-3',
  'J-1',
  'J-2',
  'J-3',
  'J-4',
  'L-1',
  'L-2',
  'L-3',
  'M-1',
  'M-2',
  'M-3',
  'M-4',
  'M-5',
  'M-8',
];
const saidasEscadas = [
  ['Não se aplica',
  'Não se aplica',
  'Não se aplica',
  'Não se aplica',
  ],
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
  [
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: PF',
    'Número de saídas: 2, Tipo de Escada: PF',
    'Número de saídas: 2, Tipo de Escada: PF',
  ],
  [
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: PF',
    'Número de saídas: 2, Tipo de Escada: PF',
    'Número de saídas: 2, Tipo de Escada: PF',
  ],
  [
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: EP',
    'Número de saídas: 2, Tipo de Escada: EP',
    'Número de saídas: 2, Tipo de Escada: EP',
  ],
  [
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: EP',
    'Número de saídas: 2, Tipo de Escada: PF',
    'Número de saídas: 2, Tipo de Escada: PF',
  ],
  [
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 2, Tipo de Escada: PF',
    'Número de saídas: 2, Tipo de Escada: PF',
    'Número de saídas: 2, Tipo de Escada: PF',
  ],
  [
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: EP',
    'Número de saídas: 1, Tipo de Escada: PF',
    'Número de saídas: 1, Tipo de Escada: PF',
  ],
  [
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: EP',
    'Número de saídas: 1, Tipo de Escada: PF',
    'Número de saídas: 1, Tipo de Escada: PF',
  ],

  [
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: EP',
    'Número de saídas: 1, Tipo de Escada: PF',
    'Número de saídas: 1, Tipo de Escada: PF',
  ],
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
  [
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: EP',
    'Número de saídas: 2, Tipo de Escada: PF',
    'Número de saídas: 2, Tipo de Escada: PF',
  ],
  [
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: EP',
    'Número de saídas: 2, Tipo de Escada: PF',
    'Número de saídas: 2, Tipo de Escada: PF',
  ],
  [
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: EP',
    'Número de saídas: 3, Tipo de Escada: PF',
    'Número de saídas: 3, Tipo de Escada: PF',
  ],
  [
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: EP',
    'Número de saídas: 2, Tipo de Escada: PF',
    'Número de saídas: 2, Tipo de Escada: PF',
  ],
  [
    'Número de saídas: 2, Tipo de Escada: NE',
    'Número de saídas: 2, Tipo de Escada: EP',
    'Número de saídas: 2, Tipo de Escada: PF',
    'Número de saídas: 2, Tipo de Escada: PF',
  ],
  [
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 2, Tipo de Escada: EP',
    'Número de saídas: 2, Tipo de Escada: PF',
    'Número de saídas: 2, Tipo de Escada: PF',
  ],
  [
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 2, Tipo de Escada: PF',
    'Número de saídas: 2, Tipo de Escada: PF',
    'Número de saídas: 2, Tipo de Escada: PF',
  ],
  [
    'Número de saídas: 2, Tipo de Escada: NE',
    'Número de saídas: 2, Tipo de Escada: NE',
    'Número de saídas: 2, Tipo de Escada: PF',
    'Número de saídas: 2, Tipo de Escada: PF',
  ],
  [
    'Número de saídas: 2, Tipo de Escada: NE',
    'Número de saídas: +, Tipo de Escada: +',
    'Número de saídas: +, Tipo de Escada: +',
    'Número de saídas: +, Tipo de Escada:+',
  ],
  [
    'Número de saídas: 2, Tipo de Escada: NE',
    'Número de saídas: 2, Tipo de Escada: PF',
    'Número de saídas: 2, Tipo de Escada: PF',
    'Número de saídas: 2, Tipo de Escada: PF',
  ],
  [
    'Número de saídas: 2, Tipo de Escada: NE',
    'Número de saídas: 2, Tipo de Escada: PF',
    'Número de saídas: 2, Tipo de Escada: PF',
    'Número de saídas: 2, Tipo de Escada: PF',
  ],
  [
    'Número de saídas: 2, Tipo de Escada: NE',
    'Número de saídas: -, Tipo de Escada: -',
    'Número de saídas: -, Tipo de Escada: -',
    'Número de saídas: -, Tipo de Escada: -',
  ],
  [
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 2, Tipo de Escada: PF',
    'Número de saídas: 2, Tipo de Escada: PF',
    'Número de saídas: 2, Tipo de Escada: PF',
  ],
  [
    'Número de saídas: 2, Tipo de Escada: NE',
    'Número de saídas: 2, Tipo de Escada: EP',
    'Número de saídas: 2, Tipo de Escada: PF',
    'Número de saídas: 2, Tipo de Escada: PF',
  ],
  [
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 2, Tipo de Escada: EP',
    'Número de saídas: 2, Tipo de Escada: PF',
    'Número de saídas: 2, Tipo de Escada: PF',
  ],
  [
    'Número de saídas: 2, Tipo de Escada: NE',
    'Número de saídas: 2, Tipo de Escada: EP',
    'Número de saídas: 2, Tipo de Escada: PF',
    'Número de saídas: 2, Tipo de Escada: PF',
  ],
  [
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: EP',
    'Número de saídas: 1, Tipo de Escada: EP',
  ],
  [
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: EP',
    'Número de saídas: 1, Tipo de Escada: EP',
    'Número de saídas: 1, Tipo de Escada: EP',
  ],
  [
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: PF',
    'Número de saídas: 1, Tipo de Escada: PF',
    'Número de saídas: 1, Tipo de Escada: PF',
  ],
  [
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: EP',
    'Número de saídas: 1, Tipo de Escada: PF',
    'Número de saídas: 1, Tipo de Escada: PF',
  ],
  [
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: Não se aplica, Tipo de Escada: Não se aplica',
    'Número de saídas: Não se aplica, Tipo de Escada:Não se aplica',
  ],
  [
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: EP',
    'Número de saídas:  Não se aplica, Tipo de Escada:  Não se aplica',
    'Número de saídas:  Não se aplica, Tipo de Escada: Não se aplica',
  ],
  [
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: PF',
    'Número de saídas: 1, Tipo de Escada: PF',
    'Número de saídas: 1, Tipo de Escada: PF',
  ],
  [
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 2, Tipo de Escada: PF',
    'Número de saídas: 2, Tipo de Escada: PF',
    'Número de saídas: 2, Tipo de Escada: PF',
  ],
  [
    'Número de saídas: 2, Tipo de Escada: NE',
    'Número de saídas: 2, Tipo de Escada: EP',
    'Número de saídas: 2, Tipo de Escada: PF',
    'Número de saídas: 2, Tipo de Escada: PF',
  ],
  [
    'Número de saídas: 2, Tipo de Escada: NE',
    'Número de saídas: Necessidade de consultar normas e regulamentos específicos, Tipo de Escada: Necessidade de consultar normas e regulamentos específicos',
    'Número de saídas: Necessidade de consultar normas e regulamentos específicos, Tipo de Escada: Necessidade de consultar normas e regulamentos específicos',
    'Número de saídas: Necessidade de consultar normas e regulamentos específicos, Tipo de Escada:Necessidade de consultar normas e regulamentos específicos',
  ],
  [
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: PF',
    'Número de saídas: 1, Tipo de Escada: PF',
    'Número de saídas: 1, Tipo de Escada: PF',
  ],
  [
    'Número de saídas: 2, Tipo de Escada: NE',
    'Número de saídas: 2, Tipo de Escada: EP',
    'Número de saídas: 2, Tipo de Escada: EP',
    'Número de saídas: 2, Tipo de Escada: EP',
  ],
  [
    'Número de saídas: 2, Tipo de Escada: NE',
    'Número de saídas: 2, Tipo de Escada: EP',
    'Número de saídas: 2, Tipo de Escada: PF',
    'Número de saídas: 2, Tipo de Escada: PF',
  ],
  [
    'Número de saídas: 2, Tipo de Escada: NE',
    'Número de saídas: 2, Tipo de Escada: PF',
    'Número de saídas: 2, Tipo de Escada: PF',
    'Número de saídas: 2, Tipo de Escada: PF',
  ],
  [
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: NE',
  ],
  [
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: NE',
  ],
  [
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: NE',
  ],
  [
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: NE',
  ],

  [
    'Número de saídas: 1, Tipo de Escada: Não se aplica',
    'Número de saídas: Não se aplica, Tipo de Escada: Não se aplica',
    'Número de saídas: Não se aplica, Tipo de Escada: Não se aplica',
    'Número de saídas: Não se aplica, Tipo de Escada: Não se aplica',
  ],
  [
    'Número de saídas: 2, Tipo de Escada: NE',
    'Número de saídas: 2, Tipo de Escada: PF',
    'Número de saídas: 3, Tipo de Escada: PF',
    'Número de saídas: 3, Tipo de Escada: PF',
  ],
  [
    'Número de saídas: 2, Tipo de Escada: NE',
    'Número de saídas: 2, Tipo de Escada: PF',
    'Número de saídas: 3, Tipo de Escada: PF',
    'Número de saídas: 3, Tipo de Escada: PF',
  ],
  [
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: Necessidade de consultar normas e regulamentos específicos, Tipo de Escada: Necessidade de consultar normas e regulamentos específicos',
    'Número de saídas: Necessidade de consultar normas e regulamentos específicos, Tipo de Escada: Necessidade de consultar normas e regulamentos específicos',
    'Número de saídas: Necessidade de consultar normas e regulamentos específicos, Tipo de Escada:Necessidade de consultar normas e regulamentos específicos',
  ],
  [
    'Número de saídas: 2, Tipo de Escada: EP',
    'Número de saídas: 2, Tipo de Escada: PF',
    'Número de saídas: 3, Tipo de Escada: PF',
    'Número de saídas: 3, Tipo de Escada: PF',
  ],
  [
    'Número de saídas: 2, Tipo de Escada: NE',
    'Número de saídas: 2, Tipo de Escada: PF',
    'Número de saídas: 2, Tipo de Escada: PF',
    'Número de saídas: 2, Tipo de Escada: PF',
  ],
  [
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: NE',
    'Número de saídas: 1, Tipo de Escada: NE',
  ],
  [
    'Número de saídas: Necessidade de consultar normas e regulamentos específicos, Tipo de Escada: Necessidade de consultar normas e regulamentos específicos',
    'Número de saídas: Necessidade de consultar normas e regulamentos específicos, Tipo de Escada: Necessidade de consultar normas e regulamentos específicos',
    'Número de saídas: Necessidade de consultar normas e regulamentos específicos, Tipo de Escada: Necessidade de consultar normas e regulamentos específicos',
    'Número de saídas: Necessidade de consultar normas e regulamentos específicos, Tipo de Escada:Necessidade de consultar normas e regulamentos específicos',
  ],
  [
    'Número de saídas: Necessidade de consultar normas e regulamentos específicos, Tipo de Escada: Necessidade de consultar normas e regulamentos específicos',
    'Número de saídas: Necessidade de consultar normas e regulamentos específicos, Tipo de Escada: Necessidade de consultar normas e regulamentos específicos',
    'Número de saídas: Necessidade de consultar normas e regulamentos específicos, Tipo de Escada: Necessidade de consultar normas e regulamentos específicos',
    'Número de saídas: Necessidade de consultar normas e regulamentos específicos, Tipo de Escada:Necessidade de consultar normas e regulamentos específicos',
  ],
];

const Numerodesaidas = () => {
  const { ocupacao, altura } = React.useContext(DataStorage);
  if (ocupacao) {
    const div = divisao.indexOf(ocupacao);
    if (div !== -1) {
      if (Number(altura) <= 12) {
        return (
          <div>
            <h1>Número de saídas</h1>
            <p>{saidasEscadas && saidasEscadas[div][0]}</p>
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
      if (Number(altura) > 30 && Number(altura) <= 54) {
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
    }
  }
  return null;
};

export default Numerodesaidas;
