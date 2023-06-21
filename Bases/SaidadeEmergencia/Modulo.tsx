import React from 'react';
import TabelaSaidaEmergencia from './tabelaSaidaEmergencia';
import { moduloProps } from './ModuloReducer';

interface ModuloProps {
  modulo: moduloProps;
  onDelete: (id: number) => void;
}

const Modulo = ({ modulo, onDelete }: ModuloProps) => {
  const { divisao } = TabelaSaidaEmergencia();
  const div = modulo.divisao;
  if (typeof div === 'number') {
    return (
      <> 
        <button style={{ float: 'right' }} onClick={() => onDelete(modulo.id)}>Excluir</button>
        <p>Ambiente: {modulo.ambiente}</p>
        <p>Divisão: {divisao[div][0]}</p>
        {divisao[div][0] === 'A-1' || divisao[div][0] === 'A-2' ? (
          <p>Dormitórios: {modulo.text} unidades</p>
        ) : (
          <p>Área: {modulo.text} m²</p>
        )}
        {modulo.text1 && <p>Dormitório/Leito: {modulo.text1} unidades</p>}
        <p>População: {modulo.populacao} pessoas</p>
        <p> Acessos e descargas: {modulo.acesso} unidade(s) de passagem</p>
        <p>Escadas e rampas: {modulo.escada} unidade(s) de passagem</p>
        <p>Portas: {modulo.porta} unidade(s) de passagem</p>
      </>
    );
  }
  return null;
};

export default Modulo;
