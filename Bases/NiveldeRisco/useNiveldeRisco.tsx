import { CNAE } from './cnaeTabela';
import React from 'react';

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


export function useNiveldeRisco(list: NiveldeRiscoProps) {
  function niveldeRiscoChecked(form: NiveldeRiscoProps) {
    if(!form) return
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


  const [niveldeRiscoDados, setNiveldeRiscoDados] = React.useState({
    area: '',
    patrimonioHistorico: list?.patrimonioHistorico || false,
    alturaPavimento: false,
    maisdeCem: list?.maisdeCem || false,
    subsolo: list?.subsolo || false,
    liquidoCombustivel: list?.liquidoCombustivel || false,
    gasGLP: list?.gasGLP || false,
    empresa: list?.empresa || false,
  });

  function definedArea(area: number) {
    if (area <= 200) {
      return setNiveldeRiscoDados((item) => ({
        ...item,
        area: 'menos que 200',
      }));
    }
    if (area > 200 && area <= 930) {
      return setNiveldeRiscoDados((item) => ({
        ...item,
        area: 'entre 200 e 930',
      }));
    }
    if (area > 930) {
      return setNiveldeRiscoDados((item) => ({ ...item, area: 'mais de 930' }));
    } else return console.log('dado incorreto');
  }

  function definedAlturaPavimento(pavimentos: number, altura: number) {
    if (pavimentos > 3 || altura > 12) {
      return setNiveldeRiscoDados((item) => ({
        ...item,
        alturaPavimento: true,
      }));
    } else
      return setNiveldeRiscoDados((item) => ({
        ...item,
        alturaPavimento: false,
      }));
  }

  

  const filterCNAE = (query: string) => {
    const result = CNAE.filter(
      (item) => item.toLowerCase().indexOf(query.toLowerCase()) !== -1,
    );
    return result.length > 0 ? result : 'Nenhum resultado encontrado...';
  };

  return {
    niveldeRiscoChecked,
    filterCNAE,
    definedAlturaPavimento,
    definedArea,
    niveldeRiscoDados,
    setNiveldeRiscoDados
  };
}

