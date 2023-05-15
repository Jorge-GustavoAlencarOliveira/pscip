import React from 'react'
import { useRouter } from 'next/router'
import A1 from '../../Ocupacoes/A1'
import Head from 'next/head'
import { DataStorage } from '../../dataContext'

const Result = () => {
  const router = useRouter()
  const dados = React.useContext(DataStorage);
  if(dados){
    const {ocupacao, altura, area, dataConstrucao, cargaIncendio} = dados
    if (ocupacao === 'A-2'){
      return(
        <div>
          <Head>
            <title>Medidas de Segurança</title>
          </Head>
          <A1 index={ocupacao} area={Number(area)} altura={Number(altura)}/>
          <button onClick={() => router.back()}>Voltar</button>
          
        </div>
      )
    } 
  }
  return null
}

export default Result
