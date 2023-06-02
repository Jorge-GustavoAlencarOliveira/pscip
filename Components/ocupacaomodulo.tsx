import React, { Dispatch, SetStateAction } from 'react';
import TabelaDescricao from '../Tabelas/tabelaDescricao';
import TabelaDivisao from '../Tabelas/tabelaDivisao';
import TabelaOcupacao from '../Tabelas/tabelaOcupacao';
import Deterministico from '../Bases/deterministico';
import Probabilistico from '../Bases/probabilistico';
import Cargaincendio from '../Bases/cargaincendio';
import Cargaincendiocalculo from './cargaincendiocalculo';

interface OcupacaoModuloProps {
  numero: number;
  setNumeroOcupacoes: Dispatch<SetStateAction<number[]>>;
  numeroOcupacoes: number[];
  valorOcupacao: number[][],
  setValorOcupacao: Dispatch<SetStateAction<number[][]>> 
}

const OcupacaoModulo = ({
  numero,
  numeroOcupacoes,
  setNumeroOcupacoes,
  valorOcupacao,
  setValorOcupacao
  
}: OcupacaoModuloProps) => {
  const { descricao } = TabelaDescricao();
  const { divisao } = TabelaDivisao();
  const { ocupacao } = TabelaOcupacao();
  const [ocup, setOcup] = React.useState<number>(0);
  const [div, setDiv] = React.useState<number>(0);
  const [desc, setDesc] = React.useState<number>(0);

  React.useEffect(() => {
    setDiv(0);
    setDesc(0);
  }, [ocup]);

  function handleDelete() {
    setNumeroOcupacoes(
      numeroOcupacoes.filter((item, index) => index !== numero),
    );
    setValorOcupacao(
      valorOcupacao.filter((item) => item !== valorOcupacao[numero]),
    );
  }
  
  
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h3>Ocupação {numero + 1}</h3>
        {numero > 0 && (
          <button style={{ maxHeight: '20px' }} onClick={handleDelete}>
            Excluir
          </button>
        )}
      </div>
      <div>
        <div>
          <span>Ocupacao:  </span>
          <select
            onChange={({ target }) => {
              setOcup(+target.value);
              valorOcupacao[numero][0] = +target.value;
              setValorOcupacao(valorOcupacao)
            }}
            value={ocup}
          >
            {ocupacao?.map((item, index) => {
              return (
                <option key={index} value={index}>
                  {item}
                </option>
              );
            })}
          </select>
          {ocup === 9 ? (
              <Cargaincendiocalculo/>
            ) : (
              <div>
                <div>
                  <span>Divisão:  </span>
                  <select
                    onChange={({ target }) => {
                      setDiv(+target.value);
                      valorOcupacao[numero][1] = +target.value;
                      setValorOcupacao(valorOcupacao)
                    }}
                    value={div}
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
                <div>
                  <span>Descrição:  </span>
                  <select
                    onChange={({ target }) => {
                      setDesc(+target.value);
                      valorOcupacao[numero][2] = +target.value;
                      setValorOcupacao(valorOcupacao)
                    }}
                    value={desc}
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
            )

            }
        </div>
      </div>
    </div>
  );
};

export default OcupacaoModulo;
