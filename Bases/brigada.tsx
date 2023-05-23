import React, { Dispatch, SetStateAction } from 'react';
import styles from '../src/pages/home.module.css'

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
  'E-6',
  'F-1',
  'F-2',
  'F-3',
  'F-4',
  'F-5 ',
  'F-6 ',
  'F-7 ',
  'F-8 ',
  'F-9',
  'F-10',
  'F-11',
  'G-1',
  'G-2',
  'G-3',
  'G-4',
  'G-5',
  'H-1',
  'H-2',
  'H-3',
  'H-4',
  'H-5',
  'H-6',
  'I-1',
  'I-2',
  'I-3',
  'J-1',
  'J-2',
  'J-3',
  'J-4',
  'L-1',
  'L-2',
  'L-3',
  'M-1',
  'M-2',
  'M-3',
  'M-4',
  'M-5',
  'M-6',
  'M-7',
  'M-8',
];
interface brigadaProps {
  ate10: number;
  acima10: number;
  exigido: string;
  recomendado: string;
  descricao?: string[];
}
const tabelaBrigada: Array<brigadaProps> = [
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
    descricao: [
      'Todos os empregados da edificação deverão compor a brigada de incêndio e, caso não haja empregados, recomenda-se que haja treinamento da população para evacuação e utilização dos equipamentos e medidas preventivas da edificação.',
    ],
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
    descricao: [
      'Quando a área do pavimento for superior a 3.000,0 m², deverá haver no mínimo 01 (um) brigadista profissional por pavimento, que será contado normalmente como parte do número de brigadistas exigidos para a edificação.',
    ],
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
  {
    ate10: 0.4,
    acima10: 0.1,
    exigido: 'Básico',
    recomendado: 'Intermediário',
  },
  {
    ate10: 0.4,
    acima10: 0.1,
    exigido: 'Básico',
    recomendado: 'Intermediário',
  },
  {
    ate10: 0.4,
    acima10: 0.2,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: ['Será necessário o número mínimo de 02 (dois) brigadistas.'],
  },
  {
    ate10: 0.4,
    acima10: 0.2,
    exigido: 'Básico',
    recomendado: 'Intermediário',
  },
  {
    ate10: 0.4,
    acima10: 0.2,
    exigido: 'Básico',
    recomendado: 'Intermediário',
  },
  {
    ate10: 0.4,
    acima10: 0.2,
    exigido: 'Básico',
    recomendado: 'Intermediário',
  },
  {
    ate10: 0.8,
    acima10: 0.8,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: ['Será necessário o número mínimo de 02 (dois) brigadistas.'],
  },
  {
    ate10: 0.8,
    acima10: 0.8,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: ['Será necessário o número mínimo de 02 (dois) brigadistas.'],
  },
  {
    ate10: 1,
    acima10: 1,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: [
      'Será necessário o número mínimo de 02 (dois) brigadistas. quando a área (utilizada como divisão F-1) for superior a 2.000,0 m², deverá haver no mínimo 01 (um) brigadista profissional por pavimento, que será contado normalmente como parte do número de brigadistas exigidos para a edificação.',
    ],
  },
  {
    ate10: 1,
    acima10: 1,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: ['Será necessário o número mínimo de 02 (dois) brigadistas.'],
  },
  {
    ate10: 1,
    acima10: 1,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: ['Será necessário o número mínimo de 02 (dois) brigadistas.'],
  },
  {
    ate10: 0.6,
    acima10: 0.2,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: ['Será necessário o número mínimo de 02 (dois) brigadistas.'],
  },
  {
    ate10: 1,
    acima10: 1,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: ['Será necessário o número mínimo de 02 (dois) brigadistas.'],
  },
  {
    ate10: 1,
    acima10: 1,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: [
      'Será necessário o número mínimo de 02 (dois) brigadistas.',
      'Quando a área (utilizada como divisão F-6) for superior a 930,0 m², deverá haver no mínimo 01 (um) brigadista profissional por pavimento, que será contado normalmente como parte do número de brigadistas exigidos para a edificação.',
    ],
  },
  {
    ate10: 1,
    acima10: 1,
    exigido: 'Profissional',
    recomendado: 'Profissional',
    descricao: [
      'Eventos com classificação de risco mínimo e baixo estão isentos da medida brigada de incêndio.',
      'Eventos com população inferior a 500 (quinhentas) pessoas estão isentos da medida brigada de incêndio.',
      'Todos os locais de evento com previsão de população superior a 1.500 (mil e quinhentas) pessoas deverão contar com pessoa devidamente habilitada para operar o Desfibrilador Externo Automático (DEA).',
      'Para todos os eventos em que for exigida a medida brigada de incêndio, deverá haver no mínimo 2 (dois) brigadistas.',
    ],
  },
  {
    ate10: 0.6,
    acima10: 0.2,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: ['Será necessário o número mínimo de 02 (dois) brigadistas.'],
  },
  {
    ate10: 0.4,
    acima10: 0.1,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: ['Será necessário o número mínimo de 02 (dois) brigadistas.'],
  },
  {
    ate10: 1,
    acima10: 1,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: ['Será necessário o número mínimo de 02 (dois) brigadistas.'],
  },
  {
    ate10: 0.4,
    acima10: 0.1,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: ['Será necessário o número mínimo de 02 (dois) brigadistas.'],
  },
  {
    ate10: 1,
    acima10: 1,
    exigido: 'Básico',
    recomendado: 'Básico',
  },
  {
    ate10: 1,
    acima10: 1,
    exigido: 'Básico',
    recomendado: 'Básico',
  },
  {
    ate10: 1,
    acima10: 1,
    exigido: 'Básico',
    recomendado: 'Básico',
  },
  {
    ate10: 0.5,
    acima10: 0.1,
    exigido: 'Básico',
    recomendado: 'Intermediário',
  },
  {
    ate10: 0.5,
    acima10: 0.2,
    exigido: 'Básico',
    recomendado: '50% Básico, 50% Intermediário',
  },
  {
    ate10: 0.5,
    acima10: 0.1,
    exigido: 'Básico',
    recomendado: 'Básico',
  },
  {
    ate10: 1,
    acima10: 1,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: ['Será necessário o número mínimo de 02 (dois) brigadistas.'],
  },
  {
    ate10: 0.6,
    acima10: 0.2,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: [
      'Será necessário o número mínimo de 02 (dois) brigadistas.',
      'Nos pavimentos onde houver UTIs e centros cirúrgicos, 100% da população fixa desse pavimento deve fazer parte da brigada de incêndio, salvo os plantonistas e funcionários temporários não considerados como parte fixa da população.',
    ],
  },
  {
    ate10: 0.3,
    acima10: 0.1,
    exigido: 'Básico',
    recomendado: 'Intermediário',
  },
  {
    ate10: 1,
    acima10: 1,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: ['Será necessário o número mínimo de 02 (dois) brigadistas.'],
  },
  {
    ate10: 0.4,
    acima10: 0.1,
    exigido: 'Básico',
    recomendado: 'Intermediário',
  },
  {
    ate10: 0.4,
    acima10: 0.05,
    exigido: 'Básico',
    recomendado: 'Intermediário',
  },
  {
    ate10: 0.5,
    acima10: 0.07,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: ['Será necessário o número mínimo de 02 (dois) brigadistas.'],
  },
  {
    ate10: 0.6,
    acima10: 0.1,
    exigido: 'Básico',
    recomendado: '50% Básico, 50% Intermediário',
    descricao: ['Será necessário o número mínimo de 02 (dois) brigadistas.'],
  },
  {
    ate10: 0.6,
    acima10: 0.1,
    exigido: 'Isento',
    recomendado: 'Isento',
  },
  {
    ate10: 0.4,
    acima10: 0.1,
    exigido: 'Básico',
    recomendado: 'Intermediário',
  },
  {
    ate10: 0.5,
    acima10: 0.2,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: ['Será necessário o número mínimo de 02 (dois) brigadistas.'],
  },
  {
    ate10: 0.5,
    acima10: 0.2,
    exigido: 'Básico',
    recomendado: '50% Básico, 50% Intermediário',
    descricao: ['Será necessário o número mínimo de 02 (dois) brigadistas.'],
  },
  {
    ate10: 1,
    acima10: 1,
    exigido: 'Básico',
    recomendado: 'Básico',
  },
  {
    ate10: 1,
    acima10: 1,
    exigido: 'Básico',
    recomendado: 'Avançado',
  },
  {
    ate10: 1,
    acima10: 1,
    exigido: 'Básico',
    recomendado: 'Avançado',
  },
  {
    ate10: 0,
    acima10: 0,
    exigido: 'Isento',
    recomendado: 'Isento',
  },
  {
    ate10: 0.6,
    acima10: 0.1,
    exigido: 'Básico',
    recomendado: 'Avançado',
  },
  {
    ate10: 1,
    acima10: 1,
    exigido: 'Básico',
    recomendado: 'Avançado',
  },
  {
    ate10: 0.3,
    acima10: 0.1,
    exigido: 'Básico',
    recomendado: 'Básico',
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
    recomendado: 'Básico',
  },
  {
    ate10: 0.4,
    acima10: 0.15,
    exigido: 'Básico',
    recomendado: 'Básico',
  },
  {
    ate10: 0,
    acima10: 0,
    exigido: 'Isento',
    recomendado: 'Isento',
  },
];

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
