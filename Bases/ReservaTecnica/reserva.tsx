import React from 'react';
import { reservaTecnica, metodos, definirReserva } from './TabelaReserva';
import { dadosOcupacao } from '../finddados';
import { Table } from 'react-bootstrap';
interface reservaProps {
  area: string;
  ocupacoes: number[][];
  divisao: number[];
}

const ReservaTecnica = ({ area, ocupacoes, divisao }: reservaProps) => {
  const numero = Number(
    parseFloat(
      area
        .replace(/[^0-9,.]/g, '')
        .replace(/[.]/g, '')
        .replace(',', '.'),
    ),
  );
  if (divisao) {
    const { divisao: ocupacao, cargaincendio } = dadosOcupacao(divisao);
    const metodo = reservaTecnica
      .map((item) => item.includes(ocupacao))
      .findIndex((item) => item === true);
    return (
      <>
        <h5 className="text-primary">Reserva Técnica</h5>
        <h6 className="fw-bold text-primary text-center">
                Divisão: {ocupacao}
              </h6>
        <Table className="table-primary text-center" striped bordered>
          <thead>
            <tr className="fw-bold">
              <td>Tipo de hidrante</td>
              <td>Volume Reserva Técnica</td>
            </tr>
          </thead>
          <tbody>
            {definirReserva(metodo, cargaincendio, numero, ocupacao)?.map(
              (item, index) => {
                if(metodo !== 0){
                  return (
                    <tr>
                      <td>{item[0]}</td>
                      <td>{item[1]}</td>
                    </tr>
                  );
                } else {
                  return (
                    <tr>
                      <td>{item[0]}</td>
                      <td>{item[1]}</td>
                    </tr>
                  );
                }
              },
            )}
          </tbody>
        </Table>
      </>
    );
  }
  if (ocupacoes) {
    return (
      <>
        <h5 className="text-primary">Reserva Técnica</h5>
        {ocupacoes.map((item) => {
          const { divisao: ocupacao, cargaincendio } = dadosOcupacao(item);
          const metodo = reservaTecnica
            .map((item) => item.includes(ocupacao))
            .findIndex((item) => item === true);
          return (
            <>
              <h6 className="fw-bold text-primary text-center">
                Divisão: {ocupacao}
              </h6>
              <Table className="table-primary text-center" striped bordered>
                <thead>
                  <tr className="fw-bold">
                    <td>Tipo de hidrante</td>
                    <td>Volume Reserva Técnica</td>
                  </tr>
                </thead>
                <tbody>
                  {definirReserva(metodo, cargaincendio, numero, ocupacao)?.map(
                    (item, index) => {
                      return (
                        <tr>
                          <td>{item[0]}</td>
                          <td>{item[1]}</td>
                        </tr>
                      );
                    },
                  )}
                </tbody>
              </Table>
            </>
          );
        })}
      </>
    );
  }
  return null;
};

export default ReservaTecnica;

// if (metodo === 4 && ocupacao === 'F-1' && cargaincendio > 300) {
//   return (
//     <div>
//       <h1>Reserva Técnica</h1>
//       <ul>
//         {metodos[2]?.area(area)?.map((item) => {
//           return <li key={item}>{item}</li>;
//         })}
//       </ul>
//     </div>
//   );
// }
// if (
//   (metodo === 4 && cargaincendio <= 300 && ocupacao === 'D-1') ||
//   ocupacao === 'D-3' ||
//   ocupacao === 'D-4' ||
//   ocupacao === 'F-1' ||
//   ocupacao === 'F-10' ||
//   ocupacao === 'F-11 ' ||
//   ocupacao === 'G-4' ||
//   ocupacao === 'M-3'
// ) {
//   return (
//     <div>
//       <h1>Reserva Técnica</h1>
//       <ul>
//         {metodos[0]?.area(area)?.map((item) => {
//           return <li key={item}>{item}</li>;
//         })}
//       </ul>
//     </div>
//   );
// }
// if (
//   (metodo === 4 && cargaincendio > 300 && ocupacao === 'D-1') ||
//   ocupacao === 'D-3' ||
//   ocupacao === 'D-4' ||
//   ocupacao === 'F-11' ||
//   ocupacao === 'G-4'
// ) {
//   return (
//     <div>
//       <h1>Reserva Técnica</h1>
//       <ul>
//         {metodos[1]?.area(area)?.map((item) => {
//           return <li key={item}>{item}</li>;
//         })}
//       </ul>
//     </div>
//   );
// }
// if (
//   (metodo === 4 && cargaincendio > 800 && ocupacao === 'C-2') ||
//   ocupacao === 'F-10' ||
//   ocupacao === 'I-2' ||
//   ocupacao === 'J-3' ||
//   ocupacao === 'M-3'
// ) {
//   return (
//     <div>
//       <h1>Reserva Técnica</h1>
//       <ul>
//         {metodos[2]?.area(area)?.map((item) => {
//           return <li key={item}>{item}</li>;
//         })}
//       </ul>
//     </div>
//   );
// }
// if (
//   (metodo === 4 &&
//     cargaincendio > 300 &&
//     cargaincendio <= 800 &&
//     ocupacao === 'C-2') ||
//   ocupacao === 'F-10' ||
//   ocupacao === 'I-2' ||
//   ocupacao === 'J-3' ||
//   ocupacao === 'M-3'
// ) {
//   return (
//     <div>
//       <h1>Reserva Técnica</h1>
//       <ul>
//         {metodos[1]?.area(area)?.map((item) => {
//           return <li key={item}>{item}</li>;
//         })}
//       </ul>
//     </div>
//   );
// }
// return (
//   <div>
//     <h1>Reserva Técnica</h1>
//     <ul>
//       {metodos[metodo]?.area(area)?.map((item, index) => {
//         return <li key={index}>{item}</li>;
//       })}
//     </ul>
//   </div>
// );
