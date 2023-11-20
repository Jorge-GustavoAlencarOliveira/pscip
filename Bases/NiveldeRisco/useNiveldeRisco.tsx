import React from 'react';
import { CNAE } from './cnaeTabela';

type NiveldeRiscoProps = {
  area: string;
  patrimonioHistorico: boolean;
  alturaPavimento: boolean;
  maisdeCem: boolean;
  subsolo: boolean;
  liquidoCombustivel: boolean;
  gasGLP: boolean;
  empresa: boolean;
};

export function useNiveldeRisco() {
  function niveldeRiscoChecked(form: NiveldeRiscoProps) {
    if (
      Object.values(form).some(
        (item) => item === true || form.area === 'mais de 930',
      )
    )
      return 'Nível de Risco III';
    else if (form.area === 'menos que 200') return 'Nível de Risco I';
    else if (form.area === 'entre 200 e 930') return 'Nível de Risco II';
    else return 'Não encontrado';
  }

  const [niveldeRiscoDados, setNiveldeRiscoDados] = React.useState({
    area: 'menos que 200',
    patrimonioHistorico: false,
    alturaPavimento: false,
    maisdeCem: false,
    subsolo: false,
    liquidoCombustivel: false,
    gasGLP: false,
    empresa: false,
  });

  function setInformation(key: string, value: string | boolean) {
    setNiveldeRiscoDados({
      ...niveldeRiscoDados,
      [key]: value,
    });
  }

  const filterCNAE = (query: string) => {
    const result = CNAE.filter(
      (item) => item.toLowerCase().indexOf(query.toLowerCase()) !== -1,
    );
    if (result.length > 0) return result;
    else return ['Nenhum resultado encontrado...'];
  };

  return {
    setInformation,
    niveldeRiscoDados,
    niveldeRiscoChecked,
    filterCNAE,
  };
}
