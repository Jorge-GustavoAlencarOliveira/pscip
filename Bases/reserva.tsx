import React from 'react';
import { DataStorage } from '../dataContext';
import ReservaTecnicaTabela from '../Tabelas/ReservaTecnicaTabela';

const ReservaTecnica = () => {
  const { area, cargaIncendio, ocupacao } = React.useContext(DataStorage);
  const { reservaTecnica, metodos } = ReservaTecnicaTabela();
  const valor = reservaTecnica.map((item) => {
    if (ocupacao) {
      return item.includes(ocupacao);
    }
  });
  const metodo = valor.findIndex((item) => item === true);

  if (metodo === 4 && ocupacao === 'F-1' && Number(cargaIncendio) > 300)
    return (
      <div>
        <h1>Reserva Técnica</h1>
        <ul>
          {metodos[2]?.area(Number(area))?.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    );
  if (
    metodo === 4 &&
    Number(cargaIncendio) <= 300 &&
    ocupacao === 'D-1' || 
    ocupacao === 'D-3' || 
    ocupacao === 'D-4' ||
    ocupacao === 'F-1' ||
    ocupacao ===  'F-10' ||
    ocupacao ===  'F-11 ' ||
    ocupacao ===  'G-4' ||
    ocupacao ===  'M-3'
  )
    return (
      <div>
        <h1>Reserva Técnica</h1>
        <ul>
          {metodos[0]?.area(Number(area))?.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    );
  if (
    metodo === 4 && 
    Number(cargaIncendio) > 300 &&
    ocupacao === 'D-1' ||
    ocupacao === 'D-3' ||
    ocupacao === 'D-4' ||
    ocupacao === 'F-11' ||
    ocupacao === 'G-4' 
  ) {
    return (
      <div>
        <h1>Reserva Técnica</h1>
        <ul>
          {metodos[1]?.area(Number(area))?.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
  if (
    metodo === 4 && 
    Number(cargaIncendio) > 800 && 
    ocupacao === 'C-2' ||
    ocupacao === 'F-10' ||
    ocupacao === 'I-2' ||
    ocupacao === 'J-3' ||
    ocupacao === 'M-3' 
  )
    return (
      <div>
        <h1>Reserva Técnica</h1>
        <ul>
          {metodos[2]?.area(Number(area))?.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    );
  if (
    metodo === 4 && 
    Number(cargaIncendio) > 300 &&
    Number(cargaIncendio) <= 800 &&
    ocupacao === 'C-2' ||
    ocupacao === 'F-10' ||
    ocupacao === 'I-2' ||
    ocupacao === 'J-3' ||
    ocupacao === 'M-3' 
  )
    return (
      <div>
        <h1>Reserva Técnica</h1>
        <ul>
          {metodos[1]?.area(Number(area))?.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    );
  return (
    <div>
      <h1>Reserva Técnica</h1>
      <ul>
        {metodos[metodo]?.area(Number(area))?.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default ReservaTecnica;
