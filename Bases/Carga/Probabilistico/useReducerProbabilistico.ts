export type ModuloMetodoProbabilistico = {
  id: number;
  material: string;
  altura: string;
  resultado: number
}

type ActionMetodoProbabilistico = {
  type: 'add' | 'delete';
  id: number;
  material?: string;
  altura?: string;
  resultado?: number
}

export const probabilisticoReducer = (modulos: ModuloMetodoProbabilistico[], action: ActionMetodoProbabilistico) => {
  switch(action.type){
    case 'add': {
      return [...modulos,
      {
        id: action.id,
        material: action.material,
        altura: action.altura,
        resultado: action.resultado
      }]
    }
    case 'delete': {
      return modulos.filter(item => item.id !== action.id)
    }
    default: {throw Error('Ação inválida.')}
  }
} 