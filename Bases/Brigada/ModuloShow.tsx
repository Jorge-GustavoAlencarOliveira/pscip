import React from 'react'
import { moduloProps } from './BrigadaReducer'
import Modulo from './Modulo'
import Pdf from '../../geradorPdf/pdf'
interface ModuloShowProps {
  modulos: moduloProps[],
  onDelete: (id: number) => void
}

const ModuloShow = ({modulos, onDelete}: ModuloShowProps ) => {
  const totalBrigadistas = modulos?.map((item) => item.brigadistas).reduce((acc, atual) => {
    if (typeof acc === 'number' && typeof atual === 'number') {
      return acc + atual;
    }
  }, 0);

  return (
    <>
      <div>
        {modulos.map(modulo => {
          return (
            <div key={modulo.id}>
              <Modulo modulo={modulo} onDelete={onDelete} />
            </div>
          )
        })}
      </div>
      {totalBrigadistas !== 0 && (
        <div>
          <h3>Total de brigadistas: {totalBrigadistas}</h3>
          <button onClick={() => Pdf(modulos, totalBrigadistas)}>Gerar Quadro Resumo</button>
        </div>
      )}

    </>
  )
}

export default ModuloShow
