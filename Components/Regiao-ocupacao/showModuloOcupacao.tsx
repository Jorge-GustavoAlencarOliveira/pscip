import React from 'react';
import { ocupacaoModulosProps } from './ocupacaoReducer';
import TabelaDescricao from '../../Tabelas/tabelaDescricao';
import TabelaOcupacao from '../../Tabelas/tabelaOcupacao';

type ModuloProps = {
  modulo: ocupacaoModulosProps;
  onDelete: (id: number) => void;
  index: number;
};

const ShowModuloOcupacao = ({ modulo, onDelete, index }: ModuloProps) => {
  const { descricao } = TabelaDescricao();
  const { ocupacao} = TabelaOcupacao();

  return (
    <div className='border border-primary rounded-2 p-2 my-2'>
      <div className="d-flex justify-content-between align-items-center ">
        <h6 className="text-primary">Ocupação {index + 1}</h6>
        <button
          className="btn btn-secondary"
          onClick={() => onDelete(modulo.id)}
        >
          Excluir
        </button>
      </div>
      <div>
        <p>
          Ocupação:{' '}
          {
            ocupacao[modulo.ocupacao[0]]
          }
        </p>
        <p>
          Divisão:{' '}
          {
            descricao[modulo.ocupacao[0]][modulo.ocupacao[1]][
              modulo.ocupacao[2]
            ]?.divisao
          }
        </p>
        <p>
          Descrição:{' '}
          {
            descricao[modulo.ocupacao[0]][modulo.ocupacao[1]][
              modulo.ocupacao[2]
            ]?.descricao
          }
        </p>
        <p>
          Carga incêndio:{' '}
          {
            descricao[modulo.ocupacao[0]][modulo.ocupacao[1]][
              modulo.ocupacao[2]
            ]?.cargaincendio
          } MJ/m²
        </p>
      </div>
    </div>
  );
};

export default ShowModuloOcupacao;
