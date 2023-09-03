export interface modulosProps {
  id: number;
  medida?: string;
  referencia?: string;
}
interface actionProps {
  type: 'add' | 'delete' | 'referencia';
  id: number;
  medida?: string;
  referencia?: string;
}


export interface ocupacaoModulosProps {
  id: number;
  ocupacao?: number[];
}

interface ocupacaoActionProps {
  type: 'add' | 'delete';
  id: number;
  ocupacao?: number[];
}

export const QuadroinformativoReducer = (
  modulos: modulosProps[],
  action: actionProps,
) => {
  switch (action.type) {
    case 'add': {
      return [
        ...modulos,
        {
          id: action.id,
          medida: action.medida,
          referencia: action.referencia,
        },
      ];
    }
    case 'delete': {
      return modulos.filter((item) => item.id !== action.id);
    }
    case 'referencia': {
      modulos.filter((item) => {
        if (item.id === action.id) item.referencia = action.referencia;
      });
      return [...modulos];
    }
    default: {
      throw Error('Ação desconhecida');
    }
  }
};

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
    default: {
      throw Error('Ação desconhecida');
    }
  }
};
