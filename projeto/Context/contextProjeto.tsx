import React from 'react';
import { informacoesProps } from '../../Components/Hooks/useDados';
import {
  RegiaomoduloProps,
} from '../../Components/Regiao-ocupacao/regiaoReducer';
import { moduloPropsGerenciamento } from '../../Components/Hooks/useGerenciamento';

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

export type allDataBuildingProps = {
  informacoes: informacoesProps;
  regioes: RegiaomoduloProps[];
  riscosEspeciais: string[];
  niveldeRisco: {
    nivel: string;
    props: NiveldeRiscoProps;
  };
  medidasSeguranca: string[];
  gerenciamento: {
    status: number;
    observacoes: moduloPropsGerenciamento[];
  };
};

type ContextProjetoprops = {
  children: React.ReactNode;
  project: {
    id: string;
    dados: informacoesProps;
    edificacao: RegiaomoduloProps[];
    riscosEspeciais: string[];
    niveldeRisco: {
      nivel: string;
      props: NiveldeRiscoProps;
    };
    medidasSeguranca: string[];
    gerenciamento: {
      status: number;
      observacoes: moduloPropsGerenciamento[];
    };
  };
  action: string | string[] | undefined;
};

interface ContextProjetoProps {
  addAllDataBuilding: (
    key: string,
    value:
      | informacoesProps
      | { nivel: string; props: NiveldeRiscoProps }
      | RegiaomoduloProps[]
      | string[]
      | string
      | boolean
      | { status: number; observacoes: moduloPropsGerenciamento[] }
  ) => void;
  allDataBuilding: allDataBuildingProps;
  project_id: string;
  action: string | string[] | undefined;
}

export const ProjetoContext = React.createContext<ContextProjetoProps | null>(
  null,
);

export const useContextProjeto = () => {
  const context = React.useContext(ProjetoContext);
  if (context === null) {
    throw new Error('useContext está sem o provider');
  }
  return context;
};

export const ContextProjeto = ({
  children,
  project,
  action,
}: ContextProjetoprops) => {
  const [allDataBuilding, setAllDataBuilding] =
    React.useState<allDataBuildingProps>({
      informacoes: project?.dados || ({} as informacoesProps),
      regioes: project?.edificacao || ([] as RegiaomoduloProps[]),
      riscosEspeciais: project?.riscosEspeciais || ([] as string[]),
      niveldeRisco: project?.niveldeRisco || {
        nivel: '',
        props: {
          area: '',
          patrimonioHistorico: false,
          alturaPavimento: false,
          maisdeCem: false,
          subsolo: false,
          liquidoCombustivel: false,
          gasGLP: false,
          empresa: false,
        },
      },
      medidasSeguranca: project?.medidasSeguranca || ([] as string[]),
      gerenciamento: {
        status: project?.gerenciamento?.status || 0,
        observacoes: project?.gerenciamento?.observacoes || [] as moduloPropsGerenciamento[],
      },
    });

  console.log(allDataBuilding);

  function addAllDataBuilding(
    key: string,
    value:
      | informacoesProps
      | { nivel: string; props: NiveldeRiscoProps }
      | RegiaomoduloProps[]
      | string[]
      | string
      | boolean
      | { status: number; observacoes: moduloPropsGerenciamento[] },
  ) {
    setAllDataBuilding((item) => ({
      ...item,
      [key]: value,
    }));
  }

  return (
    <ProjetoContext.Provider
      value={{
        addAllDataBuilding,
        allDataBuilding,
        project_id: project?.id,
        action,
      }}
    >
      {children}
    </ProjetoContext.Provider>
  );
};

export default ContextProjeto;
