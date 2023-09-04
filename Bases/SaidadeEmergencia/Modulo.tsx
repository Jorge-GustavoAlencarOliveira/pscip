import React from 'react';
import TabelaSaidaEmergencia from './tabelaSaidaEmergencia';
import { moduloProps } from './ModuloReducer';
import { unidadePassagem, porta } from './Calculo';
interface ModuloProps {
  modulo: moduloProps;
  onDelete: (id: number) => void;
}

const Modulo = ({ modulo, onDelete }: ModuloProps) => {
  const { divisao } = TabelaSaidaEmergencia();
  const div = modulo.divisao;
  if (typeof div === 'number') {
    return (
      <div className="d-flex justify-content-between mb-4 p-2 border border-secondary rounded-2">
        <div className="d-flex flex-column gap-2">
          <span>{modulo.ambiente}</span>
          <span>Divisão: {divisao[div][0]}</span>
          {divisao[div][0] === 'A-1' || divisao[div][0] === 'A-2' ? (
            <span>Dormitórios: {modulo.text} unidades</span>
          ) : (
            <span>Área: {modulo.text} m²</span>
          )}
          {modulo.text1 && (
            <span>Dormitório/Leito: {modulo.text1} unidades</span>
          )}
          <span>População: {modulo.populacao} pessoas</span>
          <span>
            Acessos e Descargas: N = P/C = {modulo.populacao}/
            {divisao[div][1][0]} ={' '}
            {modulo.acesso && modulo.acesso < 2 ? 2 : modulo.acesso} U.P.(s) ={' '}
            {modulo.acesso && modulo.acesso < 2
              ? unidadePassagem(2)
              : unidadePassagem(modulo.acesso)}{' '}
            m
          </span>
          <span>
            Escadas e Rampas: N = P/C = {modulo.populacao}/{divisao[div][1][1]}{' '}
            = {modulo.escada && modulo.escada < 2 ? 2 : modulo.escada} U.P.(s) ={' '}
            {modulo.acesso && modulo.acesso < 2
              ? unidadePassagem(2)
              : unidadePassagem(modulo.escada)}{' '}
            m
          </span>
          <span>
            Portas: N = P/C = {modulo.populacao}/{divisao[div][1][2]} ={' '}
            {modulo.porta <= 4
              ? modulo.porta.toString().replace('.', ',')
              : Math.ceil(modulo.porta)}{' '}
            U.P.(s) = {porta(modulo.porta)}
          </span>
        </div>
        <div>
          <button
            className="btn btn-secondary float-end"
            onClick={() => onDelete(modulo.id)}
          >
            Excluir
          </button>
        </div>
      </div>
    );
  }
  return null;
};

export default Modulo;
