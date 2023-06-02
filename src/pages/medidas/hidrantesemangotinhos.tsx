import React from 'react'
import ReservaTecnica from '../../../Bases/reserva'
import { useRouter } from 'next/router'

const HidrantesemangotinhosPage = () => {
  const router = useRouter()
  const {altura, area, carga, ocupacao} = router.query
  if(typeof area === "string" && typeof carga === "string" && typeof ocupacao === "string"){
    return (
      <>
        <ReservaTecnica area={area} cargaIncendio={carga} ocupacao={ocupacao}/>
      </>
    )
  }
}

export default HidrantesemangotinhosPage
