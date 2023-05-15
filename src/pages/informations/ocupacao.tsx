import React from 'react';
import Head from 'next/head';
import { DataStorage } from '../../../dataContext';
import styles from '../home.module.css';
import Ocupacoes from '../../../Bases/ocupacao';
import { useRouter } from 'next/router';
import Probabilistico from '../../../Bases/probabilistico';
import Deterministico from '../../../Bases/deterministico';

const Ocupacao = () => {
  const router = useRouter();
  const ocupacoes = Ocupacoes();
  const [select, setSelect] = React.useState<number | any | string>(0);
  const [j1, setJ1] = React.useState<string>('sim');
  const [metodo, setMetodo] = React.useState<string>('');

  function handleNext() {
    if (select === '9') {
      router.push('/informations/cargaincendio');
    } else {
      router.push(`/informations/divisao?ocupacao=${select}`);
    }
  }

  function handleMetodo(event: string) {
    setJ1(event);
    setMetodo('');
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
          onChange={({ target }) => setSelect(target.value)}
        >
          {ocupacoes?.map((item, index) => {
            return (
              <option key={index} value={index}>
                {item}
              </option>
            );
          })}
        </select>
        {select === '9' && (
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
        {metodo === 'probabilistico' && (
          <div>
            <Probabilistico />
          </div>
        )}
        {metodo === 'deterministico' && (
          <Deterministico/>
        )}

        <button onClick={handleNext}>Próximo</button>
        <button onClick={() => router.back()}>Voltar</button>
      </div>
    </>
  );
};

export default Ocupacao;

// import React from 'react';
// import { ReactNode } from 'react';

// type ContextData = {
//   altura: string | undefined;
//   setAltura: (Credentials: string | undefined) => void;
//   area: string | undefined;
//   setArea: (Credentials: string | undefined) => void;
//   dataConstrucao: string | undefined;
//   setDataConstrucao: (Credentials: string | undefined) => void;
//   cargaIncendio: number | undefined;
//   setCargaIncendio: (Credentials: number | undefined) => void;
//   ocupacao: string | undefined;
//   setOcupacao: (Credentials: string | undefined) => void;

// };

// type ProviderProps = {
//   children: ReactNode;
// };
// export const DataStorage = React.createContext({} as ContextData);

// const DataContext = ({ children }: ProviderProps) => {
//   const [altura, setAltura,] = React.useState<string | undefined>();
//   const [area,setArea,] = React.useState<string | undefined>();
//   const [dataConstrucao, setDataConstrucao] = React.useState<string | undefined>();
//   const [cargaIncendio, setCargaIncendio] = React.useState<number | undefined>();
//   const [ocupacao, setOcupacao] = React.useState<string | undefined>()

//   return (
//     <DataStorage.Provider value={{ altura, setAltura, area, setArea, dataConstrucao, setDataConstrucao, cargaIncendio, setCargaIncendio, ocupacao, setOcupacao}}>
//       {children}
//     </DataStorage.Provider>
//   );
// };

// export default DataContext;
