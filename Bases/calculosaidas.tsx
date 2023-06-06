import React, { InputHTMLAttributes } from 'react';

type populacaoProps = {
  populacao: (credential: number, credential1: any) => number;
};

type divisaoProps = [string, number[], populacaoProps][];

const divisao: divisaoProps = [
  [
    'A-1',
    [60, 45, 100],
    {
      populacao: (dormitorio: number) => {
        return dormitorio * 2;
      },
    },
  ],
  [
    'A-2',
    [60, 45, 100],
    {
      populacao: (dormitorio: number) => {
        return dormitorio * 2;
      },
    },
  ],
  [
    'A-3',
    [60, 45, 100],
    {
      populacao: (dormitorio: number, area: number) => {
        return dormitorio * 2 + area / 4;
      },
    },
  ],
  [
    'B-1',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 15;
      },
    },
  ],
  [
    'B-2',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 15;
      },
    },
  ],
  [
    'C-1',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 3;
      },
    },
  ],
  [
    'C-2',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 3;
      },
    },
  ],
  [
    'C-3',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 3;
      },
    },
  ],
  [
    'D-1',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 7;
      },
    },
  ],
  [
    'D-2',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 7;
      },
    },
  ],
  [
    'D-3',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 7;
      },
    },
  ],
  [
    'D-4',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 7;
      },
    },
  ],
  [
    'E-1',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 1.5;
      },
    },
  ],
  [
    'E-2',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 1.5;
      },
    },
  ],
  [
    'E-3',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 1.5;
      },
    },
  ],
  [
    'E-4',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 1.5;
      },
    },
  ],
  [
    'E-5',
    [30, 22, 30],
    {
      populacao: (area: number) => {
        return area / 1.5;
      },
    },
  ],
  [
    'E-6',
    [30, 22, 30],
    {
      populacao: (area: number) => {
        return area / 1.5;
      },
    },
  ],
  [
    'F-1',
    [100, 75, 100],
    {
      populacao: (area: number) => {
        return area / 1.5;
      },
    },
  ],
  [
    'F-2',
    [100, 75, 100],
    {
      populacao: (area: number) => {
        return area;
      },
    },
  ],
  [
    'F-3',
    [100, 75, 100],
    {
      populacao: (area: number) => {
        return area * 2;
      },
    },
  ],
  [
    'F-4',
    [100, 75, 100],
    {
      populacao: (area: number) => {
        return area / 3;
      },
    },
  ],
  [
    'F-5',
    [100, 75, 100],
    {
      populacao: (area: number) => {
        return area / 1;
      },
    },
  ],
  [
    'F-6',
    [100, 75, 100],
    {
      populacao: (area: number) => {
        return area * 2;
      },
    },
  ],
  [
    'F-7',
    [100, 75, 100],
    {
      populacao: (area: number) => {
        return area * 2;
      },
    },
  ],
  [
    'F-8',
    [100, 75, 100],
    {
      populacao: (area: number) => {
        return area / 1;
      },
    },
  ],
  [
    'F-9',
    [100, 75, 100],
    {
      populacao: (area: number) => {
        return area / 1;
      },
    },
  ],
  [
    'F-10',
    [100, 75, 100],
    {
      populacao: (area: number) => {
        return area / 1.5;
      },
    },
  ],
  [
    'F-11',
    [100, 75, 100],
    {
      populacao: (area: number) => {
        return area / 1;
      },
    },
  ],
  [
    'G-1',
    [100, 60, 100],
    {
      populacao: (vagas: number) => {
        return vagas / 40;
      },
    },
  ],
  [
    'G-2',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 40;
      },
    },
  ],
  [
    'G-3',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 40;
      },
    },
  ],
  [
    'G-4',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 40;
      },
    },
  ],
  [
    'G-5',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 40;
      },
    },
  ],
  [
    'H-1',
    [60, 45, 100],
    {
      populacao: (area: number) => {
        return area / 7;
      },
    },
  ],
  [
    'H-2',
    [30, 22, 30],
    {
      populacao: (dormitorio: number, area: number) => {
        return dormitorio * 2 + area / 4;
      },
    },
  ],
  [
    'H-3',
    [100, 60, 100],
    {
      populacao: (leito: number, area: number) => {
        return leito * 1.5 + area / 7;
      },
    },
  ],
  [
    'H-4',
    [60, 45, 100],
    {
      populacao: (area: number) => {
        return area / 7;
      },
    },
  ],
  [
    'H-5',
    [60, 45, 100],
    {
      populacao: (area: number) => {
        return area;
      },
    },
  ],
  [
    'H-6',
    [60, 45, 100],
    {
      populacao: (area: number) => {
        return area / 7;
      },
    },
  ],
  [
    'I-1',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 10;
      },
    },
  ],
  [
    'I-2',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 10;
      },
    },
  ],
  [
    'I-3',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 10;
      },
    },
  ],
  [
    'J-1',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 30;
      },
    },
  ],
  [
    'J-2',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 30;
      },
    },
  ],
  [
    'J-3',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 30;
      },
    },
  ],
  [
    'J-4',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 30;
      },
    },
  ],
  [
    'L-1',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 3;
      },
    },
  ],
  [
    'L-2',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 10;
      },
    },
  ],
  [
    'L-3',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 10;
      },
    },
  ],
];

