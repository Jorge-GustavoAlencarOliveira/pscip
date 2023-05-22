import React from 'react';
import { DataStorage } from '../dataContext';
import NumeroSaidasTabela from '../Tabelas/NumeroSaidasTabela';

const Numerodesaidas = () => {
  const { saidasEscadas, divisao } = NumeroSaidasTabela();
  const { ocupacao, altura } = React.useContext(DataStorage);
  if (ocupacao) {
    const div = divisao.indexOf(ocupacao);
    console.log(div);
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
