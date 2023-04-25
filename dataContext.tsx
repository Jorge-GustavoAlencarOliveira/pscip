import React from 'react';
import { ReactNode } from 'react';

type dataProps = {
  ocupacao: string;
  altura: string;
  area: string;
  dataconstrucao: string;
  cargaincendio: number;
};

type baseDataProps = {
  ocupacao: string;
  altura: string;
  area: string;
  dataconstrucao: string;
  cargaincendio: number;
};

type ContextData = {
  data: dataProps | undefined;
  baseData: (Credential: baseDataProps) => void;
};

type ProviderProps = {
  children: ReactNode;
};
export const DataStorage = React.createContext({} as ContextData);

const DataContext = ({ children }: ProviderProps) => {
  const [data, setData] = React.useState<dataProps>();

  function baseData({
    ocupacao,
    altura,
    area,
    dataconstrucao,
    cargaincendio,
  }: baseDataProps) {
    setData({
      ocupacao,
      altura,
      area,
      dataconstrucao,
      cargaincendio,
    });
  }

  return (
    <DataStorage.Provider value={{ data, baseData }}>
      {children}
    </DataStorage.Provider>
  );
};

export default DataContext;
