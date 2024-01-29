import { dadosProps } from '../Hooks/useDados';

export type RegiaomoduloProps = {
  id: number;
  dados?: [dadosProps, number[][]];
};

export type RegiaoActionProps = {
  type: 'add' | 'delete';
  id: number;
  dados?: [dadosProps, number[][]];
};

export const RegiaoReducer = (
  modulos: RegiaomoduloProps[],
  action: RegiaoActionProps,
) => {
  switch (action.type) {
    case 'add': {
      return [
        ...modulos,
        {
          id: action.id,
          dados: action.dados,
        },
      ];
    }
    case 'delete': {
      return modulos.filter((item) => item.id !== action.id);
    }
    default: {
      throw Error('Ação desconhecida');
    }
  }
};
