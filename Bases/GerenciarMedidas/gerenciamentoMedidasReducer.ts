type actionProps = {
  type: 'add' | 'delete';
  medida?: string;
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
    default: {
      throw Error('Ação desconhecida');
    }
  }
};
