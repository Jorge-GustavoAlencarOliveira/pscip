import TabelaSaidaEmergencia from './tabelaSaidaEmergencia';

const { divisao } = TabelaSaidaEmergencia();

export function handleCalcular(area: number, div: number) {
  const populacao = Math.ceil(divisao[div][2].populacao(area, null));
  const acesso = (populacao / divisao[div][1][0]).toFixed(2);
  const escada = (populacao / divisao[div][1][1]).toFixed(2);
  const porta = (populacao / divisao[div][1][2]).toFixed(2);

  return { populacao, acesso, escada, porta };
}

export function handleCalcular1(area: number, dormitorio: number, div: number) {
  const populacao = Math.ceil(divisao[div][2].populacao(dormitorio, area));
  const acesso = (populacao / divisao[div][1][0]).toFixed(2);
  const escada = (populacao / divisao[div][1][1]).toFixed(2);
  const porta = (populacao / divisao[div][1][2]).toFixed(2);

  return { populacao, acesso, escada, porta };
}

export function unidadePassagem(value: number) {
  const up = (value * 0.55).toFixed(2).toString().replace('.', ',');
  return up;
}

export function calculoPorta(value: number) {
  if (value <= 1) {
    return '0,80 m';
  }
  if (value > 1 && value <= 2) {
    return '1,0 m';
  }
  if (value > 2 && value <= 3) {
    return '1,5 m';
  }
  if (value > 3 && value <= 4) {
    return '2,0 m';
  }
  return (
    (Math.ceil(value) * 0.55).toFixed(2).toString().replace('.', ',') + ' m'
  );
}

export function transformarString (value: number){
  return value.toFixed(2).toString().replace('.', ',')
}
