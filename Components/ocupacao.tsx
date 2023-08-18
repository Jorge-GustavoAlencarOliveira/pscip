import React from 'react';
import OcupacaoModulo from './ocupacaomodulo';
import { DataStorage } from '../dataContext';
import { useRouter } from 'next/router';
import Construcao from '../Bases/construcao';
import {toast} from 'react-toastify'

interface dadosProps {
  areaConstruida: string;
  areaAconstruir: string;
  altura: string;
  pavimentos: string;
  areaTotal: number;
  dataConstrucao: string;
  compartimentacao: string
}

const Ocupacao = () => {
  const router = useRouter();
  const {valoresOcupacoes} = React.useContext(DataStorage);
  const [mista, setMista] = React.useState<string>('');
  const [numeroOcupacoes, setNumeroOcupacoes] = React.useState<Array<number>>([0]);
  const scrollToBottom = React.useRef<HTMLDivElement>(null)
  const [count, setCount] = React.useState(1);
  const [valorOcupacao, setValorOcupacao] = React.useState([[0, 0, 0]]);
  const [areaTotal, setAreaTotal] = React.useState<number>(0);
  const [dados, setDados] = React.useState<dadosProps>({
    areaConstruida: '',
    areaAconstruir: '',
    altura: '',
    pavimentos: '',
    areaTotal: 0,
    dataConstrucao: 'Nova',
    compartimentacao: 'compartimentacaoNao'
  });

  React.useEffect(() => {
    setAreaTotal(Number(dados.areaAconstruir) + Number(dados.areaConstruida));
  }, [dados]);

  React.useEffect(() => {
    setDados((item) => ({...item, areaTotal: areaTotal}));
  }, [areaTotal]);

  React.useEffect(() => {
    setValorOcupacao([[0, 0, 0]]);
    setDados({
      areaConstruida: '',
      areaAconstruir: '',
      altura: '',
      pavimentos: '',
      areaTotal: 0,
      dataConstrucao: 'Nova',
      compartimentacao: 'compartimentacaoNao'
    });
  }, [, mista]);

  function selecionarOcupacao (valorOcupacao: number[][]){
     setValorOcupacao(valorOcupacao) 
  }

  function handleAdd() {
    setCount((item) => item + 1);
    setNumeroOcupacoes((item) => [...item, count]);
    setValorOcupacao((item) => [...item, [0, 0, 0]]);
    if(scrollToBottom.current) scrollToBottom.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest'
    })
  }

  function handleDelete(numero:number) {
    setNumeroOcupacoes(
      numeroOcupacoes.filter((item, index) => index !== numero),
    );
    setValorOcupacao(
      valorOcupacao.filter((item) => item !== valorOcupacao[numero]),
    );
  }

  function handleNext() {
    if (
      dados.areaConstruida === '' ||
      dados.altura === '' ||
      dados.pavimentos === ''
    ) {
      return toast.info('Preencha os dados');
    }
    valoresOcupacoes(dados, valorOcupacao);
    router.push('/result');
  }
  
  return (
    <div ref={scrollToBottom}>
      <div className="mb-4 mt-3">
        <span className="fw-bold">A ocupação é mista?</span>
        <div className="d-flex gap-5 my-2">
          <div className="d-flex align-items-center gap-2">
            <input
              type="radio"
              id="mistaSim"
              name="mista"
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
              name="mista"
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
          <div className="mb-4">
            <span className="fw-bold">Há compartimentação entre as ocupações?</span>
            <div className="d-flex gap-5 my-2">
              <div className="d-flex align-items-center gap-2">
                <input
                  type="radio"
                  id="Sim"
                  value="compartimentacaoSim"
                  onChange={({ target }) => {
                   
                    setDados((item) => ({
                      ...item,
                      compartimentacao: target.value,
                    }))
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
                    setDados((item) => ({
                      ...item,
                      compartimentacao: target.value,
                    }))
                  }}
                  checked={dados.compartimentacao === 'compartimentacaoNao'}
                />
                <label htmlFor="mistaNao">Não</label>
              </div>
            </div>
          </div>
          <div>
            <button
              className="mb-3 float-end btn btn-primary"
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
                setValorOcupacao={selecionarOcupacao}
                handleDelete={handleDelete}
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
                  setDados((item) => ({
                    ...item,
                    areaConstruida: target.value,
                  }))               
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
                  setDados((item) => ({
                    ...item,
                    areaAconstruir: target.value,
                  }))
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
                  setDados((item) => ({
                    ...item,
                    areaTotal: +target.value,
                  }))
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
                  setDados((item) => ({ ...item, altura: target.value }))
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
                  setDados((item) => ({
                    ...item,
                    pavimentos: target.value,
                  }))
                }
                className="form-control"
              />
            </div>
          </div>
          <Construcao setDados={setDados} dados={dados} />
        </div>
      )}
      {mista === 'mistaNao' && (
        <div>
          <OcupacaoModulo
            key={0}
            numero={0}
            valorOcupacao={valorOcupacao}
            setValorOcupacao={setValorOcupacao}
            handleDelete={handleDelete}
          />
          <div className="d-flex flex-column py-3 gap-2">
            <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-2">
              <label className="text-nowrap fw-bold">Área construída:</label>
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
                  setDados((item) => ({
                    ...item,
                    areaAconstruir: target.value,
                  }))
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
                  setDados((item) => ({
                    ...item,
                    areaTotal: +target.value,
                  }))
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
                  setDados((item) => ({ ...item, altura: target.value }))
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
                  setDados((item) => ({
                    ...item,
                    pavimentos: target.value,
                  }))
                }
                className="form-control"
              />
            </div>
          </div>
          <Construcao setDados={setDados} dados={dados} />
        </div>
      )}
      {mista === 'mistaSim' && (
        <button
          className="btn btn-primary float-end btn-sm-lg mb-3"
          onClick={handleNext}
        >
          Próximo
        </button>
      )}
      {mista === 'mistaNao' && (
        <button
          className="btn btn-primary float-end btn-sm-lg mb-3"
          onClick={handleNext}
        >
          Próximo
        </button>
      )}
    </div>
  );
};

export default Ocupacao;
