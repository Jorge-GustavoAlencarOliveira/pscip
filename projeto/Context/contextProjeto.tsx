import React from 'react';
import { informacoesProps } from '../../Components/Hooks/useDados';
import {
  RegiaomoduloProps,
  RegiaoReducer,
  RegiaoActionProps,
} from '../../Components/Regiao-ocupacao/regiaoReducer';

export type NiveldeRiscoProps = {
  area: string;
  patrimonioHistorico: boolean;
  alturaPavimento: boolean;
  maisdeCem: boolean;
  subsolo: boolean;
  liquidoCombustivel: boolean;
  gasGLP: boolean;
  empresa: boolean;
};

type allDataBuildingProps = {
  informacoes: informacoesProps;
  regioes: RegiaomoduloProps[];
  riscosEspeciais: string[];
  niveldeRisco: {
    nivel: string;
    props: NiveldeRiscoProps
  };
  medidasSeguranca: string[];
};

interface ContextProjetoProps {
  valoresOcupacao: RegiaomoduloProps[];
  valoresRegiao: (valorRegiao: RegiaomoduloProps[]) => void;
  informations: informacoesProps;
  valoresInformacoes: (credentials: informacoesProps) => void;
  addAllDataBuilding: (
    key: keyof allDataBuildingProps,
    value: informacoesProps | {nivel: string, props: NiveldeRiscoProps} | RegiaomoduloProps[] | string[],
  ) => void;
  allDataBuilding: allDataBuildingProps;
  regioes: RegiaomoduloProps[];
  dispatchRegioes: React.Dispatch<RegiaoActionProps>;
}

export const ProjetoContext = React.createContext<ContextProjetoProps>(
  {} as ContextProjetoProps,
);

export const useContextProjeto = () => {
  const context = React.useContext(ProjetoContext);
  if (context === null) {
    throw new Error('useContext está sem o provider');
  }
  return context;
};

export const ContextProjeto = ({ children }: React.PropsWithChildren) => {
  const [valoresOcupacao, setValoresOcupacao] =
    React.useState<RegiaomoduloProps[]>();
  const [informations, setInformations] = React.useState<informacoesProps>();
  const [allDataBuilding, setAllDataBuilding] =
    React.useState<allDataBuildingProps>({} as allDataBuildingProps);
  const [regioes, dispatchRegioes] = React.useReducer(RegiaoReducer, []);
   
  console.log(allDataBuilding)
  function addAllDataBuilding(
    key: keyof allDataBuildingProps,
    value: informacoesProps | {nivel: string, props: NiveldeRiscoProps} | RegiaomoduloProps[] | string[],
  ) {
    setAllDataBuilding((item) => ({
      ...item,
      [key]: value,
    }));
  }

  function valoresRegiao(valorRegiao: RegiaomoduloProps[]) {
    setValoresOcupacao(valorRegiao);
  }
  function valoresInformacoes(informacoes: informacoesProps) {
    setInformations(informacoes);
  }
  
  return (
    <ProjetoContext.Provider
      value={{
        valoresInformacoes,
        informations,
        valoresRegiao,
        valoresOcupacao,
        addAllDataBuilding,
        allDataBuilding,
        regioes,
        dispatchRegioes,
      }}
    >
      {children}
    </ProjetoContext.Provider>
  );
};

export default ContextProjeto;
