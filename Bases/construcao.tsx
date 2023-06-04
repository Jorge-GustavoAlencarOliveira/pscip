import React, {Dispatch, SetStateAction} from 'react'

interface dadosProps {
  areaConstruida: string;
  areaAconstruir: string;
  altura: string;
  pavimentos: string;
  areaTotal: number;
  dataConstrucao: string;
}

type propsConstrucao = {
  dados: dadosProps,
  setDados: Dispatch<SetStateAction<dadosProps>>
}

const Construcao = ({setDados, dados}: propsConstrucao ) => {
  
  return (
    <div>
      <h4>Data de construção</h4>
      <div>
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
        <label htmlFor='existente'>Edificação Existente (construída até 01Jul2005)</label>
      </div>
      <div>
        <input
          type='radio'
          id='construida'
          value="Construída"
          checked={dados.dataConstrucao === "Construída"}
          onChange={({target}) => setDados(item => ({...item, dataConstrucao: target.value}))}
        />
        <label htmlFor='construida'>Edificação Construída (construída entre 02Jul2005 e 31Dez2016)</label>
      </div>
      <div>
        <input
          type='radio'
          id='nova'
          value="Nova"
          checked={dados.dataConstrucao === "Nova"}
          onChange={({target}) => setDados(item => ({...item, dataConstrucao: target.value}))}
        />
        <label htmlFor='nova'>Edificação Nova (construída após 31Dez2016)</label>
      </div>
    </div>
  )
}

export default Construcao
