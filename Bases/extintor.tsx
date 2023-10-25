import React from 'react';
import { dadosOcupacao } from './finddados';
import { Table } from 'react-bootstrap';

interface extintorProps {
  ocupacoes: number[][] | undefined;
  divisao: number[] | undefined;
}

function findCargaExtintora(value: number) {
  if (value <= 300)
    return {
      classeA: { cp: '2-A', distancia: '20m' },
      classeB: { cp: '20-B', distancia: '15 m' },
    };
  else if (value > 300 && value <= 1200)
    return {
      classeA: { cp: '3-A', distancia: '20m' },
      classeB: { cp: '40-B', distancia: '15 m' },
    };
  else if (value > 1200)
    return {
      classeA: { cp: '3-A', cp1: '4-A', distancia: '15m', distancia1: '20m' },
      classeB: {
        cp: '40-B',
        distancia: '10 m',
        cp1: '80-B',
        distancia1: '15 m',
      },
    };
}

const Extintor = ({ ocupacoes, divisao }: extintorProps) => {
  if (divisao) {
    const { cargaincendio} = dadosOcupacao(divisao);
    return (
      <>
        {divisao && (
          <div>
            <h5 className="text-primary text-center">
              Determinação da unidade extintora e distância a ser percorrida
            </h5>
            <Table striped bordered className="table-primary">
              <thead>
                <tr>
                  <td className="text-center fw-bold" colSpan={2}>
                    Classe A
                  </td>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr className="fw-bold">
                  <td>Capacidade extintora mínima</td>
                  <td>Distância máxima a ser percorrida</td>
                </tr>
                <tr>
                  <td>{findCargaExtintora(cargaincendio).classeA.cp}</td>
                  <td>{findCargaExtintora(cargaincendio).classeA.distancia}</td>
                </tr>
              </tbody>
            </Table>
            <Table striped border-primary bordered className="table-primary">
              <thead>
                <tr>
                  <td className="text-center fw-bold" colSpan={2}>
                    Classe B
                  </td>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr className="fw-bold">
                  <td>Capacidade extintora mínima</td>
                  <td>Distância máxima a ser percorrida</td>
                </tr>
                <tr>
                  <td>{findCargaExtintora(cargaincendio).classeB.cp}</td>
                  <td>{findCargaExtintora(cargaincendio).classeB.distancia}</td>
                </tr>
                {findCargaExtintora(cargaincendio).classeB.cp1 && (
                  <tr>
                    <td>{findCargaExtintora(cargaincendio).classeB.cp1}</td>
                    <td>
                      {findCargaExtintora(cargaincendio).classeB.distancia1}
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        )}
      </>
    );
  } else {
    return (
      <>
        {ocupacoes &&
          ocupacoes.map((item) => {
            const { cargaincendio, divisao: div } = dadosOcupacao(item);
            return (
              <>
                <h5 className="text-primary text-center">
                  Determinação da unidade extintora e distância a ser percorrida / {div}
                </h5>
                <Table striped bordered className="table-primary">
                  <thead>
                    <tr>
                      <td className="text-center fw-bold" colSpan={2}>
                        Classe A
                      </td>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr className="fw-bold">
                      <td>Capacidade extintora mínima</td>
                      <td>Distância máxima a ser percorrida</td>
                    </tr>
                    <tr>
                      <td>{findCargaExtintora(cargaincendio).classeA.cp}</td>
                      <td>
                        {findCargaExtintora(cargaincendio).classeA.distancia}
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Table
                  striped
                  border-primary
                  bordered
                  className="table-primary"
                >
                  <thead>
                    <tr>
                      <td className="text-center fw-bold" colSpan={2}>
                        Classe B
                      </td>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr className="fw-bold">
                      <td>Capacidade extintora mínima</td>
                      <td>Distância máxima a ser percorrida</td>
                    </tr>
                    <tr>
                      <td>{findCargaExtintora(cargaincendio).classeB.cp}</td>
                      <td>
                        {findCargaExtintora(cargaincendio).classeB.distancia}
                      </td>
                    </tr>
                    {findCargaExtintora(cargaincendio).classeB.cp1 && (
                      <tr>
                        <td>{findCargaExtintora(cargaincendio).classeB.cp1}</td>
                        <td>
                          {findCargaExtintora(cargaincendio).classeB.distancia1}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </>
            );
          })}
      </>
    );
  }
};

export default Extintor;
