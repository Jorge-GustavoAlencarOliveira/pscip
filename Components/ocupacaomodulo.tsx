import React, { Dispatch, SetStateAction } from 'react';
import TabelaDescricao from '../Tabelas/tabelaDescricao';
import TabelaDivisao from '../Tabelas/tabelaDivisao';
import TabelaOcupacao from '../Tabelas/tabelaOcupacao';
import Cargaincendiocalculo from './cargaincendiocalculo';

interface OcupacaoModuloProps {
  numero: number;
  valorOcupacao: number[][];
  setValorOcupacao: (valorOcupacao: number[][]) => void;
  handleDelete?: (numero: number) => void;
}

const { descricao } = TabelaDescricao();
const { divisao } = TabelaDivisao();
const { ocupacao } = TabelaOcupacao();

const OcupacaoModulo = ({
  numero,
  valorOcupacao,
  setValorOcupacao,
  handleDelete,
}: OcupacaoModuloProps) => {
  const [ocup, setOcup] = React.useState<number>(0);
  const [div, setDiv] = React.useState<number>(0);
  const [desc, setDesc] = React.useState<number>(0);

  React.useEffect(() => {
    setDiv(0);
    setDesc(0);
  }, [ocup]);

  return (
    <div className="border-top border-top-primary border-bottom border-primary py-4">
      <div className="d-flex justify-content-between align-items-center mb-3 ">
        <h4 className="fw-bold text-primary ">Ocupação {numero + 1}</h4>
        {numero > 0 && (
          <button
            className="btn btn-secondary d-block"
            onClick={() => handleDelete && handleDelete(numero)}
          >
            Excluir
          </button>
        )}
      </div>
      <div>
        <div className="d-flex flex-column gap-3">
          <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-2">
            <span className="fw-bold">Ocupação: </span>
            <select
              onChange={({ target }) => {
                setOcup(+target.value);
                valorOcupacao[numero][0] = +target.value;
                setValorOcupacao(valorOcupacao);
              }}
              value={ocup}
              className="form-select"
            >
              {ocupacao?.map((item, index) => {
                return (
                  <option className="form-control" key={index} value={index}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          {ocup === 9 ? (
            <Cargaincendiocalculo
              numero={numero}
              valorOcupacao={valorOcupacao}
              setValorOcupacao={setValorOcupacao}
            />
          ) : (
            <div className="d-flex flex-column gap-3">
              <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-2">
                <span className="fw-bold">Divisão: </span>
                <select
                  onChange={({ target }) => {
                    setDiv(+target.value);
                    valorOcupacao[numero][1] = +target.value;
                    setValorOcupacao(valorOcupacao);
                  }}
                  value={div}
                  className="form-select"
                >
                  {divisao[ocup]?.map((item, index) => {
                    return (
                      <option key={index} value={index}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-2">
                  <span className="fw-bold">Descrição: </span>
                  <select
                    onChange={({ target }) => {
                      setDesc(+target.value);
                      valorOcupacao[numero][2] = +target.value;
                      setValorOcupacao(valorOcupacao);
                    }}
                    value={desc}
                    className="form-select "
                  >
                    {descricao[ocup][div]?.map((item, index) => {
                      return (
                        <option key={index} value={index}>
                          {item.descricao}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OcupacaoModulo;
