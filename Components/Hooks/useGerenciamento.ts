import React from 'react';
import { z } from 'zod';

export type moduloPropsGerenciamento = {
  id: number;
  content: string;
};

type actionPropsGerenciamento = {
  type: 'add' | 'delete' | 'edit';
  id?: number;
  content?: string;
};

export const statusList = [
  'Em elaboração',
  'Em análise',
  'Aprovado em análise',
  'Notificado em análise',
  'Vistoria solicitada',
  'Notificado em vistoria de liberação',
  'AVCB',
];

let id = 0;

const gerenciamentoReducer = (
  modulos: moduloPropsGerenciamento[],
  action: actionPropsGerenciamento,
) => {
  switch (action.type) {
    case 'add': {
      return [
        ...modulos,
        {
          id: action.id,
          content: action.content,
        },
      ];
    }
    case 'delete': {
      return modulos.filter((item) => item.id !== action.id);
    }
    case 'edit': {
      return modulos.map((item) => {
        if (item.id === action.id) {
          const newObservation = {
            id: action.id,
            content: action.content
          }
          return newObservation;
        } else {
          return item;
        }
      });
    }
    default: {
      throw Error('Ação desconhecida');
    }
  }
};

const schemaObservation = z.string().nonempty().max(150);

export const useGerenciamento = ({
  status,
  observacoes,
}: {
  status: number;
  observacoes: moduloPropsGerenciamento[];
}) => {
  const [statusSelected, setStatusSelected] = React.useState(status || 0);

  const [observation, setObservation] = React.useState('');

  const [listObservation, dispatch] = React.useReducer(
    gerenciamentoReducer,
    observacoes || [],
  );

  function handleAddObservation(observation: string) {
    dispatch({
      type: 'add',
      id: id++,
      content: observation,
    });
  }

  function handleDeleteObservation(id: number) {
    dispatch({
      type: 'delete',
      id: id,
    });
  }

  function handleEditObservation(id: number, content: string) {
    dispatch({
      type: 'edit',
      id: id,
      content: content
    });
  }

  return {
    statusSelected,
    setStatusSelected,
    statusList,
    observation,
    setObservation,
    listObservation,
    handleAddObservation,
    handleDeleteObservation,
    handleEditObservation,
    schemaObservation,
  };
};
