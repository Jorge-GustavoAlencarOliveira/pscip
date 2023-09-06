import React from 'react'
import TabelaDescricao from '../Tabelas/tabelaDescricao';
import TabelaOcupacao from '../Tabelas/tabelaOcupacao';
import { FaTrash } from 'react-icons/fa';

interface showOcupacaoRrops{
  modulo: number[]
  onDelete: () => void
}

const ShowOcupacao = ({modulo, onDelete}:showOcupacaoRrops) => {
  const {descricao} = TabelaDescricao();
  const {ocupacao, grupo} = TabelaOcupacao()
  return (
    <tr className='text-center'>
      <td>{grupo[modulo[0]]}</td>
      <td>{ocupacao[modulo[0]]}</td>
      <td>{descricao[modulo[0]][modulo[1]][modulo[2]].divisao}</td>
      <td>{descricao[modulo[0]][modulo[1]][modulo[2]].descricao}</td>
      <td>{descricao[modulo[0]][modulo[1]][modulo[2]].cargaincendio} MJ/m²</td>
      <td>
        <button onClick={onDelete} className='btn'>
          <FaTrash size={20} color='red'/>
        </button>
        </td>
    </tr>
  )
}

export default ShowOcupacao
