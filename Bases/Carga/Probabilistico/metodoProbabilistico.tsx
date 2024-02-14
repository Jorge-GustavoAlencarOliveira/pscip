import React from 'react';
import { useProbabilistico } from './useMetodoProbabilistico';
import { tabela1, tabela2 } from '../../CargaIncendio/TabelaProbabilistico';
import ShowModuloProbabilistico from './showModuloProbabilistico';
import { toast } from 'react-toastify';

const MetodoProbabilistico = () => {

  const {
    modulos,
    handleAddModulo,
    handleDeleteModulo,
    material,
    setMaterial,
    altura,
    setAltura,
  } = useProbabilistico();

  return (
    <div className="d-flex flex-column gap-4">
      <form className="col-8 bg-light rounded-3 py-3 px-2">
        <div className="d-flex align-items-center gap-2 mb-2">
          <label className="fw-bold" style={{ width: '80px' }}>
            Material:
          </label>
          <select
            className="form-select"
            onChange={({ target }) => setMaterial(target.value)}
            value={material}
          >
            <option value="Escolha um material">Escolha um material</option>
            {tabela1.map((item, index) => {
              return (
                <option key={index} value={index}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="d-flex align-items-center gap-2 mb-2">
          <label className="fw-bold" style={{ width: '80px' }}>
            Altura:
          </label>
          <input
            className="form-control"
            type="text"
            id="altura"
            value={altura}
            onChange={({ target }) => setAltura(target.value)}
          />
        </div>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              if(altura !== '' && material !== 'Escolha um material')
              handleAddModulo()
              else return toast.error('Preencha os campos.')
            }}
          >
            Adicionar módulo
          </button>
        </div>
      </form>
      <div className="col-8">
        <ShowModuloProbabilistico modulos={modulos} onDelete={handleDeleteModulo} />
      </div>
    </div>
  );
};
export default MetodoProbabilistico;
