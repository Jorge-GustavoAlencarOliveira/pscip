import React from 'react';
import { divisao, saidasEscadas } from './TabelaNumeroSaidas';
import { dadosOcupacao } from '../finddados';

type numeroSaidaProps = {
  altura: number;
  ocupacoes: number[][];
  divisao: number[]
};

function acharSaida(altura: number, div: number) {
  if (altura <= 12) return saidasEscadas[div][0];
  else if (altura > 12 && altura <= 30) return saidasEscadas[div][1];
  else if (altura > 30 && altura <= 54) return saidasEscadas[div][2];
  else if (altura > 54) return saidasEscadas[div][3];
}

const Numerodesaidas = ({ altura, ocupacoes, divisao: ocup }: numeroSaidaProps) => {
  if(ocup){
    const {divisao: div1} = dadosOcupacao(ocup)
    const div = divisao.indexOf(div1)
    return (
      <>
        {ocup && (  
            <div>
              <h5 className='text-primary'>Número de saídas</h5>
              <p>Divisão: {div1}</p>
              <p>{acharSaida(altura, div)}</p>
            </div>
         )}
      </>
    )
  } else {
    return (
      <> 
        {ocupacoes && ocupacoes?.map((item) => {
          const {divisao: ocupacao} = dadosOcupacao(item);
          const div = divisao.indexOf(ocupacao);
          if (div !== -1) {
            return (
              <div>
                <h5 className='text-primary'>Número de saídas</h5>
              <p>Divisão: {ocupacao}</p>
                <p>{acharSaida(altura, div)}</p>
              </div>
            );
          }
        })}
      </>
    );
  }
};

export default Numerodesaidas;


