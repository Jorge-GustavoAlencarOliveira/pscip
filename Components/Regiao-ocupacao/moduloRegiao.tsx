import React from 'react';
import ModuloOcupacao from './moduloOcupacao';
import { dadosProps } from '../Hooks/useDados';
import ShowRegioes from './showRegioes';
import ModalCenter from '../Modal/Modal';
import { useContextProjeto } from '../../projeto/Context/contextProjeto';
import { setupAPIClient } from '@/services/api';
import { ButtonUpdate } from '../UI/buttonUpdate';
import { medidasdeSegurancaMinimas } from '../../Bases/GerenciarMedidas/medidasMinimas';
import { useRegiao } from './useRegiao';

type ModuloRegiaoProps = {
  onShow: () => void;
};

const ModuloRegiao = ({ onShow }: ModuloRegiaoProps) => {
  const [showModal, setShowModal] = React.useState(false);
  const {
    addAllDataBuilding,
    project_id,
    action,
    allDataBuilding
  } = useContextProjeto();
  const {regioes, handleAddRegiao, handleDeleteRegiao} = useRegiao(allDataBuilding.regioes)

  async function updateEdificacao() {
    try {
      const api = setupAPIClient();
      await api.put('/project/edificacao', {
        id: project_id,
        edificacao: regioes,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function updateMedidasdeSeguranca() {
    const medidas = medidasdeSegurancaMinimas(regioes);
    try {
      const api = setupAPIClient();
      await api.put('/project/medidasseguranca', {
        id: project_id,
        medidasSeguranca: medidas[0],
      });
      addAllDataBuilding('medidasSeguranca', medidas[0])
    } catch (err) {
      console.log(err);
    }
  }

  

  function handleNext() {
    // valoresRegiao(regioes);
    addAllDataBuilding('regioes', regioes);
    onShow();
    updateEdificacao();
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
        <ModuloOcupacao addRegiao={handleAddRegiao} closeModal={() => setShowModal(false)} />
      </ModalCenter>
      <div className="flex-grow-1">
        <ShowRegioes regioes={regioes} OnDelete={handleDeleteRegiao} />
      </div>
      <div>
        {action === 'true' ? (
          <ButtonUpdate
            handleClick={() => {
              updateEdificacao();
              updateMedidasdeSeguranca()
              addAllDataBuilding('regioes', regioes);
            }}
          >
            Salvar alterações
          </ButtonUpdate>
        ) : (
          <button
            className="btn btn-primary float-end"
            disabled={regioes.length === 0 ? true : false}
            onClick={() => {
              handleNext(), addAllDataBuilding('regioes', regioes);
            }}
          >
            Proximo
          </button>
        )}
      </div>
    </div>
  );
};

export default ModuloRegiao;
