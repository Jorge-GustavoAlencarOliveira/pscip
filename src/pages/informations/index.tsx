import React from 'react'
import Head from 'next/head'
import { DataStorage } from '../../../dataContext'
import styles from '../home.module.css'
import { useRouter } from 'next/router'
const index = () => {
  const router = useRouter();
  const {allStates} = React.useContext(DataStorage)
  const [alt, setAlt] = React.useState<string>('');
  const [area, setarea] = React.useState<string>('');
  const [tipo, setTipo] = React.useState<string>('existente');

  function handleNext(){
    allStates({altura: Number(alt), area: Number(area), dataConstrucao: tipo})
    router.push('/informations/ocupacao')
  }
  return (
    <>
      <Head>
        <title>Projeto de Segurança Contra Incêndio e Pânico</title>
      </Head>
      <div className={styles.form}>
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
          onChange={({ target }) => setarea(target.value)}
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
        <button onClick={handleNext}>Próximo</button>
      </div>
    </>
  )
}

export default index
