import React, { Dispatch, SetStateAction } from 'react';
import OcupacaoModulo from './ocupacaomodulo';
import Construcao from '../Bases/construcao';
import { UseDadosEdificação } from './Hooks/useDados';

interface dadosProps {
  areaConstruida: string;
  areaAconstruir: string;
  altura: string;
  pavimentos: string;
  areaTotal: number;
  dataConstrucao: string;
  compartimentacao: string;
}
type array = [dadosProps, number[][]];

interface RegiaoModuloProps {
  numero: number;
  numeroRegiao: number[];
  setNumeroRegiao: Dispatch<SetStateAction<number[]>>;
  valorRegiao: Array<array>;
  setValorRegiao: Dispatch<SetStateAction<Array<array>>>;
}

const RegiaoModulo = ({
  numero,
  numeroRegiao,
  setNumeroRegiao,
  valorRegiao,
  setValorRegiao,
}: RegiaoModuloProps) => {
  const { resetDadosEdificação, setDadosEdificação, dados } =
    UseDadosEdificação();
  const [mista, setMista] = React.useState<string>('');
  const [numeroOcupacoes, setNumeroOcupacoes] = React.useState<Array<number>>([
    0,
  ]);
  const [count, setCount] = React.useState(1);
  const [areaTotal, setAreaTotal] = React.useState<number>(0);

  const [valorOcupacao, setValorOcupacao] = React.useState([[0, 0, 0]]);

  React.useEffect(() => {
    valorRegiao[numero][0] = dados;
    valorRegiao[numero][1] = valorOcupacao;
    setAreaTotal(Number(dados.areaAconstruir) + Number(dados.areaConstruida));
  }, [dados, valorOcupacao]);

  React.useEffect(() => {
    setValorOcupacao([[0, 0, 0]]);
  }, [, mista]);

  React.useEffect(() => {
    setDadosEdificação('areaTotal', areaTotal);
  }, [areaTotal]);

  function handleAdd() {
    setCount((item) => item + 1);
    setNumeroOcupacoes((item) => [...item, count]);
    setValorOcupacao((item) => [...item, [0, 0, 0]]);
  }

  function handleDelete() {
    setNumeroRegiao(numeroRegiao.filter((item, index) => index !== numero));
    setValorRegiao(valorRegiao.filter((item) => item !== valorRegiao[numero]));
  }

  return (
    <>
      <div className="py-4">
        <div className="d-flex justify-content-between align-items-center mb-3 ">
          <h4 className="fw-bold text-primary">Regiao {numero + 1}</h4>
          {numero > 0 && (
            <button
              className="btn btn-secondary d-block"
              onClick={handleDelete}
            >
              Excluir
            </button>
          )}
        </div>
        <div className="mb-4 mt-3">
          <span className="fw-bold">A ocupação é mista?</span>
          <div className="d-flex gap-5 my-2">
            <div className="d-flex align-items-center gap-2">
              <input
                type="radio"
                id="mistaSim"
                value="mistaSim"
                onChange={({ target }) => setMista(target.value)}
                checked={mista === 'mistaSim'}
              />
              <label htmlFor="mistaSim">Sim</label>
            </div>
            <div className="d-flex align-items-center gap-2">
              <input
                type="radio"
                id="mistaNao"
                value="mistaNao"
                onChange={({ target }) => setMista(target.value)}
                checked={mista === 'mistaNao'}
              />
              <label htmlFor="mistaNao">Não</label>
            </div>
          </div>
        </div>
        {mista === 'mistaSim' && (
          <div className="d-flex flex-column">
            <div>
              <button
                className="mb-3 float-end btn btn-secondary"
                onClick={handleAdd}
              >
                Adicionar ocupação
              </button>
            </div>
            {numeroOcupacoes.map((item, index) => {
              return (
                <OcupacaoModulo
                  key={item}
                  numero={index}
                  valorOcupacao={valorOcupacao}
                  setValorOcupacao={setValorOcupacao}
                />
              );
            })}
            <div className="d-flex flex-column py-3 gap-2">
              <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-2">
                <label className="text-nowrap fw-bold">Área construída:</label>
                <input
                  type="text"
                  placeholder="m²"
                  value={dados.areaConstruida}
                  onChange={({ target }) =>
                    setDadosEdificação('areaConstruida', target.value)
                  }
                  className="form-control"
                />
              </div>
              <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-2">
                <label className="text-nowrap fw-bold">Área a construir:</label>
                <input
                  type="text"
                  placeholder="m²"
                  value={dados.areaAconstruir}
                  onChange={({ target }) =>
                    setDadosEdificação('areaAconstruir', target.value)
                  }
                  className="form-control"
                />
              </div>
              <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-2">
                <label className="text-nowrap fw-bold">Área Total:</label>
                <input
                  type="text"
                  placeholder="m²"
                  value={areaTotal}
                  onChange={({ target }) =>
                    setDadosEdificação('areaTotal', target.value)
                  }
                  className="form-control"
                />
              </div>
              <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-2">
                <label className="text-nowrap fw-bold">Altura:</label>
                <input
                  type="text"
                  placeholder="m"
                  value={dados.altura}
                  onChange={({ target }) =>
                    setDadosEdificação('altura', target.value)
                  }
                  className="form-control"
                />
              </div>
              <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-2">
                <label className="text-nowrap fw-bold">
                  Número de pavimentos:
                </label>
                <input
                  type="text"
                  placeholder="Un"
                  value={dados.pavimentos}
                  onChange={({ target }) =>
                    setDadosEdificação('pavimentos', target.value)
                  }
                  className="form-control"
                />
              </div>
            </div>
            <Construcao setDadosEdificacao={setDadosEdificação} dados={dados} />
          </div>
        )}
        {mista === 'mistaNao' && (
          <div>
            {numeroOcupacoes.map((item, index) => {
              return (
                <OcupacaoModulo
                  key={item}
                  numero={index}
                  valorOcupacao={valorOcupacao}
                  setValorOcupacao={setValorOcupacao}
                />
              );
            })}
            <div className="d-flex flex-column py-3 gap-2">
              <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-2">
                <label className="text-nowrap fw-bold">Área construída:</label>
                <input
                  type="text"
                  placeholder="m²"
                  value={dados.areaConstruida}
                  onChange={({ target }) =>
                    setDadosEdificação('areaConstruida', target.value)
                  }
                  className="form-control"
                />
              </div>
              <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-2">
                <label className="text-nowrap fw-bold">Área a construir:</label>
                <input
                  type="text"
                  placeholder="m²"
                  value={dados.areaAconstruir}
                  onChange={({ target }) =>
                    setDadosEdificação('areaAconstruir', target.value)
                  }
                  className="form-control"
                />
              </div>
              <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-2">
                <label className="text-nowrap fw-bold">Área Total:</label>
                <input
                  type="text"
                  placeholder="m²"
                  value={areaTotal}
                  onChange={({ target }) =>
                    setDadosEdificação('areaTotal', target.value)
                  }
                  className="form-control"
                />
              </div>
              <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-2">
                <label className="text-nowrap fw-bold">Altura:</label>
                <input
                  type="text"
                  placeholder="m"
                  value={dados.altura}
                  onChange={({ target }) =>
                    setDadosEdificação('altura', target.value)
                  }
                  className="form-control"
                />
              </div>
              <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-2">
                <label className="text-nowrap fw-bold">
                  Número de pavimentos:
                </label>
                <input
                  type="text"
                  placeholder="Un"
                  value={dados.pavimentos}
                  onChange={({ target }) =>
                    setDadosEdificação('pavimentos', target.value)
                  }
                  className="form-control"
                />
              </div>
            </div>
            <Construcao setDadosEdificacao={setDadosEdificação} dados={dados} />
          </div>
        )}
      </div>
    </>
  );
};

export default RegiaoModulo;
