import React from 'react'
import Numerodesaidas from '../../../Bases/numerodesaidas'
import { useRouter } from 'next/router'
import CalculoSaidas from '../../../Bases/calculosaidas'

const SaidasdeemergenciaPage = () => {
  const router = useRouter()
  const {altura, ocupacao} = router.query
  if(typeof altura === "string" && typeof ocupacao === "string"){
    return (
      <>
        <Numerodesaidas altura={altura} ocupacao={ocupacao}/>
        <CalculoSaidas />
      </>
    )
  }
  return (
    <CalculoSaidas />
  )
}

export default SaidasdeemergenciaPage
