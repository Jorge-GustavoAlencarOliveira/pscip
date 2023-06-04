import React from 'react';
import styles from '../src/pages/home.module.css';
import Deterministico from '../Bases/deterministico';
import Probabilistico from '../Bases/probabilistico';
import { Dispatch, SetStateAction } from 'react';

interface ocupacaoProps {
  numero: number;
  valorOcupacao: number[][],
  setValorOcupacao: Dispatch<SetStateAction<number[][]>> 
}

const Cargaincendiocalculo = ({numero, valorOcupacao, setValorOcupacao}:ocupacaoProps) => {
  const [j1, setJ1] = React.useState<string>('sim');
  const [metodo, setMetodo] = React.useState<string>('');

  function handleMetodo(event: string) {
    setJ1(event);
    setMetodo('');
    if(j1 === 'sim'){ 
      valorOcupacao[numero] = [9,0,0]
      setValorOcupacao(valorOcupacao)
  }
}

console.log(valorOcupacao)
  return (
    <div style={{margin: '2rem 0'}}>
      <span>Todo o material a ser armazenado é incombustível?</span>
      <div className={styles.radio}>
        <div>
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
        <div>
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
          <p>Divisão: J-1</p>
          <p>Descrição: Depósito de material incombustível</p>
        </div>
      )}
      {j1 === 'nao' && (
        <div>
          <span>Deseja calcular a carga incêndio por qual método?</span>
          <div className={styles.radio}>
            <div>
              <input
                type="radio"
                id="probabilistico"
                value="probabilistico"
                checked={metodo === 'probabilistico'}
                onChange={({ target }) => setMetodo(target.value)}
              />
              <label htmlFor="probabilistico">Probabilistico</label>
            </div>
            <div>
              <input
                type="radio"
                id="deterministico"
                value="deterministico"
                checked={metodo === 'deterministico'}
                onChange={({ target }) => setMetodo(target.value)}
              />
              <label htmlFor="deterministico">Deterministico</label>
            </div>
          </div>
        </div>
      )}
      {metodo === 'probabilistico' && <Probabilistico numero={numero} valorOcupacao={valorOcupacao}
              setValorOcupacao={setValorOcupacao}/>}
      {metodo === 'deterministico' && <Deterministico numero={numero} valorOcupacao={valorOcupacao}
              setValorOcupacao={setValorOcupacao}/>}
    </div>
  );
};

export default Cargaincendiocalculo;