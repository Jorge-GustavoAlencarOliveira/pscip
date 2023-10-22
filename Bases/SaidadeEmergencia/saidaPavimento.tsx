import React from 'react';
import { moduloProps } from './ModuloReducer';
import { transformarString, unidadePassagem, calculoPorta } from './Calculo';

interface saidaPavimentoProps {
  modulos: moduloProps[];
}

const SaidaPavimento = ({ modulos }: saidaPavimentoProps) => {
  const unidadePassagemTotal = modulos.reduce(
    (acc, modulo) => {
      const valores = {
        ...acc,
        acesso: acc.acesso + modulo.acesso,
        escada: acc.escada + modulo.escada,
        porta: acc.porta + modulo.porta,
      };
      return valores;
    },
    { acesso: 0, escada: 0, porta: 0 },
  );

  const { acesso, escada, porta } = unidadePassagemTotal;

  return (
    <>
      {modulos.length > 1 && (
        <div className="d-flex flex-column  ">
          <div>
            <span className='fw-bold'>Acessos e Descargas:{' '}</span>
            {modulos.map((ambiente, index) => (
              <span>
                {transformarString(ambiente.acesso)}{' '}
                {index !== modulos.length - 1 ? ' + ' : ' = '}
              </span>
            ))}{' '}
            <span>
              {modulos.length > 1 && <span>{transformarString(acesso)} = {' '}</span>} 
              {acesso && acesso < 2 ? 2 : Math.ceil(acesso)} U.P. ={' '}
              {acesso && acesso < 2
                ? unidadePassagem(2)
                : unidadePassagem(Math.ceil(acesso))}{' '} m
            </span> 
          </div>
          <div>
            <span className='fw-bold'>Escadas e Rampas:{' '}</span>
              {modulos.map((ambiente, index) => (
                <span>
                  {transformarString(ambiente.escada)}{' '}
                  {index !== modulos.length - 1 ? ' + ' : ' = '}
                </span>
              ))}{' '}
            <span>
              {modulos.length > 1 && <span>{transformarString(escada)} = {' '}</span>}
              {escada && escada < 2 ? 2 :  Math.ceil(escada)} U.P. ={' '}
              {escada && escada < 2
                ? unidadePassagem(2)
                : unidadePassagem(Math.ceil(escada))}{' '}m
            </span>
          </div>
          <div>
              <span className='fw-bold'>
                Portas:{' '}
              </span>
              {modulos.map((ambiente, index) => (
                <span>
                  {transformarString(ambiente.porta)}{' '}
                  {index !== modulos.length - 1 ? ' + ' : ' = '}
                </span>
              ))}{' '}
              <span>
              {modulos.length > 1 && <span>{transformarString(porta)} = {' '}</span>}
              {porta <= 4
                ? transformarString(porta)
                : Math.ceil(porta)}{' '}
              U.P. = {calculoPorta(porta)}
              </span>
          </div>
        </div>
      )}
    </>
  );
};

export default SaidaPavimento;

