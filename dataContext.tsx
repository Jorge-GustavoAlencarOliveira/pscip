import React from 'react';
import { ReactNode } from 'react';

type ContextData = {
  altura: string | undefined;
  SetAltura: (Credentials: string | undefined) => void;
  area: string | undefined;
  SetArea: (Credentials: string | undefined) => void;
  dataConstrucao: string | undefined;
  SetDataConstrucao: (Credentials: string | undefined) => void;
  cargaIncendio: number | undefined;
  SetCargaIncendio: (Credentials: number | undefined) => void;
  ocupacao: string | undefined;
  SetOcupacao: (Credentials: string | undefined) => void;
};

type ProviderProps = {
  children: ReactNode;
};
export const DataStorage = React.createContext({} as ContextData);

const DataContext = ({ children }: ProviderProps) => {
  const [altura, setAltura] = React.useState<string | undefined>();
  const [area, setArea] = React.useState<string | undefined>();
  const [dataConstrucao, setDataConstrucao] = React.useState<string | undefined>();
  const [cargaIncendio, setCargaIncendio] = React.useState< number | undefined  >();
  const [ocupacao, setOcupacao] = React.useState<string | undefined>();
  
  function SetAltura (altura: string | undefined){
    setAltura(altura)
  }
  function SetArea (area: string | undefined){
    setArea(area)
  }
  function SetDataConstrucao (DataConstrucao: string | undefined){
    setDataConstrucao(DataConstrucao)
  }
  function SetCargaIncendio (CargaIncendio: number | undefined){
    setCargaIncendio(CargaIncendio)
  }
  function SetOcupacao (Ocupacao: string | undefined){
    setOcupacao(Ocupacao)
  }
  
  return (
    <DataStorage.Provider
      value={{
        altura,
        SetAltura,
        area,
        SetArea,
        dataConstrucao,
        SetDataConstrucao,
        cargaIncendio,
        SetCargaIncendio,
        ocupacao,
        SetOcupacao,
      }}
    >
      {children}
    </DataStorage.Provider>
  );
};

export default DataContext;
