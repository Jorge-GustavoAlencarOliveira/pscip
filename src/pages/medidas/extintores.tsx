import React from 'react'
import Extintor from '../../../Bases/extintor'
import { useRouter } from 'next/router'

const ExtintoresPage = () => {
  const router = useRouter()
  const {carga} = router.query
  if(typeof carga === "string"){
    return (
      <>
      </>
    )
  }
  return null
}

export default ExtintoresPage
