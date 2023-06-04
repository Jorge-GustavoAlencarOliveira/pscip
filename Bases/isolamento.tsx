import React, {Dispatch, SetStateAction} from 'react';
import { DataStorage } from '../dataContext';
import TabelaDescricao from '../Tabelas/tabelaDescricao';
const valorAlfa = [
  [
    0.4, 0.4, 0.44, 0.46, 0.48, 0.49, 0.5, 0.51, 0.51, 0.51, 0.51, 0.51, 0.51,
    0.51, 0.51, 0.51, 0.51,
  ],
  [
    0.6, 0.66, 0.73, 0.79, 0.84, 0.88, 0.9, 0.92, 0.93, 0.94, 0.94, 0.95, 0.95,
    0.95, 0.95, 0.95, 0.95,
  ],
  [
    0.8, 0.8, 0.94, 1.02, 1.1, 1.17, 1.23, 1.27, 1.3, 1.32, 1.33, 1.33, 1.34,
    1.34, 1.34, 1.34, 1.34,
  ],
  [
    0.9, 1.0, 1.11, 1.22, 1.33, 1.42, 1.51, 1.58, 1.63, 1.66, 1.69, 1.7, 1.71,
    1.71, 1.71, 1.71, 1.71,
  ],
  [
    1, 1.14, 1.26, 1.39, 1.52, 1.64, 1.76, 1.85, 1.93, 1.99, 2.03, 2.05, 2.07,
    2.08, 2.08, 2.08, 2.08,
  ],
  [
    1.2, 1.37, 1.52, 1.68, 1.85, 2.02, 2.18, 2.34, 2.48, 2.59, 2.67, 2.73, 2.77,
    2.79, 2.8, 2.81, 2.81,
  ],
  [
    1.4, 1.56, 1.74, 1.93, 2.13, 2.34, 2.55, 2.76, 2.95, 3.12, 3.26, 3.36, 3.43,
    3.48, 3.51, 3.52, 3.53,
  ],
  [
    1.6, 1.73, 1.94, 2.15, 2.38, 2.63, 2.88, 3.13, 3.37, 3.6, 3.79, 3.95, 4.07,
    4.15, 4.2, 4.22, 4.24,
  ],
  [
    1.8, 2.04, 2.28, 2.54, 2.82, 3.12, 3.44, 3.77, 4.11, 4.43, 4.74, 5.01, 5.24,
    5.41, 5.52, 5.6, 5.64,
  ],
  [
    2.1, 2.3, 2.57, 2.87, 3.2, 3.55, 3.93, 4.33, 4.74, 5.16, 5.56, 5.95, 6.29,
    6.56, 6.77, 6.92, 7.01,
  ],
  [
    2.3, 2.54, 2.84, 3.17, 3.54, 3.93, 4.36, 4.83, 5.3, 5.8, 6.3, 6.78, 7.23,
    7.63, 7.94, 8.18, 8.34,
  ],
  [
    2.6, 2.95, 3.31, 3.7, 4.13, 4.61, 5.12, 5.68, 6.28, 6.91, 7.57, 8.24, 8.89,
    9.51, 10.0, 10.5, 10.8,
  ],
  [
    3, 3.32, 3.72, 4.16, 4.65, 5.19, 5.78, 6.43, 7.13, 7.88, 8.67, 9.5, 10.3,
    11.1, 11.9, 12.5, 13.1,
  ],
];

const classificaoSeveridade = [
  [20, 30, 40, 50, 60, 80, 100],
  [10, 15, 20, 25, 30, 40, 50, 60, 80, 100],
  [5, 7.5, 10, 12.5, 15, 20, 25, 30, 40, 50, 60, 80, 100],
];

const relacaoAlturaLargura = [
  1, 1.3, 1.6, 2.0, 2.5, 3.2, 4, 5, 6, 8, 10, 13, 16, 20, 25, 32, 40,
];

interface isolamentoProps {
  numero: number,
  quantidadeIsolamento: number[], 
  setQuantidadeIsolamento: Dispatch<SetStateAction<number[]>>

}

