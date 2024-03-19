import {tabelaBrigada} from "./TabelaBrigada";

export function calculoBrigada (ocupacao:number, populacao:number){
  const referencia = tabelaBrigada[ocupacao]
  if(populacao <=10){
    const brigadaPav = Math.ceil(referencia.ate10 * populacao);
    return brigadaPav
  } else {
    const ate10 = referencia.ate10 * 10;
    const acima10 = (populacao - 10) * referencia.acima10;
    const brigadaPav = Math.ceil(ate10) + Math.ceil(acima10)
    return brigadaPav
  }
}