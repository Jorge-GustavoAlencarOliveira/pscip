import React, { Dispatch, SetStateAction } from 'react';
import styles from '../src/pages/home.module.css';
const divisao = [
  'A-1',
  'A-2',
  'A-3',
  'B-1',
  'B-2',
  'C-1',
  'C-2',
  'C-3',
  'D-1',
  'D-2',
  'D-3',
  'D-4',
  'E-1',
  'E-2',
  'E-3',
  'E-4',
  'E-5',
  'F-1',
  'F-2',
  'F-3',
  'F-4',
  'F-5',
  'F-6',
  'F-7',
  'F-8',
  'F-9',
  'F-11',
];

const tabelaBrigada = [
  {
    ate10: 0,
    acima10: 0,
    exigido: 'Isento',
    recomendado: 'Isento',
  },
  {
    ate10: 0,
    acima10: 0,
    exigido: 'Básico',
    recomendado: 'Básico',
  },
  {
    ate10: 0.5,
    acima10: 0.1,
    exigido: 'Básico',
    recomendado: 'Básico',
  },
  {
    ate10: 0.5,
    acima10: 0.1,
    exigido: 'Básico',
    recomendado: 'intermediário',
  },
  {
    ate10: 0.5,
    acima10: 0.1,
    exigido: 'Básico',
    recomendado: 'Básico',
  },
  {
    ate10: 0.4,
    acima10: 0.05,
    exigido: 'Básico',
    recomendado: 'Básico',
  },
  {
    ate10: 0.4,
    acima10: 0.05,
    exigido: 'Básico',
    recomendado: 'Intermediário',
  },
  {
    ate10: 0.5,
    acima10: 0.2,
    exigido: 'Básico',
    recomendado: 'Intermediário',
  },
  {
    ate10: 0.3,
    acima10: 0.1,
    exigido: 'Básico',
    recomendado: 'Intermediário',
  },
  {
    ate10: 0.4,
    acima10: 0.1,
    exigido: 'Básico',
    recomendado: 'Básico',
  },
];

interface pavimentoProps {
  ocupacao: any;
  numeroPavimento: any;
  numeroBrigada: number[];
  numeroPav: number[];
  setNumeroPav: Dispatch<SetStateAction<number[]>>;
  setNumeroBrigada: Dispatch<SetStateAction<number[]>>
}

const Pavimento = ({
  ocupacao,
  numeroPavimento,
  numeroBrigada,
  setNumeroPav,
  numeroPav,
  setNumeroBrigada
}: pavimentoProps) => {
  let brigada = divisao.indexOf(ocupacao);
  let referencia = tabelaBrigada[brigada];
  const [pop, setPop] = React.useState('');
  const [valorPav, setValorPav] = React.useState(0);
  const [somatorio, setSomatorio] = React.useState(0);
  const [nomePavimento, setNomePavimento] = React.useState('')
  function deletePav() {
    setNumeroPav(numeroPav.filter((item, index) => index !== numeroPavimento));
    setNumeroBrigada(numeroBrigada.filter(item => item !== numeroBrigada[numeroPavimento]))
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
      numeroBrigada[numeroPavimento] = Math.ceil(brigadaPav) + Math.ceil(acima10);
    }
  }
  // setSomatorio(numeroBrigada?.reduce((a, b) => a + b));

  return (
    <div className={styles.proba}>
      <input type="text"
      value={nomePavimento}
      onChange={({target}) => setNomePavimento(target.value)}
      placeholder='Nome do pavimento'
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
      {valorPav !== 0 && <span>Brigadistas: {Math.ceil(valorPav)}</span>}
      {somatorio !== 0 && <span>Total de brigadistas: {somatorio}</span>}
    </div>
  );
};

const Brigada = ({ ocupacao }: any) => {
  const [numeroPav, setNumeroPav] = React.useState<Array<number>>([0]);
  const [count, setCount] = React.useState<number>(0)
  const [numeroBrigada, setNumeroBrigada] = React.useState(
    new Array(numeroPav.length).fill(0),
  );
  function AddPav() {
    setCount(item => item + 1)
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
            ocupacao={ocupacao}
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
