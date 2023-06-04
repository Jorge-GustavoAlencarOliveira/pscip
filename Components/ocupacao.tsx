import React from 'react';
import OcupacaoModulo from './ocupacaomodulo';
import { DataStorage } from '../dataContext';
import { useRouter } from 'next/router';
import TabelaDescricao from '../Tabelas/tabelaDescricao';
import Construcao from '../Bases/construcao';

interface dadosProps {
  areaConstruida: string;
  areaAconstruir: string;
  altura: string;
  pavimentos: string;
  areaTotal: number;
  dataConstrucao: string;
}
const Ocupacao = () => {
  const router = useRouter()
  const {descricao} = TabelaDescricao()
  const {setValoresOcupacao, valoresOcupacao} = React.useContext(DataStorage)
  const [mista, setMista] = React.useState<string>('');
  const [numeroOcupacoes, setNumeroOcupacoes] = React.useState<Array<number>>([0]);
  const [count, setCount] = React.useState(1);
  const [valorOcupacao, setValorOcupacao] = React.useState([[0, 0, 0]]);
  const [areaTotal, setAreaTotal] = React.useState<number>(0);
  const [dados, setDados] = React.useState<dadosProps>({
    areaConstruida: '',
    areaAconstruir: '',
    altura: '',
    pavimentos: '',
    areaTotal: 0,
    dataConstrucao: ''
  });
  React.useEffect(() => {
    setAreaTotal(Number(dados.areaAconstruir) + Number(dados.areaConstruida));
  }, [dados]);
  
  React.useEffect(() =>{
   setDados(item => ({...item, areaTotal: areaTotal}))
  },[areaTotal])

  
  React.useEffect(() =>{
    setValorOcupacao([[0, 0, 0]])
    setDados({
      areaConstruida: '',
      areaAconstruir: '',
      altura: '',
      pavimentos: '',
      areaTotal: 0,
      dataConstrucao: ''
    })
  },[,mista])

  function handleAdd() {
    setCount((item) => item + 1);
    setNumeroOcupacoes((item) => [...item, count]);
    setValorOcupacao((item) => [...item, [0, 0, 0]]);
  }

  function handleNext (){
    if(dados.areaConstruida === "" || dados.altura === "" || dados.pavimentos === ""){
      return alert('Preencha os dados')
    } 
    setValoresOcupacao([[dados, valorOcupacao]])
    router.push('/result')
  }
  return (
    <div style={{ marginTop: '1rem' }}>
      <div>
        <span>A ocupação é mista?</span>
        <br />
        <input
          type="radio"
          id="mistaSim"
          name="mista"
          value="mistaSim"
          onChange={({ target }) => setMista(target.value)}
          checked={mista === 'mistaSim'}
        />
        <label htmlFor="mistaSim">Sim</label>
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
          <OcupacaoModulo
            key={0}
            numero={0}
            setNumeroOcupacoes={setNumeroOcupacoes}
            numeroOcupacoes={numeroOcupacoes}
            valorOcupacao={valorOcupacao}
            setValorOcupacao={setValorOcupacao}
          />
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
    <button onClick={handleNext}>Próximo</button>
    </div>
  );
};

export default Ocupacao;