const CalculoIsolamento = ({numero, quantidadeIsolamento, setQuantidadeIsolamento }: isolamentoProps) => {
  const { descricao } = TabelaDescricao();
  const { valoresOcupacao } = React.useContext(DataStorage);
  const cargas = valoresOcupacao.map((item, index) =>
    item[1].map(
      (item1) => descricao[item1[0]][item1[1]][item1[2]].cargaincendio,
    ),
  );
  const [dimensoes, setDimensoes] = React.useState({
    largura: '',
    altura: '',
    abertura: '',
    fatorSeguranca: 1.5 || 3,
    cargaIncendio: 0,
  });
  const [dimensoes1, setDimensoes1] = React.useState({
    largura: '',
    altura: '',
    abertura: '',
    fatorSeguranca: 1.5 || 3,
    cargaIncendio: 0,
  });
  const [distanciaFinal, setDistanciaFinal] = React.useState<number[]>([]);
   
  function handleDelete (){
    setQuantidadeIsolamento(quantidadeIsolamento.filter(item => item !== quantidadeIsolamento[numero]))
  }

  function severidade(cargaincendio: number) {
    if (cargaincendio <= 680) return 0;
    if (cargaincendio > 680 && cargaincendio <= 1460) return 1;
    else return 2;
  }
  function valorXY(altura: number, largura: number, abertura: number) {
    let x;
    let z;
    if (altura >= largura) {
      x = altura / largura;
      z = largura;
    } else {
      x = largura / altura;
      z = altura;
    }
    const y = (abertura / (altura * largura)) * 100;
    return { x, y, z };
  }
  console.log(distanciaFinal)

  function distanciaCalculo() {
    if (
      dimensoes.altura !== '' &&
      dimensoes.largura !== '' &&
      dimensoes.abertura !== ''
    ) {
      const dist1 = () => {
        const { x, y, z } = valorXY(
          Number(dimensoes.altura),
          Number(dimensoes.largura),
          Number(dimensoes.abertura),
        );
        const valorSeveridade = severidade(dimensoes.cargaIncendio);
        const abertura = classificaoSeveridade[valorSeveridade].findIndex(
          (item) => item >= y,
        );
        const valorX = relacaoAlturaLargura.findIndex((item) => item >= x);
        const alfa = valorAlfa[abertura][valorX];
        const distancia = alfa * z + dimensoes.fatorSeguranca;
        setDistanciaFinal(item => [...item, distancia]);
      }
      const dist2 = () => {
        const { x, y, z } = valorXY(
          Number(dimensoes1.altura),
          Number(dimensoes1.largura),
          Number(dimensoes1.abertura),
        );
        const valorSeveridade = severidade(dimensoes1.cargaIncendio);
        const abertura = classificaoSeveridade[valorSeveridade].findIndex(
          (item) => item >= y,
        );
        const valorX = relacaoAlturaLargura.findIndex((item) => item >= x);
        const alfa = valorAlfa[abertura][valorX];
        const distancia = alfa * z + dimensoes.fatorSeguranca;
        setDistanciaFinal(item => [...item, distancia]);
      }
      dist1();
      dist2()
    }
    return null;
  }
  return (
    <>
      <div style={{marginTop: '2rem'}}>
        <div>
          {numero > 0 && (<button style={{float: 'right'}} onClick={handleDelete}>Excluir</button>)}
          <div>
            <select>
              {cargas.map((item, index) => {
                return (
                  <option key={index} value={index}>
                    Risco {index + 1}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <span>Largura: </span>
            <input
              type="text"
              placeholder="m"
              onChange={({ target }) =>
                setDimensoes((item) => ({ ...item, largura: target.value }))
              }
            />
          </div>
        </div>
        <div>
          <span>Altura: </span>
          <input
            type="text"
            placeholder="m"
            onChange={({ target }) =>
              setDimensoes((item) => ({ ...item, altura: target.value }))
            }
          />
        </div>
        <div>
          <span>Somatório das áreas das abertura: </span>
          <input
            type="text"
            placeholder="m²"
            onChange={({ target }) =>
              setDimensoes((item) => ({ ...item, abertura: target.value }))
            }
          />
        </div>
        <div>
          <span>Carga incêndio: </span>
          <input
            type="text"
            placeholder="MJ/m²"
            onChange={({ target }) =>
              setDimensoes((item) => ({
                ...item,
                cargaIncendio: +target.value,
              }))
            }
          />
        </div>
      </div>
      <div>
        <div>
          <div>
            <select>
              {cargas.map((item, index) => {
                return (
                  <option key={index} value={index}>
                    Risco {index + 1}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <span>Largura: </span>
            <input
              type="text"
              placeholder="m"
              onChange={({ target }) =>
                setDimensoes1((item) => ({ ...item, largura: target.value }))
              }
            />
          </div>
        </div>
        <div>
          <span>Altura: </span>
          <input
            type="text"
            placeholder="m"
            onChange={({ target }) =>
              setDimensoes1((item) => ({ ...item, altura: target.value }))
            }
          />
        </div>
        <div>
          <span>Somatório das áreas das abertura: </span>
          <input
            type="text"
            placeholder="m²"
            onChange={({ target }) =>
              setDimensoes1((item) => ({ ...item, abertura: target.value }))
            }
          />
        </div>
        <div>
          <span>Carga incêndio: </span>
          <input
            type="text"
            placeholder="MJ/m²"
            onChange={({ target }) =>
              setDimensoes1((item) => ({
                ...item,
                cargaIncendio: +target.value,
              }))
            }
          />
        </div>
      </div>
      <button onClick={distanciaCalculo}>Calcular</button>
      {distanciaFinal.length > 0 && (
        <h2>A distancia mínima é: {Math.max(...distanciaFinal).toFixed(2)} metros</h2>
      )}
    </>
  );
};

const Isolamento = () => {
  const [tipo, setTipo] = React.useState('');
  const [quantidadeIsolamento, setQuantidadeIsolamento] = React.useState([0]);
  const [count, setCount] = React.useState(1);

  function handleAdd() {
    setCount((item) => item + 1);
    setQuantidadeIsolamento((item) => [...item, count]);
  }
  return (
    <>
      <div>
        <span>O isolamento de risco dá-se por:</span>
        <br />
        <input
          type="radio"
          id="distancia"
          name="isolamentoderisco"
          value="distancia"
          onChange={({ target }) => setTipo(target.value)}
          checked={tipo === 'distancia'}
        />
        <label htmlFor="distancia">Distância entre fachadas</label>
        <input
          type="radio"
          id="parede"
          name="isolamentoderisco"
          value="parede"
          onChange={({ target }) => setTipo(target.value)}
          checked={tipo === 'parede'}
        />
        <label htmlFor="parede">Parede corta-fogo</label>
      </div>
      {tipo === 'distancia' && (
        <div>
          <button
            style={{ display: 'block', float: 'right' }}
            onClick={handleAdd}
          >
            Adicionar
          </button>
          <div>
            {quantidadeIsolamento.map((item, index) => {
              return (
                <CalculoIsolamento
                  key={item}
                  numero={index}
                  quantidadeIsolamento={quantidadeIsolamento}
                  setQuantidadeIsolamento={setQuantidadeIsolamento}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Isolamento;
