import React from 'react'
import { useRouter } from 'next/router'
import A1 from '../../Ocupacoes/A1'
import Head from 'next/head'

const Result = () => {
  const router = useRouter()
  const {index, alt, area, data} = router.query;
  if (index === 'A-2'){
    return(
      <div>
        <Head>
          <title>Medidas de Segurança</title>
        </Head>
        <A1 index={index} area={Number(area)} altura={Number(alt)}/>
        <button onClick={() => router.push('/')}>Voltar</button>
      </div>
    )
  } return null
}

export default Result
