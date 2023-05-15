import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { DataStorage } from '../../../dataContext';
import styles from '../home.module.css';
import Divisao from '../../../Bases/divisao';
import Descricao from '../../../Bases/descricao';
import Ocupacoes from '../../../Bases/ocupacao';

const PageDivisao = () => {
  const router = useRouter();
  const { ocupacao } = router.query;
  const d = Number(ocupacao)
  const [sele, setSele] = React.useState<number>(d)
  const {divisao} = Divisao();
  const {descricao} = Descricao();
  const { SetOcupacao } = React.useContext(DataStorage);
  const [div, setDiv] = React.useState<number | any | string>(0);
  const [desc, setDesc] = React.useState<number | any | string>(0);

  React.useEffect(() =>{
    const { ocupacao } = router.query;
    const d = Number(ocupacao)
    setSele(d)
  },[])

  function handleNext(){
    SetOcupacao(descricao[d][div][desc].divisao);
    router.push('/result')
  }
  return (
    <>
      <Head>
        <title>Projeto de Segurança Contra Incêndio e Pânico</title>
      </Head>
      <div className={styles.form}>
        <label>Divisão</label>
        <select value={div} onChange={({ target }) => setDiv(target.value)}>
          {divisao[sele]?.map((item, index) => {
            return (
              <option key={index} value={index}>
                {item}
              </option>
            );
          })}
        </select>
        <label>Descrição</label>
        <select value={desc} onChange={({ target }) => setDesc(target.value)}>
          {descricao[sele][div]?.map((item, index) => {
            return (
              <option key={index} value={index}>
                {item.descricao}
              </option>
            );
          })}
        </select>
        <button onClick={handleNext}>Próximo</button>
        <button onClick={() => router.back()}>Voltar</button>
      </div>
    </>
  );
};

export default PageDivisao;
