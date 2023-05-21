import React from 'react';
import { ReactNode } from 'react';

type ContextData = {
  altura?: number;
  area?: number;
  dataConstrucao?: string;
  cargaIncendio?: number;
  ocupacao?: string;
  allStates: (Credential: StateProps) => void;
};

type StateProps = {
  altura?: number;
  area?: number;
  dataConstrucao?: string;
  cargaIncendio?: number;
  ocupacao?: string;
};

type ProviderProps = {
  children: ReactNode;
};
export const DataStorage = React.createContext({} as ContextData);

const DataContext = ({ children }: ProviderProps) => {
  const [altura, setAltura] = React.useState<number>();
  const [area, setArea] = React.useState<number>();
  const [dataConstrucao, setDataConstrucao] = React.useState<string>();
  const [cargaIncendio, setCargaIncendio] = React.useState<number>();
  const [ocupacao, setOcupacao] = React.useState<string>();

  function allStates({
    altura,
    area,
    dataConstrucao,
    cargaIncendio,
    ocupacao,
  }: StateProps) {
    if (altura) setAltura(altura);
    if (area) setArea(area);
    if (ocupacao) setOcupacao(ocupacao);
    if (dataConstrucao) setDataConstrucao(dataConstrucao);
    if (cargaIncendio) setCargaIncendio(cargaIncendio);
  }

  return (
    <DataStorage.Provider
      value={{
        altura,
        area,
        dataConstrucao,
        cargaIncendio,
        ocupacao,
        allStates,
      }}
    >
      {children}
    </DataStorage.Provider>
  );
};

export default DataContext;
