import React from 'react'
import { ChangeEvent } from 'react'

const Construcao = () => {
  const [tipo, setTipo] = React.useState<string>('construida')
   
  return (
    <div>
      <h2>Data de construção</h2>
      <input
        type='radio'
        name='construcao'
        id='construida'
        value='construida'
        checked={tipo === "construida"}
        onChange={({target}) => setTipo(target.value)}
      />
      <label htmlFor='construida'>Edificação Construída antes de 2005</label>
      <input
        type='radio'
        name='construcao'
        id='existente'
        value='existente'
        checked={tipo === "existente"}
        onChange={({target}) => setTipo(target.value)}
      />
      <label htmlFor='existente'>Edificação Construída entre 2005 e 2016</label>
      <input
        type='radio'
        name='construcao'
        id='nova'
        value='nova'
        checked={tipo === "nova"}
        onChange={({target}) => setTipo(target.value)}
      />
      <label htmlFor='nova'>Edificação Construída após 2016</label>
    </div>
  )
}

export default Construcao
