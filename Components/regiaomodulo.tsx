import React, { Dispatch, SetStateAction } from 'react';
import OcupacaoModulo from './ocupacaomodulo';
import Construcao from '../Bases/construcao';
interface dadosProps {
  areaConstruida: string;
  areaAconstruir: string;
  altura: string;
  pavimentos: string;
  areaTotal: number;
  dataConstrucao: string;
}
type array = [dadosProps, number[][]]

interface RegiaoModuloProps {
  numero: number;
  numeroRegiao: number[];
  setNumeroRegiao: Dispatch<SetStateAction<number[]>>;
  valorRegiao: Array<array>;
  setValorRegiao: Dispatch<SetStateAction<Array<array>>>;
}

const RegiaoModulo = ({numero, numeroRegiao, setNumeroRegiao, valorRegiao, setValorRegiao}: RegiaoModuloProps) => {
  const [mista, setMista] = React.useState<string>('');
  const [numeroOcupacoes, setNumeroOcupacoes] = React.useState<Array<number>>([0]);
  const [count, setCount] = React.useState(1);
  const [areaTotal, setAreaTotal] = React.useState<number>(0);
  const [dados, setDados] = React.useState<dadosProps>({
    areaConstruida: '',
    areaAconstruir: '',
    altura: '',
    pavimentos: '',
    areaTotal: 0,
    dataConstrucao: ''
  });
  const [valorOcupacao, setValorOcupacao] = React.useState([[0, 0, 0]]);
  
  React.useEffect(() => {
      valorRegiao[numero][0] = dados;
      valorRegiao[numero][1] = valorOcupacao;
      setAreaTotal(Number(dados.areaAconstruir) + Number(dados.areaConstruida));
  }, [dados, valorOcupacao]);

  React.useEffect(() => {
    setValorOcupacao([[0, 0, 0]]);
  }, [,mista]);

 

  React.useEffect(() =>{
    setDados(item => ({...item, areaTotal: areaTotal}))
   },[areaTotal])

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
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h3>Regiao {numero + 1}</h3>
          {numero > 0 && (
            <button onClick={handleDelete} style={{ maxHeight: '20px' }}>
              Excluir
            </button>
          )}
        </div>
        <div>
          <span>A ocupação é mista?</span>
          <br />
          <input
            type="radio"
            id="mistaSim"
            name={`mista$${numero}`}
            value="mistaSim"
            onChange={({ target }) => setMista(target.value)}
            checked={mista === 'mistaSim'}
          />
          <label htmlFor="mistaSim">Sim</label>
          <input
            type="radio"
            id="mistaNao"
            name={`mista$${numero}`}
            value="mistaNao"
            onChange={({ target }) => setMista(target.value)}
            checked={mista === 'mistaNao'}
          />
          <label htmlFor="mistaNao">Não</label>
        </div>
        {mista === 'mistaSim' && (
          <div>
            <button style={{ float: 'right' }} onClick={handleAdd}>
              Adicionar ocupação
            </button>
            {numeroOcupacoes.map((item, index) => {
              return (
                <OcupacaoModulo
                  key={item}
                  numero={index}
                  setNumeroOcupacoes={setNumeroOcupacoes}
                  numeroOcupacoes={numeroOcupacoes}
                  valorOcupacao={valorOcupacao}
                  setValorOcupacao={setValorOcupacao}
                />
              );
            })}
            <div style={{ marginTop: '2rem' }}>
              <label>Área construída:</label>
              <input
                type="text"
                placeholder="m²"
                value={dados.areaConstruida}
                onChange={({ target }) =>
                  setDados((item) => ({
                    ...item,
                    areaConstruida: target.value,
                  }))
                }
              />
              <label>Área a construir:</label>
              <input
                type="text"
                placeholder="m²"
                value={dados.areaAconstruir}
                onChange={({ target }) =>
                  setDados((item) => ({
                    ...item,
                    areaAconstruir: target.value,
                  }))
                }
              />
              <label>Área Total:</label>
              <input
                type="text"
                placeholder="m²"
                value={areaTotal}
                onChange={({ target }) =>
                  setDados((item) => ({
                    ...item,
                    areaTotal: +target.value,
                  }))
                }
              />
              <br></br>
              <br></br>
              <label>Altura:</label>
              <input
                type="text"
                placeholder="m"
                value={dados.altura}
                onChange={({ target }) =>
                  setDados((item) => ({ ...item, altura: target.value }))
                }
              />
              <label>Número de pavimentos:</label>
              <input
                type="text"
                placeholder="Un"
                value={dados.pavimentos}
                onChange={({ target }) =>
                  setDados((item) => ({
                    ...item,
                    pavimentos: target.value,
                  }))
                }
              />
            </div>
            <Construcao setDados={setDados} dados={dados} />
          </div>
        )}
        {mista === 'mistaNao' && (
          <div>
            {numeroOcupacoes.map((item, index) => {
              return (
                <OcupacaoModulo
                  key={item}
                  numero={index}
                  setNumeroOcupacoes={setNumeroOcupacoes}
                  numeroOcupacoes={numeroOcupacoes}
                  valorOcupacao={valorOcupacao}
                  setValorOcupacao={setValorOcupacao}
                />
              );
            })}
            <div style={{ marginTop: '2rem' }}>
              <label>Área construída:</label>
              <input
                type="text"
                placeholder="m²"
                value={dados.areaConstruida}
                onChange={({ target }) =>
                  setDados((item) => ({
                    ...item,
                    areaConstruida: target.value,
                  }))
                }
              />
              <label>Área a construir:</label>
              <input
                type="text"
                placeholder="m²"
                value={dados.areaAconstruir}
                onChange={({ target }) =>
                  setDados((item) => ({
                    ...item,
                    areaAconstruir: target.value,
                  }))
                }
              />
              <label>Área Total:</label>
              <input
                type="text"
                placeholder="m²"
                value={areaTotal}
                onChange={({ target }) =>
                  setDados((item) => ({
                    ...item,
                    areaTotal: +target.value,
                  }))
                }
              />
              <br></br>
              <br></br>
              <label>Altura:</label>
              <input
                type="text"
                placeholder="m"
                value={dados.altura}
                onChange={({ target }) =>
                  setDados((item) => ({ ...item, altura: target.value }))
                }
              />
              <label>Número de pavimentos:</label>
              <input
                type="text"
                placeholder="Un"
                value={dados.pavimentos}
                onChange={({ target }) =>
                  setDados((item) => ({
                    ...item,
                    pavimentos: target.value,
                  }))
                }
              />
            </div>
            <Construcao setDados={setDados} dados={dados} />
          </div>
        )}
      </div>
    </>
  );
};

export default RegiaoModulo