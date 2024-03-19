import React from 'react';
import { CNAE } from './cnaeTabela';
import {
  cleanNumber,
  cleanNumberInteiro,
  formatarNumero,
} from '../formatarNumero';

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

type listaprops = {
  lista?: NiveldeRiscoProps
}

export function useNiveldeRisco({lista}: listaprops) {
  function niveldeRiscoChecked(form: NiveldeRiscoProps) {
    Object.values(form);
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

  const [niveldeRiscoDados, setNiveldeRiscoDados] = React.useState(
     {
      area: '',
      patrimonioHistorico: lista?.patrimonioHistorico || false,
      alturaPavimento: false,
      maisdeCem: lista.maisdeCem || false,
      subsolo: lista?.subsolo || false,
      liquidoCombustivel: lista?.liquidoCombustivel || false,
      gasGLP: lista?.gasGLP || false,
      empresa: lista?.empresa || false,
    },
  );

  function setInformation(
    key: keyof NiveldeRiscoProps,
    value: string | boolean,
  ) {
    setNiveldeRiscoDados((prev) => ({ ...prev, [key]: value }));
  }

  const nivelderisco = {
    area: (area: number) => {
      if (area <= 200) return setInformation('area', 'menos que 200');
      else if (area > 200 && area <= 930)
        return setInformation('area', 'entre 200 e 930');
      else if (area > 930) return setInformation('area', 'mais de 930');
    },
    alturaPavimento: (pavimentos: number, altura: string) => {
      if (pavimentos > 3 || cleanNumberInteiro(altura) > 12)
        setInformation('alturaPavimento', true);
    },
  };

  const filterCNAE = (query: string) => {
    const result = CNAE.filter(
      (item) => item.toLowerCase().indexOf(query.toLowerCase()) !== -1,
    );
    return result.length > 0 ? result : 'Nenhum resultado encontrado...';
  };

  return {
    setInformation,
    niveldeRiscoDados,
    niveldeRiscoChecked,
    filterCNAE,
    nivelderisco,
  };
}
