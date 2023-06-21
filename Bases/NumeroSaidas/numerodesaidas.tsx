import React from 'react';
import { divisao, saidasEscadas } from './TabelaNumeroSaidas';

interface numerosaidasProps {
  ocupacao: string;
  altura: string;
}

const Numerodesaidas = ({ ocupacao, altura }: numerosaidasProps) => {
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
