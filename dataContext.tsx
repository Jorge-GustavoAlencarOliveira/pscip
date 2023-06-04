import React, { Dispatch, SetStateAction } from 'react';
import { ReactNode } from 'react';

interface dadosProps {
  areaConstruida: string;
  areaAconstruir: string;
  altura: string;
  pavimentos: string;
  areaTotal: number;
  dataConstrucao: string;
}

type ContextData = {
  valoresOcupacao: Array<array>;
  setValoresOcupacao: Dispatch<SetStateAction<Array<array>>>;
};


type array = [dadosProps, number[][]];

type ProviderProps = {
  children: ReactNode;
};
export const DataStorage = React.createContext({} as ContextData);

const DataContext = ({ children }: ProviderProps) => {
  const [valoresOcupacao, setValoresOcupacao] = React.useState<Array<array>>([
    [
      {
        areaConstruida: '',
        areaAconstruir: '',
        altura: '',
        pavimentos: '',
        areaTotal: 0,
        dataConstrucao: '',
      },
      [],
    ],
  ]);

  return (
    <DataStorage.Provider
      value={{
        valoresOcupacao,
        setValoresOcupacao,
      }}
    >
      {children}
    </DataStorage.Provider>
  );
};

export default DataContext;
