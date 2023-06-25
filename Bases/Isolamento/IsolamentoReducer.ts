export interface riscoProps {
  risco?: string;
  maiorDimensao?: number;
  menorDimensao?: number;
  abertura?: number;
  cargaIncendio?: number;
  distancia?: number;
  alfa?: number;
  x?: number;
  y?: number;
  z?: number;
  pavimentos?: string;
  unidadeAutonoma?: string;
  compartimentacaohorizontal?: string;
  compartimentacaovertical?: string;
  parteFachada?: string;
  bombeiro?: number;
  severidade?: number;
  Dprojeto?: string
  areaFachada?: number 
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
    maiorDimensao: action.risco1?.maiorDimensao,
    menorDimensao: action.risco1?.menorDimensao,
    abertura: action.risco1?.abertura,
    cargaIncendio: action.risco1?.cargaIncendio,
    distancia: action.risco1?.distancia,
    alfa: action.risco1?.alfa,
    x: action.risco1?.x,
    y: action.risco1?.y,
    z: action.risco1?.z,
    pavimentos: action.risco1?.pavimentos,
    unidadeAutonoma: action.risco1?.unidadeAutonoma,
    compartimentacaohorizontal: action.risco1?.compartimentacaohorizontal,
    compartimentacaovertical: action.risco1?.compartimentacaovertical,
    parteFachada: action.risco1?.parteFachada,
    bombeiro: action.risco1?.bombeiro,
    severidade: action.risco1?.severidade,
    Dprojeto: action.risco1?.Dprojeto,
    areaFachada: action.risco1?.areaFachada

  }
  const risco2 = {
    risco: action.risco2?.risco,
    maiorDimensao: action.risco2?.maiorDimensao,
    menorDimensao: action.risco2?.menorDimensao,
    abertura: action.risco2?.abertura,
    cargaIncendio: action.risco2?.cargaIncendio,
    distancia: action.risco2?.distancia,
    alfa: action.risco2?.alfa,
    x: action.risco2?.x,
    y: action.risco2?.y,
    z: action.risco2?.z,
    pavimentos: action.risco2?.pavimentos,
    unidadeAutonoma: action.risco2?.unidadeAutonoma,
    compartimentacaohorizontal: action.risco2?.compartimentacaohorizontal,
    compartimentacaovertical: action.risco2?.compartimentacaovertical,
    parteFachada: action.risco2?.parteFachada,
    bombeiro: action.risco2?.bombeiro,
    severidade: action.risco2?.severidade,
    Dprojeto: action.risco2?.Dprojeto,
    areaFachada: action.risco2?.areaFachada
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
