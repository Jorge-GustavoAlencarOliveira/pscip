import React from 'react';
import { RegiaoReducer } from './regiaoReducer';
import ModuloOcupacao from './moduloOcupacao';
import { dadosProps } from '../Hooks/useDados';
import ModalCenter from '../Modal/Modal';
import { DataStorage } from '../../dataContext';
import ShowRegioes from './showRegioes';
import { RegiaomoduloProps } from './regiaoReducer';

type ModuloRegiaoProps = { 
  onShow: () => void;
  edificacao: RegiaomoduloProps[]
}


let id = 1;

const ModuloRegiao = ({onShow, edificacao}: ModuloRegiaoProps) => {
  const initialRegioes = edificacao || []
  const [regioes, dispatchRegioes] = React.useReducer(RegiaoReducer, initialRegioes);
  const [showModal, setShowModal] = React.useState(false)
  const {valoresRegiao} = React.useContext(DataStorage)

  function handleAddRegiao(dados: dadosProps, ocupacoes: number[][]) {
    dispatchRegioes({
      type: 'add',
      id: id++,
      dados: [dados, ocupacoes]
    });
    setShowModal(false)
  }

  function handleDeleteRegiao(id: number) {
    dispatchRegioes({
      type: 'delete',
      id: id,
    });
  }

  function handleNext (){
    valoresRegiao(regioes)
    onShow()
  }


  return (
    <div className='my-4'>
      <button className='btn btn-primary' onClick={() => setShowModal(true)}>Adicionar Região</button>
      <ShowRegioes regioes={regioes} OnDelete={handleDeleteRegiao}/>
      <ModalCenter show={showModal} onHide={() => setShowModal(false)} header='Preencha as informações da região' size='lg'>
        <ModuloOcupacao addRegiao={handleAddRegiao} />
      </ModalCenter>
      <div>
        <button className='btn btn-primary float-end' disabled={regioes.length === 0 ? true : false} onClick={handleNext}>Proximo
        </button>
      </div>
    </div>
  );
};

export default ModuloRegiao;
