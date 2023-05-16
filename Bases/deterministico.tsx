import React, { Dispatch, SetStateAction } from 'react';
import DeterministicoTabela from './deterministicoTabela';
import styles from '../src/pages/home.module.css';

interface moduloProps {
  numero: number;
  modulos: number[];
  modulo: number[];
  setModulo: Dispatch<SetStateAction<number[]>>;
  setModulos: Dispatch<SetStateAction<number[]>>;
  final: Dispatch<SetStateAction<number>>;
  media: Dispatch<SetStateAction<number>>;
}

const Modulo = ({
  numero,
  modulo,
  setModulo,
  setModulos,
  modulos,
  final,
  media,
}: moduloProps) => {
  const { material, valores } = DeterministicoTabela();
  const [mat, setMat] = React.useState<number | string>(0);
  const [area, setArea] = React.useState('');
  const [massa, setMassa] = React.useState('');
  const [valor, setValor] = React.useState<number>(0);

  function handleDelete(numero: number) {
    setModulo(modulo.filter((item, index) => index !== numero));
    setModulos(modulos.filter(item => item !== modulos[numero]))
    media(0);
    final(0);
  }
  function handleCalcular(numero: number) {
    if (area === '' || massa === '') {
      return;
    }
    let carga = (valores[Number(mat)] * Number(massa)) / Number(area);
    setValor(carga);
    modulos[numero] = carga;
  }
  return (
    <>
      <div className={styles.modulo}>
        <span>Modulo {numero + 1} </span>
        {numero !== 0 && <button onClick={() => handleDelete(numero)}>Apagar</button>}
        <div className={styles.proba}>
          <span>Material:</span>
          <select onChange={({ target }) => setMat(target.value)}>
            {material.map((item, index) => {
              return (
                <option key={index} value={index}>
                  {item}
                </option>
              );
            })}
          </select>
          <span>Massa:</span>
          <input
            type="text"
            value={massa}
            onChange={({ target }) => setMassa(target.value)}
            placeholder="Kg"
          />
          <span>Area:</span>
          <input
            type="text"
            value={area}
            onChange={({ target }) => setArea(target.value)}
            placeholder="metros"
          />
          <button onClick={() => handleCalcular(numero)}>Calcular</button>
          {valor !== 0 && <h2>Carga Incêndio: {valor.toFixed(2)} MJ/m²</h2>}
        </div>
      </div>
    </>
  );
};

const Deterministico = () => {
  const [count, setCount] = React.useState<number>(1);
  const [modulo, setModulo] = React.useState<Array<number>>([0]);
  const [modulos, setModulos] = React.useState<Array<number>>(
    new Array(modulo.length).fill(0),
  );
  const [final, setFinal] = React.useState<number>(0);
  const [mediaf, setMediaf] = React.useState<number>(0);

  function handleAdicionar() {
    setCount(item => item + 1)
    setModulo((item) => [...item, count]);
  }
  function handleCargaFinal() {
    function sortFunction(a:any,b:any){
      return (a-b)
    }
    let modulosB = [...modulos]
    let media = modulosB.sort(sortFunction).reverse();
    let mediafinal = (media[0] + media[1]) / 2;
    let cargafinal = Math.max(...modulos) * 0.85;
    setFinal(cargafinal);
    setMediaf(mediafinal);
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
            final={setFinal}
            media={setMediaf}
            setModulos={setModulos}
          />
        );
      })}
      {modulo.length > 1 && (
        <button onClick={handleCargaFinal}>
          Calcular carga incêndio total
        </button>
      )}
      {final !== 0 && (
        <h2>
          85 % da maior carga de incêndio encontrada: {final.toFixed(2)} MJ/m²
        </h2>
      )}
      {mediaf !== 0 && (
        <h2>
          Média das duas maiores carga incêndio encontradas: {mediaf.toFixed(2)} MJ/m²
        </h2>
      )}
    </div>
  );
};

export default Deterministico;
