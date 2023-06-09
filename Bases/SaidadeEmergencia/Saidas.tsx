import React from 'react';
import TabelaSaidaEmergencia from './tabelaSaidaEmergencia';
import ModuloShow from './ModuloShow';
import moduloReducer from './ModuloReducer';
import { handleCalcular, handleCalcular1 } from './Calculo';

let id = 1;

const CalculoSaidas = () => {
  const { divisao } = TabelaSaidaEmergencia();
  const [div, setDiv] = React.useState<number>(0);
  const [area, setArea] = React.useState<number | string>('');
  const [dormitorio, setDormitorio] = React.useState<number | string>('');
  const [ambiente, setAmbiente] = React.useState('');
  const ref = React.useRef<HTMLInputElement>(null);
  const ref1 = React.useRef<HTMLInputElement>(null);
  const ref2 = React.useRef<HTMLInputElement>(null);
  const [modulo, dispatch] = React.useReducer(moduloReducer, []);

  function moduloAdd() {
    if (area === '' || ambiente === '')
      return alert('Preencha todos os campos!');
    if (typeof area === 'number') {
      dispatch({
        type: 'add',
        id: id++,
        divisao: div,
        text: area,
        populacao: handleCalcular(area, div)?.populacao,
        acesso: handleCalcular(area, div)?.acesso,
        porta: handleCalcular(area, div)?.porta,
        escada: handleCalcular(area, div)?.escada,
        ambiente: ambiente,
      });
      setArea('');
      setAmbiente('');
    }
  }

  function moduloAdd1() {
    if (area === '' || dormitorio === '' || ambiente === '')
      return alert('Preencha todos os campos!');
    if (typeof area === 'number' && typeof dormitorio === 'number') {
      dispatch({
        type: 'add1',
        id: id++,
        divisao: div,
        text: area,
        text1: dormitorio,
        populacao: handleCalcular1(area, dormitorio, div)?.populacao,
        acesso: handleCalcular1(area, dormitorio, div)?.acesso,
        porta: handleCalcular1(area, dormitorio, div)?.porta,
        escada: handleCalcular1(area, dormitorio, div)?.escada,
        ambiente: ambiente,
      });
      setArea('');
      setAmbiente('');
      setDormitorio('');
    }
  }

  function moduloDelete(id: number) {
    dispatch({
      type: 'delete',
      id: id,
    });
  }

  React.useEffect(() => {
    setArea('');
    setDormitorio('');
    setAmbiente('');
    if (ref.current) {
      ref.current.value = '';
    }
    if (ref1.current) {
      ref1.current.value = '';
    }
    if (ref2.current) {
      ref2.current.value = '';
    }
  }, [div]);

  return (
    <div>
      <h1>Dimensionamento de saídas de emergencia</h1>
      <span>Divisão: </span>
      <select onChange={({ target }) => setDiv(+target.value)}>
        {divisao.map((item, index) => {
          return (
            <option key={index} value={index}>
              {item[0]}
            </option>
          );
        })}
      </select>
      {div !== 0 && div !== 2 && div !== 1 && div !== 35 && div !== 36 && (
        <div>
          {div === 29 ? (
            <div>
              <label style={{ marginTop: '1rem' }}>Vagas: </label>
              <input
                style={{ margin: '1rem 0' }}
                type="text"
                placeholder="Vagas"
                onChange={({ target }) => setArea(+target.value)}
                ref={ref}
                value={area}
              />
              <label style={{ marginTop: '1rem' }}>Ambiente: </label>
              <input
                style={{ margin: '1rem 0' }}
                type="text"
                placeholder="Nome do Ambiente"
                onChange={({ target }) => setAmbiente(target.value)}
                value={ambiente}
                ref={ref1}
              />
              <button onClick={moduloAdd}>Adicionar</button>
            </div>
          ) : (
            <div>
              <label style={{ marginTop: '1rem' }}>Área: </label>
              <input
                style={{ margin: '1rem 0' }}
                type="text"
                placeholder="area"
                onChange={({ target }) => setArea(+target.value)}
                value={area}
                ref={ref}
              />
              <label style={{ marginTop: '1rem' }}>Ambiente: </label>
              <input
                style={{ margin: '1rem 0' }}
                type="text"
                placeholder="Nome do Ambiente"
                onChange={({ target }) => setAmbiente(target.value)}
                value={ambiente}
                ref={ref1}
              />
              <button onClick={moduloAdd}>Adicionar</button>
            </div>
          )}
        </div>
      )}
      {(div === 0 || div === 1) && (
        <div>
          <label style={{ marginTop: '1rem' }}>Dormitórios: </label>
          <input
            style={{ margin: '1rem 0' }}
            type="text"
            placeholder="unidades"
            value={area}
            onChange={({ target }) => setArea(+target.value)}
            ref={ref}
          />
          <label style={{ marginTop: '1rem' }}>Ambiente: </label>
          <input
            style={{ margin: '1rem 0' }}
            type="text"
            placeholder="Nome do Ambiente"
            onChange={({ target }) => setAmbiente(target.value)}
            value={ambiente}
            ref={ref1}
          />
          <button onClick={moduloAdd}>Adicionar</button>
        </div>
      )}
      {(div === 2 || div === 35 || div === 36) && (
        <div>
          {div === 36 ? (
            <div>
              <label style={{ marginTop: '1rem' }}>Área do ambulatório: </label>
              <input
                type="text"
                placeholder="m²"
                onChange={({ target }) => setArea(+target.value)}
                ref={ref1}
                value={area}
              />
              <label style={{ marginTop: '1rem' }}>Número de leitos:</label>
              <input
                type="text"
                placeholder="unidade"
                onChange={({ target }) => setDormitorio(+target.value)}
                ref={ref}
                value={dormitorio}
              />
              <label style={{ marginTop: '1rem' }}>Ambiente: </label>
              <input
                style={{ margin: '1rem 0' }}
                type="text"
                placeholder="Nome do Ambiente"
                onChange={({ target }) => setAmbiente(target.value)}
                value={ambiente}
                ref={ref2}
              />
              <button onClick={moduloAdd1}>Adicionar</button>
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
                value={area}
              />
              <br />
              <label style={{ marginTop: '1rem' }}>
                Quantidade de dormitórios:{' '}
              </label>
              <input
                type="text"
                placeholder="unidades"
                onChange={({ target }) => setDormitorio(+target.value)}
                ref={ref}
                value={dormitorio}
              />
              <label style={{ marginTop: '1rem' }}>Ambiente: </label>
              <input
                style={{ margin: '1rem 0' }}
                type="text"
                placeholder="Nome do Ambiente"
                onChange={({ target }) => setAmbiente(target.value)}
                value={ambiente}
                ref={ref2}
              />
              <button onClick={moduloAdd1}>Adicionar</button>
            </div>
          )}
        </div>
      )}
      <ModuloShow modulos={modulo} onDeleteModulos={moduloDelete} />
    </div>
  );
};

export default CalculoSaidas;
