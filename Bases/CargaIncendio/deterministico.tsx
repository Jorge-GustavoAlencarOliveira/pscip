import React, { Dispatch, SetStateAction } from 'react';
import { tabelac1, valorestabelac1 } from './TabelaDeterministico';
import { Table } from 'react-bootstrap';
import {toast} from 'react-toastify'
interface moduloProps {
  numero: number;
  modulos: number[];
  modulo: number[];
  setModulo: Dispatch<SetStateAction<number[]>>;
  setModulos: Dispatch<SetStateAction<number[]>>;
  final: Dispatch<SetStateAction<number>>;
  media: Dispatch<SetStateAction<number>>;
  setValorFinal: Dispatch<SetStateAction<number>>;
}

const Modulo = ({
  numero,
  modulo,
  setModulo,
  setModulos,
  modulos,
  final,
  media,
  setValorFinal,
}: moduloProps) => {
  const [mat, setMat] = React.useState<number | string>(0);
  const [area, setArea] = React.useState('');
  const [massa, setMassa] = React.useState('');
  const [valor, setValor] = React.useState<number>(0);

  function handleDelete(numero: number) {
    setModulo(modulo.filter((item, index) => index !== numero));
    setModulos(modulos.filter((item) => item !== modulos[numero]));
    media(0);
    final(0);
    setValorFinal(0);
  }
  function handleCalcular(numero: number) {
    if (area === '' || massa === '') {
      return;
    }
    let carga = (valorestabelac1[Number(mat)] * Number(massa)) / Number(area);
    setValor(carga);
    modulos[numero] = carga;
  }

  return (
    <>
      <div className="d-flex flex-column bg-primary-subtle p-3 my-2">
        <div className="d-flex justify-content-between align-items-center">
          <span className="mb-3 fw-bold fs-4 text-primary">
            Modulo {numero + 1}{' '}
          </span>
          {numero !== 0 && (
            <button
              className="float-right btn btn-secondary"
              onClick={() => handleDelete(numero)}
            >
              Apagar
            </button>
          )}
        </div>
        <div className="d-flex flex-column gap-2">
          <span className="fw-bold">Material:</span>
          <select
            className="form-select"
            onChange={({ target }) => setMat(target.value)}
          >
            {tabelac1.map((item, index) => {
              return (
                <option key={index} value={index}>
                  {item}
                </option>
              );
            })}
          </select>
          <span className="fw-bold">Massa:</span>
          <input
            type="text"
            value={massa}
            onChange={({ target }) => setMassa(target.value)}
            placeholder="Kg"
            className="form-control"
          />
          <span className="fw-bold">Área:</span>
          <input
            type="text"
            value={area}
            onChange={({ target }) => setArea(target.value)}
            placeholder="metros"
            className="form-control"
          />
          <div>
            <button
              className="btn btn-primary mt-2"
              onClick={() => handleCalcular(numero)}
            >
              Calcular
            </button>
          </div>
          {valor !== 0 && (
            <span className="fs-4 fw-bold">
              Carga Incêndio: {valor.toFixed(2).replace('.', ',')} MJ/m²
            </span>
          )}
        </div>
      </div>
    </>
  );
};

interface ocupacaoProps {
  numero: number;
  valorOcupacao: number[][];
  setValorOcupacao: (valorOcupacao: number[][]) => void;
}

const Deterministico = ({
  numero,
  valorOcupacao,
  setValorOcupacao,
}: ocupacaoProps) => {
  const [count, setCount] = React.useState<number>(1);
  const [modulo, setModulo] = React.useState<Array<number>>([0]);
  const [modulos, setModulos] = React.useState<Array<number>>(
    new Array(modulo.length).fill(0),
  );
  const [final, setFinal] = React.useState<number>(0);
  const [mediaf, setMediaf] = React.useState<number>(0);
  const [valorFinal, setValorFinal] = React.useState<number>(0);

  function handleAdicionar() {
    setCount((item) => item + 1);
    setModulo((item) => [...item, count]);
    setValorFinal(0);
  }
  function sortFunction(a: any, b: any) {
    return a - b;
  }

  function handleFinalizar() {
    if (modulos[0] === 0){
      return toast.error('Preencha os valores')
    }
    
    let modulosB = [...modulos];
    let media = modulosB.sort(sortFunction).reverse();
    let mediafinal = (media[0] + media[1]) / 2;
    let cargafinal = Math.max(...modulos) * 0.85;
    setFinal(+cargafinal.toFixed(2));
    setMediaf(+mediafinal.toFixed(2));

    if (modulos.length === 1) {
      if (modulos[0] <= 300) {
        valorOcupacao[numero] = [9, 1, 0, +modulos[0].toFixed(2)];
        setValorOcupacao(valorOcupacao);
        setValorFinal(1);
      }
      if (modulos[0] > 300 && modulos[0] <= 1200) {
        valorOcupacao[numero] = [9, 2, 0, +modulos[0].toFixed(2)];
        setValorOcupacao(valorOcupacao);
        setValorFinal(2);
      }
      if (modulos[0] > 1200) {
        valorOcupacao[numero] = [9, 3, 0, +modulos[0].toFixed(2)];
        setValorOcupacao(valorOcupacao);
        setValorFinal(3);
      }
    } else {
      let cargaIncendioFinal = Math.max(mediafinal, cargafinal);
      if (cargaIncendioFinal <= 300) {
        setValorFinal(1);
        valorOcupacao[numero] = [9, 1, 0, cargaIncendioFinal];
        setValorOcupacao(valorOcupacao);
      }
      if (cargaIncendioFinal > 300 && cargaIncendioFinal <= 1200) {
        setValorFinal(2);
        valorOcupacao[numero] = [9, 2, 0, cargaIncendioFinal];
        setValorOcupacao(valorOcupacao);
      }
      if (cargaIncendioFinal > 1200) {
        setValorFinal(3);
        valorOcupacao[numero] = [9, 3, 0, cargaIncendioFinal];
        setValorOcupacao(valorOcupacao);
      }
    }
  }
  return (
    <div className="d-flex flex-column gap-2 my-2">
      <div>
        <button className="float-end btn btn-primary" onClick={handleAdicionar}>
          Adicionar modulo
        </button>
      </div>
      <div>
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
              setValorFinal={setValorFinal}
            />
          );
        })}
      </div>
      <div>
        <button
          className="btn btn-success btn-lg fw-bold my-3"
          onClick={() => {
            handleFinalizar();
          }}
        >
          Finalizar Dimensionamento
        </button>
      </div>
      {modulos.length > 1 && (
        <Table striped bordered className="table-success">
          <tbody className="fs-4">
            <tr>
              <td className="w-50">
                85 % da maior carga de incêndio encontrada:
              </td>
              <td className="text-center">{final.toFixed(2).replace('.', ',')} MJ/m²</td>
            </tr>
            <tr>
              <td className="w-50">
                {' '}
                Média das duas maiores carga incêndio encontradas:
              </td>
              <td className="text-center">{mediaf.toFixed(2).replace('.', ',')} MJ/m²</td>
            </tr>
          </tbody>
        </Table>
      )}
      {valorFinal === 1 && (
        <div>
          <p className="fw-bold fs-4">Divisão: J-2</p>
          <p className="fw-bold fs-4">
            Descrição: Depósitos e similares com carga de incêndio baixa
          </p>
        </div>
      )}
      {valorFinal === 2 && (
        <div>
          <p className="fw-bold fs-4">Divisão: J-3</p>
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

export default Deterministico;
