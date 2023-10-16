export interface ocupacaoModulosProps {
  id: number;
  ocupacao?: number[];
}

interface ocupacaoActionProps {
  type: 'add' | 'delete' | 'reset';
  id?: number;
  ocupacao?: number[];
}

export const OcupacaoReducer = (
  modulos1: ocupacaoModulosProps[],
  action1: ocupacaoActionProps,
) => {
  switch (action1.type) {
    case 'add': {
      return [
        ...modulos1,
        {
          id: action1.id,
          ocupacao: action1.ocupacao,
        },
      ];
    }
    case 'delete': {
      return modulos1.filter((item) => item.id !== action1.id);
    }
    case 'reset':{
      return modulos1 = []
    }
    default: {
      throw Error('Ação desconhecida');
    }
  }
};