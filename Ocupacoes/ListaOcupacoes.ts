import A2 from "./A2";
import A3 from "./A3";

type listaProps = {
  [key: string]: (
    alt: string,
    area: string,
    carga: number,
    isolamento: number,
    construcao: string,
  ) => string[] | undefined;
};

export const listaOcupacao: listaProps = {
  'A-2': (
    alt: string,
    area: string,
    carga: number,
    isolamento: number,
    construcao: string,
  ) =>
    A2({
      altura: alt,
      area: area,
      cargaIncendio: carga,
      isolamento: isolamento,
      construcao: construcao,
    }),
    'A-3': (
      alt: string,
      area: string,
      carga: number,
      isolamento: number,
      construcao: string,
    ) =>
      A3({
        altura: alt,
        area: area,
        cargaIncendio: carga,
        isolamento: isolamento,
        construcao: construcao,
      }),
};