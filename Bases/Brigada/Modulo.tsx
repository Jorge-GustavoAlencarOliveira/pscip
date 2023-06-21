import React from 'react';
import { moduloProps } from './BrigadaReducer';
import TabelaBrigada from './TabelaBrigada';

interface ModuloProps {
  modulo: moduloProps;
  onDelete: (id: number) => void;
}

const Modulo = ({ modulo, onDelete }: ModuloProps) => {
  const { divisao, tabelaBrigada } = TabelaBrigada();
  if (typeof modulo.divisao === 'number') {
    const descricao = tabelaBrigada[modulo.divisao].descricao
    return (
      <div>
        <button style={{ float: 'right' }} onClick={() => onDelete(modulo.id)}>
          Excluir
        </button>
        <p>Pavimento: {modulo.pavimento}</p>
        <p>Divisão: {divisao[modulo.divisao]}</p>
        <p>População fixa: {modulo.populacao}</p>
        <p>Numero de Brigadistas: {modulo.brigadistas}</p>
        <p>
          Nivel de Treinamento exigido: {tabelaBrigada[modulo.divisao].exigido}
        </p>
        <p>
          Nivel de Treinamento recomendado:{' '}
          {tabelaBrigada[modulo.divisao].recomendado}
        </p>
        {descricao?.map((item, index) => {
          <p>Observações</p>
          return (
          <div key={index}>
            <p >{item}</p>
          </div>
          )
        })}
      </div>
    );
  }
  return null;
};

export default Modulo;
