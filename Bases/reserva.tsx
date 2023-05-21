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
    (ocupacao === 'D-1' ||
      'D-3' ||
      'D-4' ||
      'F-1' ||
      'F-10' ||
      'F-11 ' ||
      'G-4' ||
      'M-3')
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
    (ocupacao === 'D-1' || 'D-3' || 'D-4' || 'F-11' || 'G-4') &&
    Number(cargaIncendio) > 300
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
  if (
    metodo === 4 &&
    (ocupacao === 'C-2' || 'F-10' || 'I-2' || 'J-3' || 'M-3') &&
    Number(cargaIncendio) > 300 &&
    Number(cargaIncendio) <= 800
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
  if (
    metodo === 4 &&
    (ocupacao === 'C-2' || 'F-10' || 'I-2' || 'J-3' || 'M-3') &&
    Number(cargaIncendio) > 800
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
