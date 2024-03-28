import { RegiaomoduloProps } from '../../Components/Regiao-ocupacao/regiaoReducer';
import TabelaDescricao from '../../Tabelas/tabelaDescricao';
import { listaOcupacao } from '../../Ocupacoes/ListaOcupacoes';
import { cleanNumberInteiro } from '../formatarNumero';

export function medidasdeSegurancaMinimas(
  regioes: RegiaomoduloProps[],
): string[][] | null {
  let medidasFinal: string[][] = [];
  const { descricao: descricao1 } = TabelaDescricao();
  regioes?.map(({ id, dados }) => {
    if (!dados) return null;
    const { altura, areaTotal, dataConstrucao, compartimentacao } = dados[0];
    dados[1].map((item) => {
      const { divisao, cargaincendio } = descricao1[item[0]][item[1]][item[2]];
      const medidas =
        divisao in listaOcupacao &&
        listaOcupacao[divisao](
          cleanNumberInteiro(altura),
          areaTotal.toString(),
          cargaincendio,
          regioes.length,
          dataConstrucao,
        );
      medidasFinal.push(medidas);
    });
  });
  if (!!medidasFinal.length) return medidasFinal
  else return null;
}
