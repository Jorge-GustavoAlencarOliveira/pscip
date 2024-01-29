import { classificaoSeveridade, relacaoAlturaLargura, valorAlfa } from "./TabelaIsolamento";

function severidade(cargaincendio: number) {
  if (cargaincendio <= 680) return 0;
  if (cargaincendio > 680 && cargaincendio <= 1460) return 1;
  else return 2;
}

function valorXY(altura: number, largura: number, abertura: number): { x: number; y: number; z: number; } {
  let x: number;
  let z: number;
  if (altura >= largura) {
    x = altura / largura;
    z = largura;
  } else {
    x = largura / altura;
    z = altura;
  }
  const y = (abertura / (altura * largura)) * 100;
  return { x, y, z };
}  
 

interface isolamentoProps{
  largura: number,
  altura: number,
  abertura: number,
  cargaIncendio: number,
  fatorSegurança: number
}

export const dist1 = ({largura, altura, abertura, cargaIncendio, fatorSegurança}: isolamentoProps) => {
  const { x, y, z } = valorXY(altura, largura, abertura);
  const valorSeveridade = severidade(cargaIncendio);
  const valorAbertura = classificaoSeveridade[valorSeveridade].findIndex(
    (item) => item >= y,
  );
  const valorX = relacaoAlturaLargura.findIndex((item) => item >= x);
  const alfa = valorAlfa[valorAbertura][valorX];
  const distancia = (alfa * z) + fatorSegurança;
  return {distancia, alfa, x, y, z, valorSeveridade}
}    



  



