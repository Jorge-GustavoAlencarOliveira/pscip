import React from 'react'
import { modulosProps } from './QuadroReducer'
import { FaTrash } from 'react-icons/fa';
import { QuadroInformativoContext } from './useContext';
interface moduloProps{
  modulo: modulosProps;
}
const Modulo = ({modulo}:moduloProps) => {
  const {handleReferencia, handleDelete} = React.useContext(QuadroInformativoContext) 
  
  return (
   
    <tr>
      <td>{modulo.medida}</td>
      <td colSpan={4}>
        <textarea className='w-100 flex-grow-1' value={modulo.referencia} onChange={({target}) => handleReferencia(modulo.id, target.value)}/>
      </td>
      <td className='text-center' style={{width: '5%'}}>
        <button className='btn' onClick={() => handleDelete(modulo.id)}>
          <FaTrash size={20} color='red'/>
        </button>
      </td>
    </tr>
  )
}

export default Modulo
