import React from 'react';
import styles from '../src/pages/home.module.css';
import Deterministico from '../Bases/deterministico';
import Probabilistico from '../Bases/probabilistico';

const Cargaincendiocalculo = () => {
  const [j1, setJ1] = React.useState<string>('sim');
  const [metodo, setMetodo] = React.useState<string>('');

  function handleMetodo(event: string) {
    setJ1(event);
    setMetodo('');
  }
  return (
    <div style={{margin: '2rem 0'}}>
      <span>Todo o material a ser armazenado é incombustível?</span>
      <div className={styles.radio}>
        <div>
          <input
            type="radio"
            name="J-1"
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
            name="J-1"
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
      {j1 === 'nao' && (
        <div>
          <span>Deseja calcular a carga incêndio por qual método?</span>
          <div className={styles.radio}>
            <div>
              <input
                type="radio"
                name="metodo"
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
                name="metodo"
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
      {metodo === 'probabilistico' && <Probabilistico />}
      {metodo === 'deterministico' && <Deterministico />}
    </div>
  );
};

export default Cargaincendiocalculo;
