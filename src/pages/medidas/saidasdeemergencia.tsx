import React from 'react'
import Numerodesaidas from '../../../Bases/numerodesaidas'
import { useRouter } from 'next/router'

const SaidasdeemergenciaPage = () => {
  const router = useRouter()
  const {altura, area, carga, ocupacao} = router.query
  if(typeof altura === "string" && typeof ocupacao === "string"){
    return (
      <>
        <Numerodesaidas altura={altura} ocupacao={ocupacao}/>
      </>
    )
  }
}

export default SaidasdeemergenciaPage
