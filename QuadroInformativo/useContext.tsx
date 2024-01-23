import React from 'react';
import { QuadroinformativoReducer, OcupacaoReducer } from './QuadroReducer';
import { TabelasQuadro } from './MedidasTabela';
import { modulosProps, ocupacaoModulosProps } from './QuadroReducer';

type QuadroInformativoProps = {
  handleAddOcupacao: (ocup: number, div: number, desc: number) => void;
  handleDeleteOcupacao: (id: number) => void;
  handleAdd: () => void;
  handleReferencia: (id: number, referencia: string) => void;
  handleDelete: (id: number) => void;
  selectMedidas: number;
  selecionarMedidas: (value: number) => void;
  selecionarTabela: (value: number) => void;
  selecionarNorma: (value: number) => void;
  selecionarConstrucao: (value: number) => void;
  modulos: modulosProps[];
  ocupacao: ocupacaoModulosProps[];
  norma: number;
  tabela: number;
  construcao: number
};

const medidasInitial = [
  {
    id: 0,
    medida: 'Saídas de Emergencia',
    referencia: 'Conforme IT08',
  },
  {
    id: 1,
    medida: 'Iluminação de Emergência',
    referencia: 'Conforme NBR 10.898:2013',
  },
  {
    id: 2,
    medida: 'Sinalização de Emergência',
    referencia: 'Conforme IT15',
  },
  {
    id: 3,
    medida: 'Extintores',
    referencia: 'Conforme IT16',
  },
];

type ProviderProps = { children: React.ReactNode };
export const QuadroInformativoContext = React.createContext<
  QuadroInformativoProps | null
>(null);

let i = 4;
let id = 0;

const ContextQuadroInformativo = ({ children }: ProviderProps) => {
  const { medidas } = TabelasQuadro();
  const [selectMedidas, setSelectMedidas] = React.useState(0);
  const [tabela, setTabela] = React.useState(0);
  const [norma, setNorma] = React.useState(3);
  const [construcao, setConstrucao] = React.useState(2)
  const [modulos, dispatch] = React.useReducer(
    QuadroinformativoReducer,
    medidasInitial,
  );
  const [ocupacao, dispatchOcupacao] = React.useReducer(OcupacaoReducer, []);

  function handleAddOcupacao(ocup: number, div: number, desc: number) {
    dispatchOcupacao({
      type: 'add',
      id: id++,
      ocupacao: [ocup, div, desc],
    });
  }

  function handleDeleteOcupacao(id: number) {
    dispatchOcupacao({
      type: 'delete',
      id: id,
    });
  }

  function handleAdd() {
    dispatch({
      type: 'add',
      id: i++,
      medida: medidas[selectMedidas][0],
      referencia: medidas[selectMedidas][1],
    });
  }

  function handleReferencia(id: number, referencia: string) {
    dispatch({
      type: 'referencia',
      id: id,
      referencia: referencia,
    });
  }

  function handleDelete(id: number) {
    dispatch({
      type: 'delete',
      id: id,
    });
  }

  function selecionarMedidas(value: number) {
    setSelectMedidas(value);
  }
  function selecionarTabela(value: number) {
    setTabela(value);
  }
  function selecionarNorma(value: number) {
    setNorma(value);
  }
  function selecionarConstrucao(value: number) {
    setConstrucao(value);
  }

  return (
    <QuadroInformativoContext.Provider
      value={{
        selecionarMedidas,
        selectMedidas,
        handleAdd,
        handleAddOcupacao,
        handleDelete,
        handleDeleteOcupacao,
        handleReferencia,
        selecionarNorma,
        selecionarTabela,
        selecionarConstrucao,
        modulos,
        ocupacao,
        norma,
        tabela,
        construcao
      }}
    >
      {children}
    </QuadroInformativoContext.Provider>
  );
};

export default ContextQuadroInformativo;
