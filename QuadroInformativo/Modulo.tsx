import React from 'react'
import { modulosProps } from './QuadroReducer'
import { FaTrash } from 'react-icons/fa';
interface moduloProps{
  modulo: modulosProps;
  onDelete: (id:number) => void
  referencia: (id: number, referencia: string) => void
}
const Modulo = ({onDelete, modulo,referencia}:moduloProps) => {

  return (
   
    <tr>
      <td>{modulo.medida}</td>
      <td colSpan={3}>
        <textarea className='w-100 flex-grow-1' value={modulo.referencia} onChange={({target}) => referencia(modulo.id, target.value)}/>
      </td>
      <td className='mx-auto' style={{width: '5%'}}>
        <button className='btn' onClick={() => onDelete(modulo.id)}>
          <FaTrash size={20} color='red'/>
        </button>
      </td>
    </tr>
  )
}

export default Modulo
