export interface riscoProps {
  risco?: string;
  largura?: number;
  altura?: number;
  abertura?: number;
  cargaIncendio?: number;
  distancia?: number;
  alfa?: number;
  x?: number;
  y?: number;
  z?: number;
}

export interface moduloProps {
  id: number;
  risco1?: riscoProps;
  risco2?: riscoProps;
}

interface actionProps {
  type: 'add' | 'delete';
  id: number;
  risco1?: riscoProps;
  risco2?: riscoProps;
}

const IsolamentoReducer = (modulos: moduloProps[], action: actionProps) => {
  const risco1 = {
    risco: action.risco1?.risco,
    largura: action.risco1?.largura,
    altura: action.risco1?.altura,
    abertura: action.risco1?.abertura,
    cargaIncendio: action.risco1?.cargaIncendio,
    distancia: action.risco1?.distancia,
    alfa: action.risco1?.alfa,
    x: action.risco1?.x,
    y: action.risco1?.y,
    z: action.risco1?.z,

  };
  const risco2 = {
    risco: action.risco2?.risco,
    largura: action.risco2?.largura,
    altura: action.risco2?.altura,
    abertura: action.risco2?.abertura,
    cargaIncendio: action.risco2?.cargaIncendio,
    distancia: action.risco2?.distancia,
    alfa: action.risco2?.alfa,
    x: action.risco2?.x,
    y: action.risco2?.y,
    z: action.risco2?.z,
  };

  switch (action.type) {
    case 'add': {
      return [...modulos, { id: action.id, risco1: risco1, risco2: risco2 }];
    }
    case 'delete': {
      return modulos.filter((item) => item.id !== action.id);
    }
    default: {
      throw Error('Ação desconhecida');
    }
  }
};

export default IsolamentoReducer;
