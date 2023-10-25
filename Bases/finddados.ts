import TabelaDescricao from "../Tabelas/tabelaDescricao";

const {descricao} = TabelaDescricao()

export function dadosOcupacao (value: number[]){
  const {descricao: desc, cargaincendio, divisao} = descricao[value[0]][value[1]][value[2]]
  return {desc, cargaincendio, divisao}
}

