import React from 'react';
import ModuloOcupacao from './moduloOcupacao';
import ShowRegioes from './showRegioes';
import ModalCenter from '../Modal/Modal';
import { useContextProjeto } from '../../projeto/Context/contextProjeto';
import { ButtonUpdate } from '../UI/buttonUpdate';
import { medidasdeSegurancaMinimas } from '../../Bases/GerenciarMedidas/medidasMinimas';
import { useRegiao } from './useRegiao';
import { updateEdificacao } from '../../actions/actions';
import { updateMedidasdeSeguranca } from '../../actions/actions';
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
  const medidas = medidasdeSegurancaMinimas(regioes);

  function handleNext() {
    addAllDataBuilding('regioes', regioes);
    onShow();
    updateEdificacao(project_id, regioes);
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
              updateEdificacao(project_id, regioes);
              addAllDataBuilding('regioes', regioes);
              addAllDataBuilding('medidasSeguranca', medidas[0])
              updateMedidasdeSeguranca(project_id, medidas[0])
            }}
          >
            Salvar alterações
          </ButtonUpdate>
        ) : (
          <button
            className="btn btn-primary float-end"
            disabled={regioes.length === 0 ? true : false}
            onClick={() => {
              handleNext();
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
