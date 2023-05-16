import React from "react";
import { DataStorage } from "../dataContext";

const Extintor = () => {
  const {cargaIncendio} = React.useContext(DataStorage)
  const carga = cargaIncendio;

  if (carga) {
    if (carga <= 300) {
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
    if (carga > 300 && carga <= 1200) {
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
    if (carga > 1200) {
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
  }
  return null
};

export default Extintor;
