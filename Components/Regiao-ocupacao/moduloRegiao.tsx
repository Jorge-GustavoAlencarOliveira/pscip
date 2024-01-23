import React from 'react';
import { RegiaoReducer } from './regiaoReducer';
import ModuloOcupacao from './moduloOcupacao';
import { dadosProps } from '../Hooks/useDados';
import ShowRegioes from './showRegioes';
import { RegiaomoduloProps } from './regiaoReducer';
import ModalCenter from '../Modal/Modal';
import { useContextProjeto } from '../../projeto/Context/contextProjeto';
import { toast } from 'react-toastify';

type ModuloRegiaoProps = {
  onShow: () => void;
  edificacao?: RegiaomoduloProps[];
};

let id = 1;

const ModuloRegiao = ({ onShow, edificacao }: ModuloRegiaoProps) => {
  // const initialRegioes = edificacao || [];
  const [showModal, setShowModal] = React.useState(false);
  const { valoresRegiao, addAllDataBuilding, regioes, dispatchRegioes } =
    useContextProjeto();

  function handleAddRegiao(dados: dadosProps, ocupacoes: number[][]) {
    dispatchRegioes({
      type: 'add',
      id: id++,
      dados: [dados, ocupacoes],
    });
    setShowModal(false);
  }

  function handleDeleteRegiao(id: number) {
    dispatchRegioes({
      type: 'delete',
      id: id,
    });
  }

  function handleNext() {
    valoresRegiao(regioes);
    addAllDataBuilding('regioes', regioes);
    onShow();
  }

  return (
    <div
      className="my-2 d-flex flex-column"
      style={{ minHeight: 'calc(100vh - 210px)' }}
    >
      <div className="d-flex justify-content-between align-items-center mb-4">
        {regioes.length === 0 ? (
          <div>
            <h4 className="text-primary">Você ainda não possui regiões.</h4>
            <span>
              Insira uma nova região e continue dimensionando o seu projeto.
            </span>
          </div>
        ) : (
          <h4 className="text-primary">Regiões</h4>
        )}
        <div>
          <button
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            Inserir nova região
          </button>
        </div>
      </div>
      <ModalCenter
        show={showModal}
        onHide={() => setShowModal(false)}
        size="xl"
        header="Insira as regiões e ocupações desejadas"
      >
        <ModuloOcupacao addRegiao={handleAddRegiao} />
      </ModalCenter>
      <div className="flex-grow-1">
        <ShowRegioes regioes={regioes} OnDelete={handleDeleteRegiao} />
      </div>
      <div>
        <button
          className="btn btn-primary float-end"
          disabled={regioes.length === 0 ? true : false}
          onClick={() => {
            handleNext(), addAllDataBuilding('regioes', regioes);
          }}
        >
          Proximo
        </button>
      </div>
     
    </div>
  );
};

export default ModuloRegiao;
