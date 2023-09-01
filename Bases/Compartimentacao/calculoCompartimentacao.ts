import { tabelaCompartimentacao } from './tabelaCompartimentacao';

interface CompartimentacaoProps {
  divisao: string;
  altura: string;
}

export const CalculoCompartimentacao = (divisao: string, altura: string) => {
  switch (altura) {
    case 'Um pavimento':
      return tabelaCompartimentacao[+divisao][1][0];
      break;
    case 'H ≤ 6m':
      return tabelaCompartimentacao[+divisao][1][1];
      break;
    case '6m < H ≤ 12m':
      return tabelaCompartimentacao[+divisao][1][2];
      break;
    case '12m <H ≤ 23m':
      return tabelaCompartimentacao[+divisao][1][3];
      break;
    case '23m < H ≤ 30m':
      return tabelaCompartimentacao[+divisao][1][4];
      break;
    case '30m <H ≤ 54m':
      return tabelaCompartimentacao[+divisao][1][5];
      break;
    case 'Acima de 54m':
      return tabelaCompartimentacao[+divisao][1][6];
      break;
    default:
      return 'Não existe valor máximo de compartimentação'
  }
};


