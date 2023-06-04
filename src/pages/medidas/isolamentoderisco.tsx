import React from 'react'
import Isolamento from '../../../Bases/isolamento'
import { useRouter } from 'next/router'

const Isolamentoderisco = () => {
  const router = useRouter()
  const {carga} = router.query
  if(typeof carga === 'string'){
    return (
      <>
        <Isolamento/>
      </>
    )
  }
}

export default Isolamentoderisco
