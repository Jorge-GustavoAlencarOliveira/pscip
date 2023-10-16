import React from 'react';
import TabelaDescricao from '../Tabelas/tabelaDescricao';
import TabelaOcupacao from '../Tabelas/tabelaOcupacao';
import { FaTrash } from 'react-icons/fa';

interface showOcupacaoRrops {
  modulo: number[];
  onDelete: () => void;
}

const ShowOcupacao = ({ modulo, onDelete }: showOcupacaoRrops) => {
  const { descricao } = TabelaDescricao();
  const { ocupacao, grupo } = TabelaOcupacao();
  const [ocup, div, desc] = modulo;
  return (
    <tr className="text-center">
      <td>{grupo[modulo[0]]}</td>
      <td>{ocupacao[ocup]}</td>
      <td>{descricao[ocup][div][desc].divisao}</td>
      <td>{descricao[ocup][div][desc].descricao}</td>
      <td>{descricao[ocup][div][desc].cargaincendio} MJ/m²</td>
      <td>
        <button onClick={onDelete} className="btn">
          <FaTrash size={20} color="red" />
        </button>
      </td>
    </tr>
  );
};

export default ShowOcupacao;
