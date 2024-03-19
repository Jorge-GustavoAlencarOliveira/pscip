import React from 'react';
import ModuloShow from './ModuloShow';
import { divisao } from '../../Tabelas/tabelaRedDivisao';
import { somenteInteiro } from '../formatarNumero';
import { useBrigada } from './useBrigada';
import { tabelaBrigada } from './TabelaBrigada';

const Brigada = () => {
  const {
    ocupacao,
    setOcupacao,
    pavimento,
    setPavimento,
    populacao,
    setPopulacao,
    modulos,
    handleAdd,
    handleDelete,
  } = useBrigada();
  const descricao: string[] | undefined = tabelaBrigada[ocupacao]?.descricao;
  
  return (
    <>
      <div>
        <h5 className="text-primary">Dimensionamento de Brigada de incêndio</h5>
        <span>
          Encontre o número de brigadistas necessário para a sua edificação.
        </span>
      </div>
      <div className="d-flex flex-column gap-2 mt-3 bg-light py-3 px-2 rounded-3 w-75">
        <div className="d-flex gap-2 align-items-center">
          <label className="fw-bold">
            Divisão:
          </label>
          <select
            onChange={({ target }) => setOcupacao(target.value)}
            value={ocupacao}
            className="form-select w-50"
          >
            <option value="Escolha uma divisão">Escolha uma divisão</option>
            {divisao.map((item, index) => {
              return (
                <option key={index} value={index}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        {descricao && (
          <div className="mb-3">
            {descricao.map((item, index) => {
              return <span key={index} className="mt-2">{item}</span>;
            })}
          </div>
        )}
        <div className='row'>
          <div className="d-flex gap-2 align-items-center col-6">
            <label className="fw-bold">
              Pavimento:{' '}
            </label>
            <input
              type="text"
              value={pavimento}
              onChange={({ target }) => setPavimento(target.value)}
              placeholder="Nome do pavimento"
              className="form-control"
            />
          </div>
          <div className="d-flex gap-2 align-items-center col-6">
            <label className="fw-bold" style={{whiteSpace: 'nowrap'}}>
              População fixa:{' '}
            </label>
            <input
              type="text"
              placeholder="Quantidade de pessoas"
              value={populacao}
              onChange={({ target }) =>
                setPopulacao(somenteInteiro(target.value))
              }
              className="form-control"
            />
          </div>
        </div>
        <div>
          <button className="btn btn-primary float-end" onClick={handleAdd}>
            Adicionar pavimento
          </button>
        </div>
      </div>
      <ModuloShow onDelete={handleDelete} modulos={modulos} />
    </>
  );
};

export default Brigada;
