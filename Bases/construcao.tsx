import React, {Dispatch, SetStateAction} from 'react'

interface dadosProps {
  areaConstruida: string;
  areaAconstruir: string;
  altura: string;
  pavimentos: string;
  areaTotal: number;
  dataConstrucao: string;
  compartimentacao: string
}

type propsConstrucao = {
  dados: dadosProps,
  setDados: Dispatch<SetStateAction<dadosProps>>
}

const Construcao = ({setDados, dados}: propsConstrucao ) => {
  
  return (
    <div className='d-flex flex-column gap-2 mb-4'>
      <span className='fw-bold'>Data de construção:</span>
      <div className='d-flex flex-column gap-2'>
        <div className='d-flex gap-2 align-items-center'>
          <input
            type='radio'
            id='existente'
            value="Existente"
            checked={dados.dataConstrucao === "Existente"}
            onChange={({target}) => {
              setDados(item => ({...item, dataConstrucao: target.value}))
            }
          }
          />
          <label htmlFor='existente'>Edificação Existente (construída até 01 de julho de 2005)</label>
        </div>
        <div  className='d-flex gap-2 align-items-center'>
          <input
            type='radio'
            id='construida'
            value="Construída"
            checked={dados.dataConstrucao === "Construída"}
            onChange={({target}) => setDados(item => ({...item, dataConstrucao: target.value}))}
          />
          <label htmlFor='construida'>Edificação Construída (construída entre 02 de julho de 2005 e 31 de dezembro de 2016)</label>
        </div>
        <div  className='d-flex gap-2 align-items-center'>
          <input
            type='radio'
            id='nova'
            value="Nova"
            checked={dados.dataConstrucao === "Nova"}
            onChange={({target}) => setDados(item => ({...item, dataConstrucao: target.value}))}
          />
          <label htmlFor='nova'>Edificação Nova (construída após 31 de dezembro de 2016)</label>
        </div>
      </div>
    </div>
  )
}

export default Construcao
