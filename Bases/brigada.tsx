import React, { Dispatch, SetStateAction } from 'react';
import styles from '../src/pages/home.module.css';
import BrigadaTabela from '../Tabelas/BrigadaTabela';

interface pavimentoProps {
  numeroPavimento: any;
  numeroBrigada: number[];
  numeroPav: number[];
  setNumeroPav: Dispatch<SetStateAction<number[]>>;
  setNumeroBrigada: Dispatch<SetStateAction<number[]>>;
}

const Pavimento = ({
  numeroPavimento,
  numeroBrigada,
  setNumeroPav,
  numeroPav,
  setNumeroBrigada,
}: pavimentoProps) => {
  const {divisao, tabelaBrigada} = BrigadaTabela()
  const [ocupacao, setOcupacao] = React.useState<number>(0);
  const [pop, setPop] = React.useState('');
  const [valorPav, setValorPav] = React.useState(0);
  const [somatorio, setSomatorio] = React.useState(0);
  const [nomePavimento, setNomePavimento] = React.useState('');
  let referencia = tabelaBrigada[ocupacao];

  React.useEffect(() => {
    setPop('');
    setValorPav(0);
  }, [ocupacao]);

  function deletePav() {
    setNumeroPav(numeroPav.filter((item, index) => index !== numeroPavimento));
    setNumeroBrigada(
      numeroBrigada.filter((item) => item !== numeroBrigada[numeroPavimento]),
    );
  }

  function calcularPop() {
    const valor = Number(pop);
    if (valor <= 10) {
      const brigadaPav = referencia.ate10 * valor;
      setValorPav(brigadaPav);
      numeroBrigada[numeroPavimento] = Math.ceil(brigadaPav);
    } else {
      const brigadaPav = referencia.ate10 * 10;
      const acima10 = (valor - 10) * referencia.acima10;
      setValorPav(brigadaPav + acima10);
      numeroBrigada[numeroPavimento] =
        Math.ceil(brigadaPav) + Math.ceil(acima10);
    }
  }

  // setSomatorio(numeroBrigada?.reduce((a, b) => a + b));

  return (
    <div className={styles.proba}>
      <h3>Divisão:</h3>
      <select onChange={({ target }) => setOcupacao(Number(target.value))}>
        {divisao.map((item, index) => {
          return (
            <option key={index} value={index}>
              {item}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        value={nomePavimento}
        onChange={({ target }) => setNomePavimento(target.value)}
        placeholder="Nome do pavimento"
      />
      <span>Pavimento {nomePavimento}</span>
      <button onClick={deletePav}>Apagar</button>
      <label>População fixa</label>
      <input
        type="text"
        placeholder="Quantidade de pessoas"
        value={pop}
        onChange={({ target }) => setPop(target.value)}
      />
      <button onClick={calcularPop}>Calcular</button>
      {valorPav !== 0 && <h2>Número de Brigadistas: {Math.ceil(valorPav)}</h2>}
      {somatorio !== 0 && <span>Total de brigadistas: {somatorio}</span>}
      {valorPav !== 0 && (
        <div>
          <p>Nivel de Treinamento Exigido: {referencia.exigido}</p>
          <p>Nivel de Treinamento Recomendado: {referencia.recomendado}</p>
        </div>
      )}
      {valorPav !== 0 &&
        referencia.descricao?.map((item) => {
          return (
            <ul>
              <li key={item}>{item}</li>
            </ul>
          );
        })}
    </div>
  );
};

const Brigada = () => {
  const [numeroPav, setNumeroPav] = React.useState<Array<number>>([0]);
  const [count, setCount] = React.useState<number>(0);
  const [numeroBrigada, setNumeroBrigada] = React.useState(
    new Array(numeroPav.length).fill(0),
  );
  function AddPav() {
    setCount((item) => item + 1);
    setNumeroPav((item) => [...item, count]);
  }
  return (
    <div>
      <h1>Brigada de incêndio</h1>
      <button onClick={AddPav}>Adicionar Pavimento</button>
      {numeroPav.map((item, index) => {
        return (
          <Pavimento
            key={item}
            numeroPavimento={index}
            numeroBrigada={numeroBrigada}
            setNumeroPav={setNumeroPav}
            setNumeroBrigada={setNumeroBrigada}
            numeroPav={numeroPav}
          />
        );
      })}
    </div>
  );
};

export default Brigada;
