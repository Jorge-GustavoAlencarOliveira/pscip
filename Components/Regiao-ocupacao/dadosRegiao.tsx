import React from 'react';
import Construcao from '../../Bases/construcao';
import { dadosProps } from '../Hooks/useDados';
import { formatarNumero, cleanNumber, somenteInteiro } from '../../Bases/formatarNumero';
type MistaProps = 'mistaSim' | 'mistaNao';

type DadosProps = {
  dados: dadosProps;
  setDadosEdificacao: (key: string, value: number | string) => void;
};

const DadosRegiao = ({ dados, setDadosEdificacao }: DadosProps) => {
  const areaTotal = cleanNumber(dados.areaConstruida) + cleanNumber(dados.areaAconstruir);
  const [mista, setMista] = React.useState<MistaProps>('mistaNao');

  React.useEffect(() => {
    setDadosEdificacao('areaTotal', formatarNumero(areaTotal.toString()));
  }, [dados.areaAconstruir, dados.areaConstruida]);

  return (
    <>
      <div className="d-flex flex-column py-3 gap-2">
        <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-2">
          <label className="text-nowrap fw-bold">Área construída:</label>
          <input
            type="text"
            placeholder="m²"
            value={`${dados.areaConstruida} m²`}
            onChange={({ target }) => {
              setDadosEdificacao('areaConstruida', formatarNumero(target.value));
            }}
            className="form-control"
          />
        </div>
        <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-2">
          <label className="text-nowrap fw-bold">Área a construir:</label>
          <input
            type="text"
            placeholder="m²"
            value={`${dados.areaAconstruir} m²`}
            onChange={({ target }) => {
              setDadosEdificacao('areaAconstruir', formatarNumero(target.value));
            }}
            className="form-control"
          />
        </div>
        <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-2">
          <label className="text-nowrap fw-bold">Área Total:</label>
          <input
            type="text"
            placeholder="m²"
            value={`${formatarNumero(areaTotal.toString())} m²`}
            className="form-control"
            readOnly
          />
        </div>
        <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-2">
          <label className="text-nowrap fw-bold">Altura:</label>
          <input
            type="text"
            placeholder="m"
            value={dados.altura}
            onChange={({ target }) =>
              setDadosEdificacao('altura', somenteInteiro(target.value))
            }
            className="form-control"
          />
        </div>
        <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-2">
          <label className="text-nowrap fw-bold">Número de pavimentos:</label>
          <input
            type="text"
            placeholder="Un"
            value={dados.pavimentos}
            onChange={({ target }) =>
              setDadosEdificacao('pavimentos', somenteInteiro(target.value))
            }
            className="form-control"
          />
        </div>
      </div>
      <Construcao
        setDadosEdificacao={setDadosEdificacao}
        dados={dados.dataConstrucao}
      />
      <div className="mb-4 mt-3">
        <span className="fw-bold">A ocupação é mista?</span>
        <div className="d-flex gap-5 my-2">
          <div className="d-flex align-items-center gap-2">
            <input
              type="radio"
              id="mistaSim"
              value="mistaSim"
              onChange={({ target }) => setMista('mistaSim')}
              checked={mista === 'mistaSim'}
            />
            <label htmlFor="mistaSim">Sim</label>
          </div>
          <div className="d-flex align-items-center gap-2">
            <input
              type="radio"
              id="mistaNao"
              value="mistaNao"
              onChange={({ target }) => setMista('mistaNao')}
              checked={mista === 'mistaNao'}
            />
            <label htmlFor="mistaNao">Não</label>
          </div>
        </div>
      </div>
      {mista === 'mistaSim' && (
        <div className="d-flex flex-column">
          <div className="mb-4">
            <span className="fw-bold">
              Há compartimentação entre as ocupações?
            </span>
            <div className="d-flex gap-5 my-2">
              <div className="d-flex align-items-center gap-2">
                <input
                  type="radio"
                  id="Sim"
                  value="compartimentacaoSim"
                  onChange={({ target }) => {
                    setDadosEdificacao('compartimentacao', target.value);
                  }}
                  checked={dados.compartimentacao === 'compartimentacaoSim'}
                />
                <label htmlFor="compartimentacaoSim">Sim</label>
              </div>
              <div className="d-flex align-items-center gap-2">
                <input
                  type="radio"
                  id="compartimentacaoNao"
                  value="compartimentacaoNao"
                  onChange={({ target }) => {
                    setDadosEdificacao('compartimentacao', target.value);
                  }}
                  checked={dados.compartimentacao === 'compartimentacaoNao'}
                />
                <label htmlFor="mistaNao">Não</label>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DadosRegiao;
