export interface moduloProps {
  id: number;
  ambiente?: string;
  divisao?: number;
  text?: number | string;
  text1?: number | string;
  populacao?: number;
  acesso?: number;
  escada?: number;
  porta?: number;
}

type actionPropsAdd = {
  type: 'add' | 'add1' | 'delete';
  id: number;
  ambiente?: string;
  divisao?: number;
  text?: number | string;
  text1?: number | string;
  populacao?: number;
  acesso?: number;
  escada?: number;
  porta?: number;
}

export default function moduloReducer(modulos: moduloProps[], action:actionPropsAdd){
  switch(action.type){
    case 'add': {
      return [
        ...modulos,
        {
          id: action.id,
          divisao: action.divisao,
          text: action.text,
          populacao: action.populacao,
          acesso: action.acesso,
          porta: action.porta,
          escada: action.escada,
          ambiente: action.ambiente
        },
      ];
    }
    case 'add1': {
      return [
        ...modulos,
        {
          id: action.id,
          divisao: action.divisao,
          text: action.text,
          text1: action.text1,
          populacao: action.populacao,
          acesso: action.acesso,
          porta: action.porta,
          escada: action.escada,
          ambiente: action.ambiente
        },
      ];
    }
    case 'delete': {
      return modulos.filter((item) => item.id !== action.id)
    }
    default: {
      throw Error('Ação desconhecida')
    }
  }
}



