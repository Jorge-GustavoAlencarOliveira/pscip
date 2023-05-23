import React, { ChangeEvent } from 'react';
import Head from 'next/head';
import { DataStorage } from '../../../dataContext';
import styles from '../home.module.css';
import Ocupacoes from '../../../Tabelas/ocupacaotabela';
import { useRouter } from 'next/router';
import Probabilistico from '../../../Bases/probabilistico';
import Deterministico from '../../../Bases/deterministico';
import Divisao from '../../../Tabelas/divisaotabela';
import Descricao from '../../../Tabelas/DescricaoTabela';

const Ocupacao = () => {
  const router = useRouter();
  const ocupacoes = Ocupacoes();
  const { divisao } = Divisao();
  const { descricao } = Descricao();
  const [select, setSelect] = React.useState<number>(0);
  const [div, setDiv] = React.useState<number>(0);
  const [desc, setDesc] = React.useState<number>(0);
  const [j1, setJ1] = React.useState<string>('sim');
  const [metodo, setMetodo] = React.useState<string>('');
  const { allStates } = React.useContext(DataStorage);

  function handleMetodo(event: string) {
    setJ1(event);
    setMetodo('');
  }

  function handleDivisao(target: string) {
    setSelect(+target);
    setDiv(0);
    setJ1('sim');
    setMetodo('');
  }

  function handleNext() {
    if (select === 9 && j1 === 'sim') {
      allStates({
        ocupacao: descricao[select][div][desc].divisao,
        cargaIncendio: descricao[9][0][0].cargaincendio
      });
      router.push('/result');
    } else {
      allStates({
        ocupacao: descricao[select][div][desc].divisao,
        cargaIncendio: descricao[select][div][desc].cargaincendio,
      });
      router.push('/result');
    }
  }
  return (
    <>
      <Head>
        <title>Projeto de Segurança Contra Incêndio e Pânico</title>
      </Head>
      <div className={styles.form}>
        <label>Ocupação</label>
        <select
          value={select}
          onChange={({ target }) => handleDivisao(target.value)}
        >
          {ocupacoes?.map((item, index) => {
            return (
              <option key={index} value={index}>
                {item}
              </option>
            );
          })}
        </select>
        {select === 9 ? (
          <div>
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
            {j1 === 'sim' && (
              <div>
                <p>Divisão: {descricao[9][0][0].divisao}</p>
                <p>Divisão: {descricao[9][0][0].descricao}</p>
                <div>
                  <button onClick={handleNext}>Próximo</button>
                  <button onClick={() => router.back()}>Voltar</button>
                </div>
              </div>
            )}
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
        ) : (
          <div className={styles.form}>
            <label>Divisão</label>
            <select
              value={div}
              onChange={({ target }) => setDiv(+target.value)}
            >
              {divisao[select]?.map((item, index) => {
                return (
                  <option key={index} value={index}>
                    {item}
                  </option>
                );
              })}
            </select>
            <label>Descrição</label>
            <select
              value={desc}
              onChange={({ target }) => setDesc(+target.value)}
            >
              {descricao[select][div]?.map((item, index) => {
                return (
                  <option key={index} value={index}>
                    {item.descricao}
                  </option>
                );
              })}
            </select>
            <div>
              <button onClick={handleNext}>Próximo</button>
              <button onClick={() => router.back()}>Voltar</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Ocupacao;
