import React from "react"
import { gerenciamentoMedidasReducer } from "./gerenciamentoMedidasReducer"

export const useGerenciamentoMedidas = (medidas: string[]) => {
  const medidasInicial = medidas || []
  const [modulos, dispatch] = React.useReducer(gerenciamentoMedidasReducer, medidasInicial)
  function handleAddMedida (medida: string){
    dispatch({
      type: 'add',
      medida
    })
  }
  function handleDeleteMedida (medida: string){
    dispatch({
      type: 'delete',
      medida
    })
  }
  function handleUpdate (medidas: string[]){
    dispatch({
      type: 'update',
      updateMedidas: medidas
    })
  }
  return {modulos, handleAddMedida, handleDeleteMedida, handleUpdate}
} 

