export type ModuloDeterministicoProps = {
  id: number;
  materiais?: MateriaisDeterministicoProps[];
  area?: string;
  resultado?: number;
};

export type MateriaisDeterministicoProps = {
  id: number;
  tipo?: string;
  massa?: string;
};

type ModuloDeterministicoAction = {
  type: 'add' | 'delete';
  id: number;
  materiais?: MateriaisDeterministicoProps[];
  area?: string;
  resultado?: number;
};

type MateriaisDeterministicoAction = {
  type: 'add' | 'delete' | 'reset';
  id?: number;
  tipo?: string;
  massa?: string;
};

export const moduloDeterministicoReducer = (
  modulos: ModuloDeterministicoProps[],
  action: ModuloDeterministicoAction,
) => {
  switch (action.type) {
    case 'add': {
      return [
        ...modulos,
        {
          id: action.id,
          materiais: action.materiais,
          area: action.area,
          resultado: action.resultado,
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

export const materiaisDeterministicoReducer = (
  modulos: MateriaisDeterministicoProps[],
  action: MateriaisDeterministicoAction,
) => {
  switch (action.type) {
    case 'add': {
      return [
        ...modulos,
        {
          id: action.id,
          tipo: action.tipo,
          massa: action.massa,
        },
      ];
    }
    case 'delete': {
      return modulos.filter((item) => item.id !== action.id);
    }
    case 'reset': {
      return [];
    }
    default: {
      throw Error('Ação desconhecida');
    }
  }
};
