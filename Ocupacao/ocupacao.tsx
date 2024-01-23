import React from 'react';
import TabelaDescricao from '../Tabelas/tabelaDescricao';
import TabelaDivisao from '../Tabelas/tabelaDivisao';
import TabelaOcupacao from '../Tabelas/tabelaOcupacao';

interface ocupacaoProps {
  add: (ocup: number, div: number, desc: number) => void;
  onHide?: () => void;
}

const Ocupacao = ({ add, onHide }: ocupacaoProps) => {
  const { descricao } = TabelaDescricao();
  const { divisao } = TabelaDivisao();
  const { ocupacao } = TabelaOcupacao();

  const [ocup, setOcup] = React.useState(0);
  const [div, setDiv] = React.useState(0);
  const [desc, setDesc] = React.useState(0);

  React.useEffect(() => {
    setDiv(0);
    setDesc(0);
  }, [ocup]);

  return (
    <>
      <div className="d-flex align-items-center gap-3">
        <div className='d-flex flex-column gap-2 flex-grow-1'>
          <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-2">
            <span className="fw-bold">Ocupação: </span>
            <select
              onChange={({ target }) => {
                setOcup(+target.value);
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
          <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-2">
            <span className="fw-bold">Divisão: </span>
            <select
              onChange={({ target }) => {
                setDiv(+target.value);
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
          <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-2">
            <span className="fw-bold">Descrição: </span>
            <select
              onChange={({ target }) => {
                setDesc(+target.value);
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
        <div>
          <button
            className="btn btn-primary"
            onClick={() => {
              add(ocup, div, desc);
              if (onHide) onHide();
            }}
          >
            Adicionar ocupação
          </button>
        </div>
      </div>
    </>
  );
};

export default Ocupacao;
