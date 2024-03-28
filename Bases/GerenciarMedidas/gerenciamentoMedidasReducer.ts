type actionProps = {
  type: 'add' | 'delete' | 'update';
  medida?: string;
  updateMedidas?: string[]
};

export const gerenciamentoMedidasReducer = (
  modulos: string[],
  action: actionProps,
) => {
  switch (action.type) {
    case 'add': {
      return [
        ...modulos,
          action.medida,
      ];
    }
    case 'delete': {
      return modulos.filter((item) => item !== action.medida);
    }
    case 'update': {
      return [...action.updateMedidas]
    }
    default: {
      throw Error('Ação desconhecida');
    }
  }
};
