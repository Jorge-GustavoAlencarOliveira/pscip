import React from 'react';
import TabelaSaidaEmergencia from './tabelaSaidaEmergencia';
import ModuloShow from './ModuloShow';
import { moduloReducer, pavimentoReducer } from './ModuloReducer';
import { handleCalcular, handleCalcular1 } from './Calculo';

let id = 1;

interface calculoSaidaProps {
  pavimento: string | undefined;
  onDelete: () => void;
}

const CalculoSaidas = ({ pavimento, onDelete }: calculoSaidaProps) => {
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
    <div className="d-flex flex-column gap-2 mt-4 bg-light px-2 py-4">
      <div className="d-flex justify-content-between align-items-center my-3">
        <h5 className="fw-bold">Pavimento: {pavimento} </h5>
        <button className="btn btn-secondary" onClick={onDelete}>
          Excluir
        </button>
      </div>
      <div className="d-flex gap-2 form-group align-items-center">
        <span>Divisão: </span>
        <select
          onChange={({ target }) => setDiv(+target.value)}
          className="form-select"
        >
          {divisao.map((item, index) => {
            return (
              <option key={index} value={index}>
                {item[0]}
              </option>
            );
          })}
        </select>
      </div>
      {div !== 0 && div !== 2 && div !== 1 && div !== 35 && div !== 36 && (
        <div>
          {div === 29 ? (
            <div className="d-flex flex-column gap-2">
              <div className="d-flex gap-2 form-group align-items-center">
                <label>Vagas: </label>
                <input
                  type="text"
                  placeholder="Vagas"
                  onChange={({ target }) => setArea(+target.value)}
                  ref={ref}
                  value={area}
                  className="form-control"
                />
              </div>
              <div className="d-flex gap-2 form-group align-items-center">
                <label>Ambiente: </label>
                <input
                  type="text"
                  placeholder="Nome do Ambiente"
                  onChange={({ target }) => setAmbiente(target.value)}
                  value={ambiente}
                  ref={ref1}
                  className="form-control"
                />
              </div>
              <div>
                <button
                  className="btn btn-primary float-end my-3"
                  onClick={moduloAdd}
                >
                  Adicionar
                </button>
              </div>
            </div>
          ) : (
            <div className="d-flex flex-column gap-2">
              <div className="d-flex gap-2 form-group align-items-center">
                <label>Área: </label>
                <input
                  type="text"
                  placeholder="area"
                  onChange={({ target }) => setArea(+target.value)}
                  value={area}
                  ref={ref}
                  className="form-control"
                />
              </div>
              <div className="d-flex gap-2 form-group align-items-center">
                <label>Ambiente: </label>
                <input
                  type="text"
                  placeholder="Nome do Ambiente"
                  onChange={({ target }) => setAmbiente(target.value)}
                  value={ambiente}
                  ref={ref1}
                  className="form-control"
                />
              </div>
              <div>
                <button
                  className="btn btn-primary float-end my-3"
                  onClick={moduloAdd}
                >
                  Adicionar
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      {(div === 0 || div === 1) && (
        <div className="d-flex flex-column gap-2">
          <div className="d-flex gap-2 form-group align-items-center">
            <label>Dormitórios: </label>
            <input
              type="text"
              placeholder="unidades"
              value={area}
              onChange={({ target }) => setArea(+target.value)}
              ref={ref}
              className="form-control"
            />
          </div>
          <div className="d-flex gap-2 form-group align-items-center">
            <label>Ambiente: </label>
            <input
              type="text"
              placeholder="Nome do Ambiente"
              onChange={({ target }) => setAmbiente(target.value)}
              value={ambiente}
              ref={ref1}
              className="form-control"
            />
          </div>
          <div>
            <button
              className="btn btn-primary float-end my-3"
              onClick={moduloAdd}
            >
              Adicionar
            </button>
          </div>
        </div>
      )}
      {(div === 2 || div === 35 || div === 36) && (
        <div className="d-flex flex-column gap-2">
          {div === 36 ? (
            <div>
              <div className="d-flex gap-2 form-group align-items-center">
                <label>Área do ambulatório: </label>
                <input
                  type="text"
                  placeholder="m²"
                  onChange={({ target }) => setArea(+target.value)}
                  ref={ref1}
                  value={area}
                  className="form-control"
                />
              </div>
              <div className="d-flex gap-2 form-group align-items-center">
                <label>Número de leitos:</label>
                <input
                  type="text"
                  placeholder="unidade"
                  onChange={({ target }) => setDormitorio(+target.value)}
                  ref={ref}
                  value={dormitorio}
                  className="form-control"
                />
              </div>
              <div className="d-flex gap-2 form-group align-items-center">
                <label>Ambiente: </label>
                <input
                  type="text"
                  placeholder="Nome do Ambiente"
                  onChange={({ target }) => setAmbiente(target.value)}
                  value={ambiente}
                  ref={ref2}
                  className="form-control"
                />
              </div>
              <div>
                <button
                  className="btn btn-primary float-end my-3"
                  onClick={moduloAdd1}
                >
                  Adicionar
                </button>
              </div>
              <br />
            </div>
          ) : (
            <div className="d-flex flex-column gap-2">
              <div className="d-flex gap-2 form-group align-items-center">
                <label>Área de alojamento: </label>
                <input
                  type="text"
                  placeholder="m²"
                  onChange={({ target }) => setArea(+target.value)}
                  ref={ref1}
                  value={area}
                  className="form-control"
                />
              </div>
              <div className="d-flex gap-2 form-group align-items-center">
                <label>Quantidade de dormitórios: </label>
                <input
                  type="text"
                  placeholder="unidades"
                  onChange={({ target }) => setDormitorio(+target.value)}
                  ref={ref}
                  value={dormitorio}
                  className="form-control"
                />
              </div>
              <div className="d-flex gap-2 form-group align-items-center">
                <label>Ambiente: </label>
                <input
                  type="text"
                  placeholder="Nome do Ambiente"
                  onChange={({ target }) => setAmbiente(target.value)}
                  value={ambiente}
                  ref={ref2}
                  className="form-control "
                />
              </div>
              <div>
                <button
                  className="btn btn-primary float-end my-3"
                  onClick={moduloAdd1}
                >
                  Adicionar
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      <div className="my-4">
        <ModuloShow modulos={modulo} onDeleteModulos={moduloDelete} />
      </div>
    </div>
  );
};

export default CalculoSaidas;
