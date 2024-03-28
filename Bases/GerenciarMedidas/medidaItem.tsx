import React from 'react'
import { FaTrash } from 'react-icons/fa'

type medidaItemProps = {
  name: string
  onDelete: () => void
}

const MedidaItem = ({name, onDelete}: medidaItemProps) => {
  return (
    <> 
      <div className='d-flex justify-content-between align-items-center'>
        <span>{name}</span>
        <button className='btn p-0' onClick={onDelete}><FaTrash size={12}/></button>
      </div>  
    </>
  )
}

export default MedidaItem
