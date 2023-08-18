import React from 'react';
import styles from '../src/pages/home.module.css';
import Deterministico from '../Bases/CargaIncendio/deterministico';
import Probabilistico from '../Bases/CargaIncendio/probabilistico';
import { Dispatch, SetStateAction } from 'react';

interface ocupacaoProps {
  numero: number;
  valorOcupacao: number[][];
  setValorOcupacao: (valorOcupacao: number[][]) => void;
}

const Cargaincendiocalculo = ({
  numero,
  valorOcupacao,
  setValorOcupacao,
}: ocupacaoProps) => {
  const [j1, setJ1] = React.useState<string>('sim');
  const [metodo, setMetodo] = React.useState<string>('');

  function handleMetodo(event: string) {
    setJ1(event);
    setMetodo('');
    if (j1 === 'sim') {
      valorOcupacao[numero] = [9, 0, 0];
      setValorOcupacao(valorOcupacao);
    }
  }

  return (
    <div className='d-flex flex-column'>
      <span className='fw-bold'>*** Todo o material a ser armazenado é incombustível?</span>
      <div className='d-flex gap-5 my-2'>
        <div className='d-flex gap-2'>
          <input
            type="radio"
            id="combustível"
            value="sim"
            checked={j1 === 'sim'}
            onChange={({ target }) => {
              handleMetodo(target.value);
            }}
          />
          <label htmlFor="combustível">Sim</label>
        </div>
        <div className='d-flex gap-2'>
          <input
            type="radio"
            id="incombustível"
            value="nao"
            checked={j1 === 'nao'}
            onChange={({ target }) => {
              handleMetodo(target.value);
            }}
          />
          <label htmlFor="incombustível">Não</label>
        </div>
      </div>
      {j1 === 'sim' && (
        <div>
          <p className='fw-bold'>Divisão: J-1</p>
          <p className='fw-bold'>Descrição: Depósito de material incombustível</p>
        </div>
      )}
      {j1 === 'nao' && (
        <div>
          <span className='fw-bold'>*** Deseja calcular a carga incêndio por qual método?</span>
          <div className='d-flex gap-5 my-2'>
            <div className='d-flex gap-2'>
              <input
                type="radio"
                id="probabilistico"
                value="probabilistico"
                checked={metodo === 'probabilistico'}
                onChange={({ target }) => setMetodo(target.value)}
              />
              <label htmlFor="probabilistico">Probabilístico</label>
            </div>
            <div className='d-flex gap-2'>
              <input
                type="radio"
                id="deterministico"
                value="deterministico"
                checked={metodo === 'deterministico'}
                onChange={({ target }) => setMetodo(target.value)}
              />
              <label htmlFor="deterministico">Determinístico</label>
            </div>
          </div>
        </div>
      )}
      {metodo === 'probabilistico' && (
        <Probabilistico
          numero={numero}
          valorOcupacao={valorOcupacao}
          setValorOcupacao={setValorOcupacao}
        />
      )}
      {metodo === 'deterministico' && (
        <Deterministico
          numero={numero}
          valorOcupacao={valorOcupacao}
          setValorOcupacao={setValorOcupacao}
        />
      )}
    </div>
  );
};

export default Cargaincendiocalculo;