const CalculoSaidas = () => {
  const [div, setDiv] = React.useState<number>(0);
  const [area, setArea] = React.useState<number>(0);
  const [dormitorio, setDormitorio] = React.useState<number>(0);
  // console.log(divisao.map(item => item[0].indexOf('G-1')))
  const ref = React.useRef<HTMLInputElement>(null)
  const ref1 = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    setArea(0)
    setDormitorio(0)
    if(ref.current){
      ref.current.value = ''
    }
    if(ref1.current){
      ref1.current.value = ''
    }
  },[div])

  function handleCalcular() {
    const populacao = Math.ceil(divisao[div][2].populacao(area, null));
    const acesso = Math.ceil(
      divisao[div][2].populacao(area, null) / divisao[div][1][0],
    );
    const escada = Math.ceil(
      divisao[div][2].populacao(area, null) / divisao[div][1][1],
    );
    const porta = Math.ceil(
      divisao[div][2].populacao(area, null) / divisao[div][1][2],
    );
    return { populacao, acesso, escada, porta };
  }
  function handleCalcular1() {
    const populacao = Math.ceil(divisao[div][2].populacao(dormitorio, area));
    const acesso = Math.ceil(
      divisao[div][2].populacao(dormitorio, area) / divisao[div][1][0],
    );
    const escada = Math.ceil(
      divisao[div][2].populacao(dormitorio, area) / divisao[div][1][1],
    );
    const porta = Math.ceil(
      divisao[div][2].populacao(dormitorio, area) / divisao[div][1][2],
    );
    return { populacao, acesso, escada, porta };
  }
  return (
    <div>
      <h1>Dimensionamento de saídas de emergencia</h1>
      <select onChange={({ target }) => setDiv(+target.value)}>
        {divisao.map((item, index) => {
          return (
            <option key={index} value={index}>
              {item[0]}
            </option>
          );
        })}
      </select>
      {div !== 0 && div !== 2 && div !== 1 && div !== 35 && div !== 36 &&  (
        <div>
          {div === 29 ? (
            <div>
              <label style={{ marginTop: '1rem' }}>Vagas: </label>
              <input
                style={{ margin: '1rem 0' }}
                type="text"
                placeholder="area"
                onChange={({ target }) => setArea(+target.value)}
                ref={ref}
              />
            </div>
          ) : (
            <div>
              <label style={{ marginTop: '1rem' }}>Área: </label>
              <input
                style={{ margin: '1rem 0' }}
                type="text"
                placeholder="area"
                onChange={({ target }) => setArea(+target.value)}
                ref={ref}
              />
            </div>
          )}
          <p>População: {handleCalcular()?.populacao} pessoas</p>
          <p>
            Acessos e descargas de passagem: {handleCalcular()?.acesso}{' '}
            unidade(s) de passagem
          </p>
          <p>
            Escadas e rampas: {handleCalcular()?.escada} unidade(s) de passagem
          </p>
          <p>Portas: {handleCalcular()?.porta} unidade(s) de passagem</p>
        </div>
      )}
      {(div === 0 || div === 1) && (
        <div>
          <label style={{ marginTop: '1rem' }}>Dormitórios: </label>
          <input
            style={{ margin: '1rem 0' }}
            type="text"
            placeholder="unidade"
            onChange={({ target }) => setArea(+target.value)}
            ref={ref}
          />
          <p>População: {handleCalcular()?.populacao} pessoas</p>
          <p>
            Acessos e descargas de passagem: {handleCalcular()?.acesso}{' '}
            unidade(s) de passagem
          </p>
          <p>
            Escadas e rampas: {handleCalcular()?.escada} unidade(s) de passagem
          </p>
          <p>Portas: {handleCalcular()?.porta} unidade(s) de passagem</p>
        </div>
      )}
      {(div === 2 || div === 35 || div === 36) && (
        <div>
          {div === 36 ? (
            <div>
            <label style={{ marginTop: '1rem' }}>Área do ambulatório:{' '}</label>
            <input
              type="text"
              placeholder="m²"
              onChange={({ target }) => setArea(+target.value)}
              ref={ref1}
            />
            <label style={{ marginTop: '1rem' }}>
            Número de leitos:
            </label>
            <input
              type="text"
              placeholder="unidade"
              onChange={({ target }) => setDormitorio(+target.value)}
              ref={ref}
            />
            <br />
          </div>
          ) : (
            <div>
              <label style={{ marginTop: '1rem' }}>Área de alojamento: </label>
              <input
                type="text"
                placeholder="m²"
                onChange={({ target }) => setArea(+target.value)}
                ref={ref1}
              />
              <br />
              <label style={{ marginTop: '1rem' }}>
                Quantidade de dormitórios:{' '}
              </label>
              <input
                type="text"
                placeholder="unidade"
                onChange={({ target }) => setDormitorio(+target.value)}
                ref={ref}
              />
            </div>
          )}
          <p>População: {handleCalcular1()?.populacao} pessoas</p>
          <p>
            Acessos e descargas de passagem: {handleCalcular1()?.acesso}{' '}
            unidade(s) de passagem
          </p>
          <p>
            Escadas e rampas: {handleCalcular1()?.escada} unidade(s) de passagem
          </p>
          <p>Portas: {handleCalcular1()?.porta} unidade(s) de passagem</p>
        </div>
      )}
    </div>
  );
};

export default CalculoSaidas;
