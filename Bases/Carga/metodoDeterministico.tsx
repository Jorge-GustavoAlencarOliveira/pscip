import React from 'react';
import { useDeterministico } from './useDeterministico';
import { tabelac1 } from '../CargaIncendio/TabelaDeterministico';

const MetodoDeterministico = () => {
  const { register, handleSubmit, errors, reset, fields, append, remove } =
    useDeterministico();

  function handleAdd() {
    append({ material: '0', massa: '', area: '' });
  }

  const styleDiv = {
    display: 'grid',
    gridTemplateColumns: '60px 1fr',
    gap: '1rem',
    alignItems: 'center',
  };

  return (
    <>
      <button className="btn btn-primary float-end d-block" onClick={handleAdd}>
        Adicionar módulo
      </button>
      <form
        className="mt-4"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        {fields.map((item, index) => {
          return (
            <div
              key={item.id}
              className="d-flex flex-column gap-3 mb-4 bg-light px-2 py-3 rounded-2"
            >
              <div style={styleDiv}>
                <label className="fw-bold">Material:</label>
                <div>
                  <select
                    {...register(`modulos.${index}.material`)}
                    className="form-select"
                  >
                    {tabelac1.map((item, index) => {
                      return (
                        <option key={index} value={index}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                  {errors?.modulos?.[index]?.material && (
                    <span style={{ color: 'red' }}>
                      {errors.modulos[index].material.message}
                    </span>
                  )}
                </div>
              </div>
              <div style={styleDiv}>
                <label className="fw-bold">Massa:</label>
                <div>
                  <input
                    type="text"
                    {...register(`modulos.${index}.massa`)}
                    className="form-control"
                  />
                  {errors?.modulos?.[index]?.massa && (
                    <span style={{ color: 'red' }}>
                      {errors.modulos[index].massa.message}
                    </span>
                  )}
                </div>
              </div>
              <div style={styleDiv}>
                <label className="fw-bold">Área:</label>
                <div>
                  <input
                    type="text"
                    {...register(`modulos.${index}.area`)}
                    className="form-control"
                  />
                  {errors.modulos?.[index]?.area && (
                    <span style={{ color: 'red' }}>
                      {errors.modulos[index].area.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        {fields.length > 0 && (
          <button className="btn btn-primary float-end mt-2" type="submit">
            Calcular
          </button>
        )}
      </form>
    </>
  );
};

export default MetodoDeterministico;
