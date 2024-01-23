import React from 'react';
import { OcupacaoReducer } from './ocupacaoReducer';
import Ocupacao from '../../Ocupacao/ocupacao';
import ShowModuloRegiaoOcupacao from './showModuloOcupacao';
import DadosRegiao from './dadosRegiao';
import { dadosProps } from '../Hooks/useDados';
import { UseDadosEdificação } from '../Hooks/useDados';

let id = 0;

type addRegiaoProps = {
  addRegiao: (dados: dadosProps, ocupacoes: number[][]) => void
}

const ModuloOcupacao = ({addRegiao}: addRegiaoProps) => {
  const [ocupacoes, dispatchOcupacao] = React.useReducer(OcupacaoReducer, []);
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
      <div >
        <DadosRegiao dados={dados} setDadosEdificacao={setDadosEdificação}/>
        <Ocupacao add={handleAddOcupacao}/>
      </div>
        {ocupacoes.length > 0 && (
          <div className='border-top border-primary mt-4'>
            {  ocupacoes.map((item, index) => {
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
        )
        }
        {ocupacoes.length > 0 && (
          <div className='border-top pt-3 my-3'>
            <button className='btn btn-success float-end'onClick={joinOcupacaoes}>Finalizar Região</button>
          </div>
        )}
    </>
  );
};

export default ModuloOcupacao;
