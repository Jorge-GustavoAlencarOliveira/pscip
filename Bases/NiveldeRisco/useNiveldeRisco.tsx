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

  

  const filterCNAE = (query: string) => {
    const result = CNAE.filter(
      (item) => item.toLowerCase().indexOf(query.toLowerCase()) !== -1,
    );
    return result.length > 0 ? result : 'Nenhum resultado encontrado...';
  };

  return {
    niveldeRiscoChecked,
    filterCNAE,
  };
}

