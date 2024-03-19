import React from 'react';
import BrigadaReducer from './BrigadaReducer';
import { toast } from 'react-toastify';
import { cleanNumberInteiro } from '../formatarNumero';
import { calculoBrigada } from './Calculo';

let id = 0;

export const useBrigada = () => {
  const [ocupacao, setOcupacao] = React.useState('Escolha uma divisão');
  const [pavimento, setPavimento] = React.useState<string>('');
  const [populacao, setPopulacao] = React.useState<string>('');
  const [modulos, dispatch] = React.useReducer(BrigadaReducer, []);

  function handleAdd() {
    if (populacao === '' || pavimento === '' || ocupacao === 'Escolha uma divisão')
      return toast.error('Preencha todos os campos!');
    dispatch({
      type: 'add',
      id: id++,
      pavimento: pavimento,
      brigadistas: calculoBrigada(+ocupacao, +populacao),
      divisao: +ocupacao,
      populacao: cleanNumberInteiro(populacao),
    });
    setPavimento('');
    setPopulacao('');
  }

  function handleDelete(id: number) {
    dispatch({
      type: 'delete',
      id: id,
    });
  }

  return {
    handleAdd,
    handleDelete,
    ocupacao,
    setOcupacao,
    pavimento,
    setPavimento,
    populacao,
    setPopulacao,
    modulos,
  };
};
