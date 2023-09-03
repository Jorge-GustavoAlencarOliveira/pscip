export interface moduloProps {
  id: number;
  pavimento?: string;
  populacao?: number;
  divisao?: number;
  brigadistas?: number;
}

interface actionProps {
  type: 'add' | 'delete';
  id: number;
  pavimento?: string;
  populacao?: number;
  divisao?: number;
  brigadistas?: number;
}

const BrigadaReducer = (modulos: moduloProps[], action: actionProps) => {
  switch (action.type) {
    case 'add': {
      return [
        ...modulos,
        {
          id: action.id,
          pavimento: action.pavimento,
          populacao: action.populacao,
          divisao: action.divisao,
          brigadistas: action.brigadistas,
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

export default BrigadaReducer;
