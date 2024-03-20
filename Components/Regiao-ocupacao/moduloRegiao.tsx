import React from 'react';
import ModuloOcupacao from './moduloOcupacao';
import { dadosProps } from '../Hooks/useDados';
import ShowRegioes from './showRegioes';
import { RegiaomoduloProps } from './regiaoReducer';
import ModalCenter from '../Modal/Modal';
import { useContextProjeto } from '../../projeto/Context/contextProjeto';
import { api } from '@/services/apiClient';

type ModuloRegiaoProps = {
  onShow: () => void;
};


const ModuloRegiao = ({ onShow}: ModuloRegiaoProps) => {
  const [showModal, setShowModal] = React.useState(false);
  const { valoresRegiao, addAllDataBuilding, regioes, dispatchRegioes, project_id } =
  useContextProjeto();

  async function updateEdificacao() {
    try{
      await api.put('/project/edificacao', {
        id: project_id,
        edificacao: regioes
      })
    }catch(err){
      console.log(err);
    }
  }

  function handleAddRegiao(dados: dadosProps, ocupacoes: number[][]) {
    dispatchRegioes({
      type: 'add',
      id: Math.floor(Math.random() * 100),
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
    updateEdificacao()
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
