import React, { Dispatch, SetStateAction } from 'react';
import styles from '../../src/pages/home.module.css';
import { tabela1, tabela2 } from './TabelaProbabilistico';

interface moduloProps {
  numero: number;
  modulo: number[];
  setModulo: Dispatch<SetStateAction<number[]>>;
  setFinal: Dispatch<SetStateAction<number>>;
  modulos: number[];
}

const Modulo = ({
  numero,
  modulo,
  setModulo,
  modulos,
  setFinal,
}: moduloProps) => {
  const [mat, setMat] = React.useState<number | string>(0);
  const [altura, setAltura] = React.useState('');
  const [valor, setValor] = React.useState<number>(0);

  function handleDelete(numero: number) {
    setModulo(modulo.filter((item, index) => index !== numero));
    modulos[numero] = 0;
    setFinal(0);
  }

  function handleCalcular(numero: number) {
    if (altura === '') {
      return;
    }
    let carga = tabela2[Number(mat)] * Number(altura);
    setValor(carga);
    modulos[numero] = carga;
  }

  return (
    <>
      <div className={styles.modulo}>
        <span>Modulo {numero + 1} </span>
        {numero !== 0 && (
          <button onClick={() => handleDelete(numero)}>Apagar</button>
        )}
        <div className={styles.proba}>
          <span>Material:</span>
          <select onChange={({ target }) => setMat(target.value)}>
            {tabela1.map((item, index) => {
              return (
                <option key={index} value={index}>
                  {item}
                </option>
              );
            })}
          </select>
          <span>Altura:</span>
          <input
            type="text"
            value={altura}
            onChange={({ target }) => setAltura(target.value)}
            placeholder="metros"
          />
          <button onClick={() => handleCalcular(numero)}>Calcular</button>
          {valor !== 0 && <h2>Carga Incêndio: {valor.toFixed(2)} MJ/m²</h2>}
        </div>
      </div>
    </>
  );
};
interface ocupacaoProps {
  numero: number;
  valorOcupacao: number[][],
  setValorOcupacao: Dispatch<SetStateAction<number[][]>> 
}

const Probabilistico = ({numero, valorOcupacao, setValorOcupacao}:ocupacaoProps) => {
  const [count, setCount] = React.useState<number>(1);
  const [modulo, setModulo] = React.useState<Array<number>>([0]);
  const [modulos, setModulos] = React.useState<Array<number>>(
    new Array(modulo.length).fill(0),
  );
  const [valorFinal, setValorFinal] = React.useState<number>(0);
  
  let i = 1;
  function handleAdicionar() {
    setCount((item) => item + 1);
    setModulo((item) => [...item, count]);
  }

  function handleCargaFinal() {
    if(modulos.length === 1){
      if (modulos[0] <= 300) {
        valorOcupacao[numero] = [9,1,0, +modulos[0].toFixed(2)]
        setValorOcupacao(valorOcupacao)
        setValorFinal(1);
      }
      if (modulos[0] > 300 && modulos[0] <= 1200) {
        valorOcupacao[numero] = [9,2,0, +modulos[0].toFixed(2)]
        setValorOcupacao(valorOcupacao)
        setValorFinal(2);
      }
      if (modulos[0] > 1200) {
        valorOcupacao[numero] = [9,3,0, +modulos[0].toFixed(2)]
        setValorOcupacao(valorOcupacao)
        setValorFinal(3);
      }
    } else {
      let cargaIncendioFinal = Math.max(...modulos);
      if (cargaIncendioFinal <= 300) {
        setValorFinal(1);
        valorOcupacao[numero] = [9,1,0, cargaIncendioFinal]
        setValorOcupacao(valorOcupacao)
      }
      if (cargaIncendioFinal > 300 && cargaIncendioFinal <= 1200) {
        setValorFinal(2);
        valorOcupacao[numero] = [9,2,0, cargaIncendioFinal]
        setValorOcupacao(valorOcupacao)
      }
      if (cargaIncendioFinal > 1200) {
        setValorFinal(3);
        valorOcupacao[numero] = [9,3,0, cargaIncendioFinal]
        setValorOcupacao(valorOcupacao)
      }
    }
    }


  return (
    <div className={styles.proba}>
      <div>
        <button onClick={handleAdicionar}>Adicionar modulo</button>
      </div>
      {modulo.map((item, index) => {
        return (
          <Modulo
            key={item}
            numero={Number(index)}
            modulo={modulo}
            setModulo={setModulo}
            modulos={modulos}
            setFinal={setValorFinal}
          />
        );
      })}
      <button onClick={handleCargaFinal}>
          Calcular carga incêndio total
      </button>
      {valorFinal === 1 && (
        <div>
          <p>Divisão: J-2</p>
          <p>
            Descrição: Depósitos e similares com carga de incêndio baixa
          </p>
        </div>
      )}
      {valorFinal === 2 && (
        <div>
          <p>Divisão: J-3</p>
          <p>
            Descrição: Depósitos e similares com carga de incêndio média
          </p>
        </div>
      )}
      {valorFinal === 3 && (
        <div>
          <p>Divisão: J-4</p>
          <p>
            Descrição: Depósitos e similares com carga de incêndio alta
          </p>
        </div>
      )}
    </div>
  );
};

export default Probabilistico;
