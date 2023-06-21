import React from 'react'
import { moduloProps } from './IsolamentoReducer'
import Modulo from './Modulo'

interface ModuloProps{
  modulos: moduloProps[],
  onDelete: (id:number) => void
}

const ModuloShow = ({modulos, onDelete}:ModuloProps) => {
  return (
    <div>
      {modulos.map(item => {
        return (
          <div key={item.id}>
            <Modulo  modulo={item} onDelete={onDelete} />
            <div>
              <h2>Edificação expositora: { item.risco1?.distancia && item.risco2?.distancia &&(item.risco1?.distancia > item.risco2?.distancia) ?  item.risco1?.risco : item.risco2?.risco}</h2>
              <h2>Edificação em exposição: {item.risco1?.distancia && item.risco2?.distancia && (item.risco1?.distancia < item.risco2?.distancia) ?  item.risco1?.risco : item.risco2?.risco} </h2>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ModuloShow



