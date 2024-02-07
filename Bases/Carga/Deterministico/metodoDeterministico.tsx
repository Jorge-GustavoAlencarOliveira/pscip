import React from 'react';
import { useDeterministico } from './useDeterministico';
import { tabelac1 } from '../../CargaIncendio/TabelaDeterministico';
import {
  MateriaisDeterministicoProps,
  materiaisDeterministicoReducer,
  moduloDeterministicoReducer,
} from './useReducerDeterministico';
import Formula from '../../../public/formula_deterministico.png';
import Image from 'next/image';
import ShowModulosDeterministico from './showModulosDeterministico';
import { somasValores } from './useDeterministico';
import { valorestabelac1 } from '../../CargaIncendio/TabelaDeterministico';
import { toast } from 'react-toastify';
import { FaTrash } from 'react-icons/fa';

let idModulos = 0;
let idMateriais = 1;

const MetodoDeterministico = () => {
  const { register, handleSubmit, errors, reset } = useDeterministico();
  const [modulos, dispatchModulos] = React.useReducer(
    moduloDeterministicoReducer,
    [],
  );
  const [materiais, dispatchMateriais] = React.useReducer(
    materiaisDeterministicoReducer,
    [],
  );
  const [tipo, setTipo] = React.useState('');
  const [massa, setMassa] = React.useState('');
  const [area, setArea] = React.useState('');
  console.log(modulos);

  function handleAddModulos() {
    if (area === '') return toast.error('Dê um valor para a área do piso.');
    if (materiais.length === 0)
      return toast.error('Adicione ao menos um material ao módulo');
    dispatchModulos({
      type: 'add',
      id: idModulos++,
      materiais: materiais,
      area: area,
      resultado: Number((somasValores(materiais) / +area).toFixed(2)),
    });
    dispatchMateriais({
      type: 'reset',
    });
    idMateriais = 1;
    setArea('');
  }

  function handleAddMateriais() {
    dispatchMateriais({
      type: 'add',
      id: idMateriais++,
      tipo: tipo,
      massa: massa,
    });
    setMassa('');
    setTipo('0');
  }

  function handleDeleteModulo(id: number) {
    dispatchModulos({
      type: 'delete',
      id: id,
    });
  }

  const styleDiv = {
    display: 'grid',
    gridTemplateColumns: '60px 1fr',
    gap: '1rem',
    alignItems: 'center',
  };

  return (
    <>
      <div className="d-flex flex-column my-3">
        <span>
          Os valores da carga de incêndio específica serão calculados através do
          método determinístico pela seguinte expressão:
        </span>
        <Image
          src={Formula}
          alt="Formula método determinísitco"
          width={800}
          className="mt-2"
        />
      </div>
      <div className="row  mx-auto bg-light py-3 px-2 rounded-3">
        <div className="col-6 d-flex justify-content-center align-items-center gap-5 my-4 fs-5">
          <div className="d-flex justify-content-center">
            𝑞𝑓𝑖=
            <span className="d-flex flex-column align-items-center ">
              <span className="d-flex align-items-center">
                {materiais.length > 0 ? null : 'Σ(𝑴𝒊.𝑯𝒊)'}
                {materiais?.map(({ id, tipo, massa }) => {
                  return (
                    <span key={id}>
                      ({massa}x{valorestabelac1[+tipo]})
                      {materiais.length !== id ? '+' : null}
                    </span>
                  );
                })}
                {/* {materiais.length > 0 ? (
                  <button
                    className="btn"
                    onClick={() => dispatchMateriais({ type: 'reset' })}
                  >
                    <FaTrash size={12} className="mt-3 ms-3" />
                  </button>
                ) : null} */}
              </span>
              <span
                style={{ width: '100%', height: '1px', background: '#000' }}
              ></span>
              <input
                type="text"
                onChange={({ target }) => setArea(target.value)}
                className="form-control my-1 text-center fs-5"
                value={area}
                placeholder="m²"
              />
            </span>
            <span>
              {materiais.length > 0 && area !== ''
                ? `= ${(somasValores(materiais) / +area)
                    .toFixed(2)
                    .replace('.', ',')} MJ/m²`
                : null}
            </span>
          </div>
        </div>
        <div
          className="col-6 d-flex flex-column gap-2 py-3 px-2 rounded-3"
          style={{ backgroundColor: '#aecbf5' }}
        >
          <div style={styleDiv}>
            <span className="fw-bold">Material:</span>
            <select
              className="form-select"
              onChange={({ target }) => setTipo(target.value)}
              value={tipo}
            >
              <option selected>Escolha um material</option>
              {tabelac1.map((item, index) => {
                return (
                  <option value={index} key={index}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div style={styleDiv}>
            <span className="fw-bold">Massa:</span>
            <input
              type="text"
              onChange={({ target }) => setMassa(target.value)}
              value={massa}
              className="form-control"
              placeholder="Kg"
            />
          </div>
          <div>
            <button
              className="btn btn-primary w-100 mt-2"
              onClick={() => {
                if (massa === '' || tipo === 'Escolha um material')
                  return toast.error('Preencha os campos');
                handleAddMateriais();
              }}
            >
              Adicionar material
            </button>
          </div>
        </div>
        <div className="d-flex mt-4">
          <button className="btn btn-success w-100" onClick={handleAddModulos}>
            Adicionar modulo
          </button>
        </div>
      </div>
      <ShowModulosDeterministico
        modulos={modulos}
        onDelete={handleDeleteModulo}
      />
    </>
  );
};

export default MetodoDeterministico;
