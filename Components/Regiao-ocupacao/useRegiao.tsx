import React from "react";
import { RegiaoReducer, RegiaomoduloProps } from "./regiaoReducer";
import { dadosProps } from "../Hooks/useDados";

export const useRegiao = (initialRegioes: RegiaomoduloProps[]) => {
  const [regioes, dispatchRegioes] = React.useReducer(
    RegiaoReducer,
    initialRegioes,
  );
  function handleAddRegiao(dados: dadosProps, ocupacoes: number[][]) {
    dispatchRegioes({
      type: 'add',
      id: Math.floor(Math.random() * 100),
      dados: [dados, ocupacoes],
    });
  }

  function handleDeleteRegiao(id: number) {
    dispatchRegioes({
      type: 'delete',
      id: id,
    });
  }

  return {regioes, handleAddRegiao, handleDeleteRegiao}
}