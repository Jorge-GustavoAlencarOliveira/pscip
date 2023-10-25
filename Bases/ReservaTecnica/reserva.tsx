import React from 'react';
import { reservaTecnica, metodos } from './TabelaReserva';
import { dadosOcupacao } from '../finddados';

interface reservaProps {
  area: string;
  ocupacoes: number[][];
  divisao: number[];
}

function definirReserva(
  metodo: number,
  cargaincendio: number,
  area: number,
  ocupacao: string,
) {
  if (metodo === 4 && ocupacao === 'F-1' && cargaincendio > 300) {
    return metodos[2]?.area(area);
  } else if (
    (metodo === 4 && cargaincendio <= 300 && ocupacao === 'D-1') ||
    ocupacao === 'D-3' ||
    ocupacao === 'D-4' ||
    ocupacao === 'F-1' ||
    ocupacao === 'F-10' ||
    ocupacao === 'F-11 ' ||
    ocupacao === 'G-4' ||
    ocupacao === 'M-3'
  ) {
    return metodos[0]?.area(area);
  } else if (
    (metodo === 4 && cargaincendio > 300 && ocupacao === 'D-1') ||
    ocupacao === 'D-3' ||
    ocupacao === 'D-4' ||
    ocupacao === 'F-11' ||
    ocupacao === 'G-4'
  ) {
    return metodos[1]?.area(area);
  } else if (
    (metodo === 4 && cargaincendio > 800 && ocupacao === 'C-2') ||
    ocupacao === 'F-10' ||
    ocupacao === 'I-2' ||
    ocupacao === 'J-3' ||
    ocupacao === 'M-3'
  ) {
    return metodos[2]?.area(area);
  } else if (
    (metodo === 4 &&
      cargaincendio > 300 &&
      cargaincendio <= 800 &&
      ocupacao === 'C-2') ||
    ocupacao === 'F-10' ||
    ocupacao === 'I-2' ||
    ocupacao === 'J-3' ||
    ocupacao === 'M-3'
  ) {
    return metodos[1]?.area(area);
  } else {
    return metodos[metodo]?.area(area);
  }
}

const ReservaTecnica = ({ area, ocupacoes, divisao }: reservaProps) => {
  if (divisao) {
    const { divisao: ocupacao, cargaincendio } = dadosOcupacao(divisao);
    const metodo = reservaTecnica
      .map((item) => item.includes(ocupacao))
      .findIndex((item) => item === true);
    const numero = Number(
      parseFloat(
        area
          .replace(/[^0-9,.]/g, '')
          .replace(/[.]/g, '')
          .replace(',', '.'),
      ),
    )
    return (
      <>
        <h5 className='text-primary'>Reserva Técnica</h5>
        {
          definirReserva(metodo, cargaincendio, numero, ocupacao)?.map(
            (item, index) => {
              return <span className='d-block' key={index}>{item}</span>;
            },
          )
        }
          </>
    );
  }
  return null
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
