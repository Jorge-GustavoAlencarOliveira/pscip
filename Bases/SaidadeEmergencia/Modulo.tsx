import React from 'react';
import TabelaSaidaEmergencia from './tabelaSaidaEmergencia';
import { moduloProps } from './ModuloReducer';
import { unidadePassagem, calculoPorta, transformarString } from './Calculo';

interface ModuloProps {
  modulo: moduloProps;
  onDelete?: (id: number) => void;
}

const Modulo = ({ modulo, onDelete }: ModuloProps) => {
  const { divisao } = TabelaSaidaEmergencia();
  const {
    acesso,
    escada,
    porta,
    text1,
    text,
    ambiente,
    populacao,
    id,
    divisao: div,
  } = modulo;
  if (typeof div === 'number') {
    return (
      <div className="d-flex justify-content-between mb-4 p-2 border border-primary rounded-2">
        <div className="d-flex flex-column gap-2">
          <div>
            <span className="fw-bold">Ambiente: </span>
            <span>{ambiente}</span>
          </div>
          <div>
            <span className="fw-bold">Divisão: </span>
            <span>{divisao[div][0]}</span>
          </div>
          {divisao[div][0] === 'A-1' || divisao[div][0] === 'A-2' ? (
            <div>
              <span className="fw-bold">Dormitórios: </span>
              <span>{text} unidades</span>
            </div>
          ) : (
            <div>
              {divisao[div][0] === 'G-1' ? (
                <div>
                  <span className="fw-bold">Vagas: </span>
                  <span>{text} </span>
                </div>
              ) : (
                <div>
                  <span className="fw-bold">Área: </span>
                  <span>{text} m²</span>
                </div>
              )}
            </div>
          )}
          {text1 && (
            <div>
              <span className="fw-bold">Dormitório/Leito: </span>
              <span>{text1} unidades</span>
            </div>
          )}
          <div>
            <span className="fw-bold">População: </span>
            <span>{populacao} pessoas</span>
          </div>
          <div>
            <span className="fw-bold">Acessos e Descargas: </span>
            <span>
              N = P/C = {populacao}/{divisao[div][1][0]} ={' '}
              {transformarString(acesso)} ={' '}
              {acesso && acesso < 2 ? 2 : Math.ceil(acesso)} U.P. ={' '}
              {acesso && acesso < 2
                ? unidadePassagem(2)
                : unidadePassagem(acesso)}{' '}
              m
            </span>
          </div>
          <div>
            <span className="fw-bold">Escadas e Rampas: </span>
            <span>
              N = P/C = {populacao}/{divisao[div][1][1]} ={' '}
              {transformarString(escada)} ={' '}
              {escada && escada < 2 ? 2 : Math.ceil(escada)} U.P. ={' '}
              {escada && escada < 2
                ? unidadePassagem(2)
                : unidadePassagem(escada)}{' '}
              m
            </span>
          </div>
          <div>
            <span className="fw-bold">Portas: </span>
            <span>
              N = P/C = {populacao}/{divisao[div][1][2]} ={' '}
              {transformarString(porta)} ={' '}
              {porta <= 4
                ? transformarString(porta)
                : Math.ceil(porta)}{' '}
              U.P. = {calculoPorta(porta)}
            </span>
          </div>
        </div>
        <div>
          <button
            className="btn btn-secondary float-end"
            onClick={() => onDelete(id)}
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
