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
    props: NiveldeRiscoProps;
  };
  medidasSeguranca: string[];
  status: string;
  observacoes: string;
};

type ContextProjetoprops = {
  children: React.ReactNode;
  project: {
    id: string,
    dados: informacoesProps,
    edificacao: RegiaomoduloProps[],
    riscosEspeciais: string[];
    niveldeRisco: {
      nivel: string;
      props: NiveldeRiscoProps;
    };
    medidasSeguranca: string[];
  }
}

interface ContextProjetoProps {
  valoresOcupacao: RegiaomoduloProps[];
  valoresRegiao: (valorRegiao: RegiaomoduloProps[]) => void;
  informations: informacoesProps;
  valoresInformacoes: (credentials: informacoesProps) => void;
  addAllDataBuilding: (
    key: keyof allDataBuildingProps,
    value:
      | informacoesProps
      | { nivel: string; props: NiveldeRiscoProps }
      | RegiaomoduloProps[]
      | string[]
      | string,
  ) => void;
  allDataBuilding: allDataBuildingProps;
  regioes: RegiaomoduloProps[];
  dispatchRegioes: React.Dispatch<RegiaoActionProps>;
  project_id: string;
  riscosEspeciais: string[];
  nivelRisco: {
    nivel: string;
    props: NiveldeRiscoProps;
  };
  medidasSeguranca: string[];
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

export const ContextProjeto = ({ children, project }: ContextProjetoprops) => {
  const [valoresOcupacao, setValoresOcupacao] =
    React.useState<RegiaomoduloProps[]>();
  const initialInformations = project.dados
  const [informations, setInformations] = React.useState<informacoesProps>(initialInformations);
  const [allDataBuilding, setAllDataBuilding] =
    React.useState<allDataBuildingProps>({} as allDataBuildingProps);
  const initialEdificacao = project.edificacao || []
  const [regioes, dispatchRegioes] = React.useReducer(RegiaoReducer, initialEdificacao);

  function addAllDataBuilding(
    key: keyof allDataBuildingProps,
    value:
      | informacoesProps
      | { nivel: string; props: NiveldeRiscoProps }
      | RegiaomoduloProps[]
      | string[]
      | string,
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

  console.log(project.medidasSeguranca);

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
        project_id: project.id,
        riscosEspeciais: project.riscosEspeciais,
        nivelRisco: project.niveldeRisco,
        medidasSeguranca: project.medidasSeguranca
      }}
    >
      {children}
    </ProjetoContext.Provider>
  );
};

export default ContextProjeto;
