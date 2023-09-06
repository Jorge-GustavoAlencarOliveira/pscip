import React from 'react';
import { QuadroinformativoReducer } from './QuadroReducer';
import ModuloShow from './ModuloShow';
import { medidas } from './MedidasTabela';
import { OcupacaoReducer } from './QuadroReducer';
import Ocupacao from '../Ocupacao/ocupacao';
import { pdfQuadroInformavitvo } from '../geradorPdf/pdfQuadroInformativo';
import ModalCenter from '../Components/Modal/Modal';

let i = 0;
let id = 0;

const Quadroinformativo = () => {
  const [selectMedidas, setSelectMedidas] = React.useState(0);
  const [selectNorma, setSelectNorma] = React.useState(0);
  const [modulos, dispatch] = React.useReducer(QuadroinformativoReducer, []);
  const [ocupacao, dispatchOcupacao] = React.useReducer(OcupacaoReducer, []);
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow1, setModalShow1] = React.useState(false);


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
    <>
      <h1 className='text-primary mb-3'>Quadro Informativo E.2</h1>
      <div className='d-flex justify-content-between py-4'>
        <button onClick={() => setModalShow(true)} className='btn btn-primary'>Adicionar Medida de Segurança</button>
        <button onClick={() => setModalShow1(true)} className='btn btn-primary'>Adicionar Ocupacação</button>
      </div>
      <ModalCenter show={modalShow} onHide={() => setModalShow(false)} header='Medidas de Segurança'>
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
      </ModalCenter>
      
      <ModalCenter show={modalShow1} onHide={() => setModalShow1(false)} header='Ocupacao'>
        <Ocupacao add={handleAddOcupacao} />
      </ModalCenter>
      <ModuloShow
        onDelete={handleDelete}
        modulos={modulos}
        referencia={handleReferencia}
        ocupacao={ocupacao}
        Delete={handleDeleteOcupacao}
      />
      <button
        className="btn btn-primary"
        onClick={() => {
          pdfQuadroInformavitvo({ modulos, ocupacao1: ocupacao });
        }}
      >
        Gerar Quadro Informativo
      </button>
    </>
  );
};

export default Quadroinformativo;
