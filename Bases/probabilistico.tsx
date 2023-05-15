import React, { Dispatch, SetStateAction } from 'react';
import ProbabilisticoTabela from './probabilisticoTabela';
import styles from '../src/pages/home.module.css';

interface moduloProps {
  numero: number;
  modulo: number[];
  setModulo: Dispatch<SetStateAction<number[]>>;
  modulos: number[];
}

const Modulo = ({ numero, modulo, setModulo, modulos }: moduloProps) => {
  const { tabela1, tabela2 } = ProbabilisticoTabela();
  const [mat, setMat] = React.useState<number | string>(0);
  const [altura, setAltura] = React.useState('');
  const [valor, setValor] = React.useState<number>(0);
  const [final, setFinal] = React.useState<number>(0);

  function handleDelete(numero: number) {
    setModulo(modulo.filter((item, index) => index !== numero));
    modulos[numero] = 0;
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
        <button onClick={() => handleDelete(numero)}>Apagar</button>
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

const Probabilistico = () => {
  const [modulo, setModulo] = React.useState<Array<number>>([0]);
  const [modulos, setModulos] = React.useState<Array<number>>(
    new Array(modulo.length).fill(0),
  );
  const [final, setFinal] = React.useState<number>(0);

  let i = 1;
  function handleAdicionar() {
    setModulo((item) => [...item, i++]);
  }

  function handleCargaFinal() {
    let cargafinal = Math.max(...modulos);
    setFinal(cargafinal);
  }

  return (
    <div className={styles.proba}>
      <div>
        <button onClick={handleAdicionar}>Adicionar modulo</button>
      </div>
      {modulo.map((item, index) => {
        return (
          <Modulo
            key={index}
            numero={Number(index)}
            modulo={modulo}
            setModulo={setModulo}
            modulos={modulos}
          />
        );
      })}
      {modulo.length > 1 && (
        <button onClick={handleCargaFinal}>
          Calcular carga incêndio total
        </button>
      )}
      {final !== 0 && <h2>Carga incêndio Final: {final.toFixed(2)} MJ/m²</h2>}
    </div>
  );
};

export default Probabilistico;
