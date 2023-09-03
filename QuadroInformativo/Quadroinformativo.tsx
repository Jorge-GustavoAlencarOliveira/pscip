import React from 'react';
import { QuadroinformativoReducer } from './QuadroReducer';
import ModuloShow from './ModuloShow';
import { medidas } from './MedidasTabela';
import { OcupacaoReducer } from './QuadroReducer';
import Ocupacao from '../Ocupacao/ocupacao';
import { pdfQuadroInformavitvo } from '../geradorPdf/pdfQuadroInformativo';

let i = 0;
let id = 0;

const Quadroinformativo = () => {
  const [selectMedidas, setSelectMedidas] = React.useState(0);
  const [selectNorma, setSelectNorma] = React.useState(0);
  const [modulos, dispatch] = React.useReducer(QuadroinformativoReducer, []);
  const [ocupacao, dispatchOcupacao] = React.useReducer(OcupacaoReducer, []);
  React.useEffect(() => {
    medidas.map((item) => {
      dispatch({
        type: 'add',
        id: i++,
        medida: item[0],
        referencia: item[1],
      });
    });
  }, []);
 

  function handleAddOcupacao(ocup: number, div: number, desc: number) {
    dispatchOcupacao({
      type: 'add',
      id: id++,
      ocupacao: [ocup, div, desc],
    });
  }

  function handleDeleteOcupacao(id: number) {
    dispatchOcupacao({
      type: 'delete',
      id: id,
    });
  }

  function handleAdd() {
    dispatch({
      type: 'add',
      id: i++,
      medida: medidas[selectMedidas][0],
      referencia: medidas[selectMedidas][1],
    });
  }

  function handleReferencia(id: number, referencia: string) {
    dispatch({
      type: 'referencia',
      id: id,
      referencia: referencia,
    });
  }

  function handleDelete(id: number) {
    dispatch({
      type: 'delete',
      id: id,
    });
  }

  return (
    <div>
      <div>
        <div className="d-flex align-items-center gap-2">
          <label className="fw-bold">Medida:</label>
          <select
            className="form-select"
            onChange={({ target }) => setSelectMedidas(+target.value)}
          >
            {medidas.map((item, index) => {
              return (
                <option key={index} value={index}>
                  {item[0]}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <button
            onClick={handleAdd}
            className="btn btn-primary float-end my-2"
          >
            Adicionar
          </button>
        </div>
      </div>
      <Ocupacao add={handleAddOcupacao} />
      <ModuloShow
        onDelete={handleDelete}
        modulos={modulos}
        referencia={handleReferencia}
        ocupacao={ocupacao}
        Delete={handleDeleteOcupacao}
      />
      <button className='btn btn-primary' onClick={() =>{ 
        pdfQuadroInformavitvo({modulos, ocupacao1: ocupacao})}}>Gerar Quadro Informativo</button>
    </div>
  );
};

export default Quadroinformativo;
