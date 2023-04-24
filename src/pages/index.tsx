import React from 'react';
import Head from 'next/head';
import Ocupacoes from '../../Bases/ocupacao';
import Divisao from '../../Bases/divisao';
import styles from './home.module.css';
import { useRouter } from 'next/router';
import Descricao from '../../Bases/descricao';

interface finalProps{
  divisao: string,
  descricao: string,
  cargaincendio: number
}

export default function Home() {
  const router = useRouter();
  const ocupacoes = Ocupacoes();
  const {divisao} = Divisao();
  const {descricao} = Descricao();
  const [select, setSelect] = React.useState<number | any>(0);
  const [div, setDiv] = React.useState<number | any>(0)
  const [desc, setDesc] = React.useState<number | any>(0);
  const [final, setFinal] = React.useState<finalProps>(descricao[select][div][desc])
  const [alt, setAlt] = React.useState('');
  const [area, setArea] = React.useState('');
  const [tipo, setTipo] = React.useState<string>('existente');
  const ocup = final
  console.log(ocup)
  React.useEffect(() =>{
    setFinal(descricao[select][div][desc]) 
  },[div, select, desc])

  return (
    <>
      <Head>
        <title>Projeto de Segurança Contra Incêndio e Pânico</title>
      </Head>
      <div className={styles.form}>
        <label>Ocupação</label>
        <select onChange={({ target }) => setSelect(target.value)}>
          {ocupacoes?.map((item, index) => {
            return (
              <option key={index} value={index}>
                {item}
              </option>
            );
          })}
        </select>
        <label>Divisão</label>
        <select onChange={({ target }) => setDiv(target.value)}>
          {divisao[select]?.map((item, index) => {
            return (
              <option key={index} value={index}>
                {item}
              </option>
            );
          })}
        </select>
        <label>Descrição</label>
        <select onChange={({ target }) => setDesc(target.value)}>
          {descricao[select][div].map((item, index)=>{
            return(
              <option key={index} value={index}>{item.descricao}</option>
            )
          })}
        </select>
        <label>Altura</label>
        <input
          type="text"
          placeholder="ex: 9.34 metros"
          value={alt}
          onChange={({ target }) => setAlt(target.value)}
        />
        <label>Área total</label>
        <input
          type="text"
          placeholder="ex: 945.3 m²"
          value={area}
          onChange={({ target }) => setArea(target.value)}
        />
        <div className={styles.data}>
          <h3>Data de construção</h3>
          <div>
            <input
              type="radio"
              name="construcao"
              id="existente"
              value="existente"
              checked={tipo === 'existente'}
              onChange={({ target }) => setTipo(target.value)}
            />
            <label htmlFor="existente">
              Existente - Edificação Construída anterior a 2 de julho de 2005
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="construcao"
              id="construida"
              value="construida"
              checked={tipo === 'construida'}
              onChange={({ target }) => setTipo(target.value)}
            />
            <label htmlFor="construida">
              Construída - Edificação Construída entre 2 de julho de 2005 e 31
              de dezembro de 2016
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="construcao"
              id="nova"
              value="nova"
              checked={tipo === 'nova'}
              onChange={({ target }) => setTipo(target.value)}
            />
            <label htmlFor="nova">
              Nova - Edificação Construída após 31 de dezembro de 2016
            </label>
          </div>
        </div>
        <button
          onClick={() =>
            router.push(`/result?index=${ocup.divisao}&alt=${alt}&area=${area}&data=${tipo}`)
          }
        >
          Próximo
        </button>
      </div>
    </>
  );
}
