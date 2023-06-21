import TabelaSaidaEmergencia from "./tabelaSaidaEmergencia";

const { divisao } = TabelaSaidaEmergencia();

export function handleCalcular(area: number, div: number) {
  const populacao = Math.ceil(divisao[div][2].populacao(area, null));
  const acesso = Math.ceil(
    divisao[div][2].populacao(area, null) / divisao[div][1][0],
  );
  const escada = Math.ceil(
    divisao[div][2].populacao(area, null) / divisao[div][1][1],
  );
  const porta = Math.ceil(
    divisao[div][2].populacao(area, null) / divisao[div][1][2],
  );
  return { populacao, acesso, escada, porta };
}
export function handleCalcular1(area: number, dormitorio: number, div: number) {
  const populacao = Math.ceil(divisao[div][2].populacao(dormitorio, area));
  const acesso = Math.ceil(
    divisao[div][2].populacao(dormitorio, area) / divisao[div][1][0],
  );
  const escada = Math.ceil(
    divisao[div][2].populacao(dormitorio, area) / divisao[div][1][1],
  );
  const porta = Math.ceil(
    divisao[div][2].populacao(dormitorio, area) / divisao[div][1][2],
  );
  return { populacao, acesso, escada, porta };
}
