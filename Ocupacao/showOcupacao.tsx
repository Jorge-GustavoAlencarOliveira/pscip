import React from 'react'
import TabelaDescricao from '../Tabelas/tabelaDescricao';
import TabelaOcupacao from '../Tabelas/tabelaOcupacao';
type arrayProps = [number, number, number]

interface showOcupacaoRrops{
  modulo: number[]
  onDelete: (id: number) => void
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
    </tr>
  )
}

export default ShowOcupacao
