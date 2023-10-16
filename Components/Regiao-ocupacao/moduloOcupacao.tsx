import React from 'react';
import { OcupacaoReducer } from './ocupacaoReducer';
import Ocupacao from '../../Ocupacao/ocupacao';
import ShowModuloRegiaoOcupacao from './showModuloOcupacao';
import ModalCenter from '../Modal/Modal';
import DadosRegiao from './dadosRegiao';
import { dadosProps } from '../Hooks/useDados';
import { UseDadosEdificação } from '../Hooks/useDados';

let id = 0;

type addRegiaoProps = {
  addRegiao: (dados: dadosProps, ocupacoes: number[][]) => void
}

const ModuloOcupacao = ({addRegiao}: addRegiaoProps) => {
  const [ocupacoes, dispatchOcupacao] = React.useReducer(OcupacaoReducer, []);
  const [showModal, setShowModal] = React.useState(false);
  const { dados, setDadosEdificação, resetDadosEdificação } = UseDadosEdificação();
 
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

  function joinOcupacaoes (){
    let ocup = []
    ocupacoes.map(item => ocup.push(item.ocupacao))
    addRegiao(dados, ocup)
    dispatchOcupacao({type: 'reset'})
    resetDadosEdificação()
  }

  return (
    <>
      <DadosRegiao dados={dados} setDadosEdificacao={setDadosEdificação}/>
      <div className='d-flex justify-content-end'>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          Adicionar Ocupação
        </button>
      </div>            
      <ModalCenter
        show={showModal}
        onHide={() => setShowModal(false)}
        header="Adicione uma ocupação"
      >
        <Ocupacao add={handleAddOcupacao} onHide={() => setShowModal(false)} />
      </ModalCenter>
      <div>
        {ocupacoes.length > 0 &&
          ocupacoes.map((item, index) => {
            return (
              <ShowModuloRegiaoOcupacao
                key={item.id}
                modulo={item}
                onDelete={handleDeleteOcupacao}
                index={index}
              />
            );
          })}
      </div>
      <div>
        <button className='btn btn-primary 'onClick={joinOcupacaoes}>Adicionar Região</button>
      </div>
    </>
  );
};

export default ModuloOcupacao;
