import React from 'react'
import { useRouter } from 'next/router'
import A1 from '../../Ocupacoes/A1'
import Head from 'next/head'
import { DataStorage } from '../../dataContext'

const Result = () => {
  const router = useRouter()
  const {data} = React.useContext(DataStorage);
  if(data){
    const {ocupacao, altura, area, dataconstrucao, cargaincendio} = data
    if (ocupacao === 'A-2'){
      return(
        <div>
          <Head>
            <title>Medidas de Segurança</title>
          </Head>
          <A1 index={ocupacao} area={Number(area)} altura={Number(altura)}/>
          <button onClick={() => router.push('/')}>Voltar</button>
        </div>
      )
    } 
  }
   console.log(data) 
  return null
}

export default Result
