import React from "react";

interface extintorProps {
  cargaIncendio: string
}

const Extintor = ({cargaIncendio}:extintorProps) => {
   
    if (+cargaIncendio <= 300) {
      return (
        <div>
          <h1>Extintores</h1>
          <div style={{ display: 'flex', gap: '4rem' }}>
            <div>
              <p>Classe A</p>
              <p>Capacidade extintora mínima: </p>
              <span>2-A</span>
              <p>Distância máxima a ser percorrida:</p>
              <span>20 m</span>
            </div>
            <div>
              <p>Classe B</p>
              <p>Capacidade extintora mínima: </p>
              <span>20-B</span>
              <p>Distância máxima a ser percorrida:</p>
              <span>15 m</span>
            </div>
          </div>
        </div>
      );
    }
    if (+cargaIncendio > 300 && +cargaIncendio <= 1200) {
      return (
        <div>
          <h1>Extintores</h1>
          <div style={{ display: 'flex', gap: '4rem' }}>
            <div>
              <p>Classe A</p>
              <p>Capacidade extintora mínima: </p>
              <span>3-A</span>
              <p>Distância máxima a ser percorrida:</p>
              <span>20 m</span>
            </div>
            <div>
              <p>Classe B</p>
              <p>Capacidade extintora mínima: </p>
              <span>40-B</span>
              <p>Distância máxima a ser percorrida:</p>
              <span>15 m</span>
            </div>
          </div>
        </div>
      );
    }
    if (+cargaIncendio > 1200) {
      return (
        <div>
          <h1>Extintores</h1>
          <div style={{ display: 'flex', gap: '4rem' }}>
            <div>
              <p>Classe A</p>
              <p>Capacidade extintora mínima: </p>
              <span>3-A</span>
              <p>Distância máxima a ser percorrida:</p>
              <span>15 m</span>
              <p>Capacidade extintora mínima: </p>
              <span>4-A</span>
              <p>Distância máxima a ser percorrida:</p>
              <span>20 m</span>
            </div>
            <div>
              <p>Classe B</p>
              <p>Capacidade extintora mínima: </p>
              <span>40-B</span>
              <p>Distância máxima a ser percorrida:</p>
              <span>10 m</span>
              <p>Capacidade extintora mínima: </p>
              <span>80-B</span>
              <p>Distância máxima a ser percorrida:</p>
              <span>15 m</span>
            </div>
          </div>
        </div>
      );
    }
    return null
};

export default Extintor;
