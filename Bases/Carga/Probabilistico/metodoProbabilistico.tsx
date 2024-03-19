import React from 'react';
import { useProbabilistico } from './useMetodoProbabilistico';
import { tabela1, tabela2 } from '../../CargaIncendio/TabelaProbabilistico';
import ShowModuloProbabilistico from './showModuloProbabilistico';
import { toast } from 'react-toastify';
import { formatarNumero } from '../../formatarNumero';

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
      <div className="d-flex flex-column">
        <span className='text-center fw-bold fs-5 mb-3'>
          Carga de incêndio relativa à altura de armazenamento (depósito)
        </span>
        <span>
          - Os valores das cargas de incêndio específicas de depósitos poderão
          ser definidos por meio da altura de armazenamento.
           <br />
          - Havendo previsão de materiais distintos e/ou alturas de
          armazenamento distintas, o levantamento da carga de incêndio será
          realizado em função de módulos. <br />
          - Cada módulo será constituído por uma área que possua a mesma
          característica de armazenamento. <br />
          - Quando houver previsão de módulos distintos, para fins de
          definição da carga de incêndio através da aplicação da Tabela B.1 da Instrução Técnica 09,
          será considerado o maior valor de carga de incêndio encontrado.
        </span>
      </div>
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
            value={`${altura} m`}
            onChange={({ target }) => setAltura(formatarNumero(target.value))}
          />
        </div>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              if (altura !== '' && material !== 'Escolha um material')
                handleAddModulo();
              else return toast.error('Preencha os campos.');
            }}
          >
            Adicionar módulo
          </button>
        </div>
      </form>
      <div className="col-8">
        <ShowModuloProbabilistico
          modulos={modulos}
          onDelete={handleDeleteModulo}
        />
      </div>
    </div>
  );
};
export default MetodoProbabilistico;
