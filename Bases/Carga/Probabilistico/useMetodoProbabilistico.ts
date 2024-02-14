import React from 'react';
import {
  ModuloMetodoProbabilistico,
  probabilisticoReducer,
} from './useReducerProbabilistico';
import { tabela1,tabela2 } from '../../CargaIncendio/TabelaProbabilistico';


let id = 0

export const useProbabilistico = () => {
  const [modulos, dispatch] = React.useReducer(probabilisticoReducer, []);
  const [material, setMaterial] = React.useState('Escolha um material');
  const [altura, setAltura] = React.useState('');

  function handleAddModulo() {
    dispatch({
      type: 'add',
      id: id++,
      altura: altura,
      material: tabela1[+material],
      resultado: (+altura * tabela2[+material])
    });
    setMaterial('Escolha um material')
    setAltura('')
  }

  function handleDeleteModulo(id: number) {
    dispatch({
      type: 'delete',
      id: id,
    });
  }

  function formatModulos (modulos: ModuloMetodoProbabilistico[]){
    const list = [...modulos].sort((a, b) => a.resultado - b.resultado).reverse()
    return list[0]
  }

  return {
    modulos,
    handleAddModulo,
    handleDeleteModulo,
    material,
    setMaterial,
    altura,
    setAltura,
    formatModulos
  };
};
