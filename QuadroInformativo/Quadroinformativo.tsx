import React from 'react';
import ModuloShow from './ModuloShow';
import { TabelasQuadro } from './MedidasTabela';
import Ocupacao from '../Ocupacao/ocupacao';
import { pdfQuadroInformavitvo } from '../geradorPdf/pdfQuadroInformativo';
import ModalCenter from '../Components/Modal/Modal';
import { QuadroInformativoContext } from './useContext';

const Quadroinformativo = () => {
  const { selecionarMedidas, handleAdd, handleAddOcupacao, ocupacao, modulos, norma, tabela, construcao } =
    React.useContext(QuadroInformativoContext);
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow1, setModalShow1] = React.useState(false);
  const { medidas } = TabelasQuadro();

  return (
    <>
      <h1 className="text-primary mb-3">E.2 - Quadro Informativo </h1>
      <ModalCenter
        show={modalShow}
        onHide={() => setModalShow(false)}
        header="Selecione a medida de segurança desejada:"
      >
        <div>
          <div className="d-flex align-items-center gap-2">
            <label className="fw-bold">Medida:</label>
            <select
              className="form-select"
              onChange={({ target }) => selecionarMedidas(+target.value)}
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
              onClick={() => {
                handleAdd();
                setModalShow(false);
              }}
              className="btn btn-primary float-end my-2"
            >
              Adicionar
            </button>
          </div>
        </div>
      </ModalCenter>
      <ModalCenter
        show={modalShow1}
        onHide={() => setModalShow1(false)}
        header="Selecione a ocupação/divisão desejada:"
      >
        <Ocupacao add={handleAddOcupacao} onHide={() => setModalShow1(false)} />
      </ModalCenter>
      <ModuloShow
        showModal={() => setModalShow(true)}
        showModal1={() => setModalShow1(true)}
      />
      <div>
        <button
          disabled={ocupacao.length === 0 ? true : false}
          className="btn btn-primary float-end"
          onClick={() => {
            pdfQuadroInformavitvo({ modulos, ocupacao1: ocupacao, norma, tabela, construcao });
          }}
        >
          Gerar Quadro Informativo
        </button>
      </div>
    </>
  );
};

export default Quadroinformativo;
