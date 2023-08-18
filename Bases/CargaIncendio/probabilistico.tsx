import React, { Dispatch, SetStateAction } from 'react';
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
      <div className="d-flex flex-column bg-primary-subtle p-3 my-2">
        <div  className="d-flex justify-content-between align-items-center">
          <span className="mb-3 fw-bold fs-4 text-primary">Modulo {numero + 1} </span>
          {numero !== 0 && (
            <button className="float-right btn btn-secondary" onClick={() => handleDelete(numero)}>Apagar</button>
          )}
        </div>
        <div className="d-flex flex-column gap-2">
          <span className="fw-bold">Material:</span>
          <select 
          className="form-select"
          onChange={({ target }) => setMat(target.value)}>
            {tabela1.map((item, index) => {
              return (
                <option key={index} value={index}>
                  {item}
                </option>
              );
            })}
          </select>
          <span className="fw-bold">Altura:</span>
          <input
            type="text"
            value={altura}
            onChange={({ target }) => setAltura(target.value)}
            placeholder="metros"
            className="form-control"
          />
          <div>
            <button className="btn btn-primary mt-2" onClick={() => handleCalcular(numero)}>Calcular</button>
          </div>
          {valor !== 0 && <span className="fs-4 fw-bold">Carga Incêndio: {valor.toFixed(2).replace('.', ',')} MJ/m²</span>}
        </div>
      </div>
    </>
  );
};
interface ocupacaoProps {
  numero: number;
  valorOcupacao: number[][],
  setValorOcupacao: (valorOcupacao: number[][]) => void 
}

const Probabilistico = ({numero, valorOcupacao, setValorOcupacao}:ocupacaoProps) => {
  const [count, setCount] = React.useState<number>(1);
  const [modulo, setModulo] = React.useState<Array<number>>([0]);
  const [modulos, setModulos] = React.useState<Array<number>>(
    new Array(modulo.length).fill(0),
  );
  const [valorFinal, setValorFinal] = React.useState<number>(0);
  
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
    <div className='d-flex flex-column gap-2 my-2'>
      <div>
        <button className="float-end btn btn-primary" onClick={handleAdicionar}>Adicionar modulo</button>
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
      <div>
        <button  className="btn btn-success btn-lg fw-bold my-3" onClick={handleCargaFinal}>
            Calcular carga incêndio total
        </button>
      </div>
      {valorFinal === 1 && (
        <div>
          <p className="fw-bold fs-4">Divisão: J-2</p>
          <p className="fw-bold fs-4">
            Descrição: Depósitos e similares com carga de incêndio baixa
          </p>
        </div>
      )}
      {valorFinal === 2 && (
        <div className="fw-bold fs-4">
          <p>Divisão: J-3</p>
          <p className="fw-bold fs-4">
            Descrição: Depósitos e similares com carga de incêndio média
          </p>
        </div>
      )}
      {valorFinal === 3 && (
        <div>
          <p className="fw-bold fs-4">Divisão: J-4</p>
          <p className="fw-bold fs-4">
            Descrição: Depósitos e similares com carga de incêndio alta
          </p>
        </div>
      )}
    </div>
  );
};

export default Probabilistico;
