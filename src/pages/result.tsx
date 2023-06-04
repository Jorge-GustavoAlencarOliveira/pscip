import React from 'react';
import A1 from '../../Ocupacoes/A2';
import { DataStorage } from '../../dataContext';
import TabelaDescricao from '../../Tabelas/tabelaDescricao';

interface dadosProps {
  risco: number;
  divisao: string;
  descricao: string;
  areaConstruida: string;
  areaAconstruir: string;
  areaTotal: number;
  altura: string;
  pavimentos: string;
  cargaIncendio: number;
  dataConstrucao: string;
}
type listaProps = {
  [key: string]: (
    alt: string,
    area: string,
    carga: number,
    isolamento: number,
    construcao: string,
  ) => JSX.Element;
};

const Result = () => {
  const { descricao } = TabelaDescricao();
  const { valoresOcupacao } = React.useContext(DataStorage);
  const compartimentacao = true;
  const listaOcupacao: listaProps = {
    'A-2': (
      alt: string,
      area: string,
      carga: number,
      isolamento: number,
      construcao: string,
    ) => (
      <A1
        altura={alt}
        area={area}
        cargaIncendio={carga}
        isolamento={isolamento}
        construcao={construcao}
      />
    ),

    'A-3': (
      alt: string,
      area: string,
      carga: number,
      isolamento: number,
      construcao: string,
    ) => (
      <A1
        altura={alt}
        area={area}
        cargaIncendio={carga}
        isolamento={isolamento}
        construcao={construcao}
      />
    ),
  };

  const [final, setFinal] = React.useState<dadosProps[]>([]);

  // React.useEffect(() => {
  //   valoresOcupacao.map((item, index) => {
  //     item[1].map(item1 => {
  //       setFinal(ocupacao => [...ocupacao, {
  //         risco: index,
  //         divisao: descricao[item1[0]][item1[1]][item1[2]].divisao,
  //         descricao: descricao[item1[0]][item1[1]][item1[2]].descricao,
  //         areaConstruida: item[0].areaConstruida,
  //         areaAconstruir: item[0].areaAconstruir,
  //         areaTotal: item[0].areaTotal,
  //         altura: item[0].altura,
  //         pavimentos: item[0].pavimentos,
  //         cargaIncendio: descricao[item1[0]][item1[1]][item1[2]].cargaincendio,
  //         dataConstrucao: item[0].dataConstrucao
  //       }]);
  //     })
  //   })
  // },[])

  function compartimentada() {
    const ocupacoes = valoresOcupacao.map((item, index) =>
      item[1].map((item1) =>
        listaOcupacao[descricao[item1[0]][item1[1]][item1[2]].divisao](
          item[0].altura,
          item[0].areaTotal.toString(),
          descricao[item1[0]][item1[1]][item1[2]].cargaincendio,
          valoresOcupacao.length,
          item[0].dataConstrucao,
        ),
      ),
    );
    return ocupacoes;
  }

  return (
    <>
      {valoresOcupacao.map((item, index) => {
        return (
          <ul key={index}>
            {valoresOcupacao.length > 1 && <h1>Risco {index + 1}</h1>}            
            {item[1].map((item1, index1) => {
              const valor = descricao[item1[0]][item1[1]][item1[2]].divisao;
              return (
                <div key={index1}>
                  <p>Divisão: {valor}</p>
                  <p>
                    Descrição:{' '}
                    {descricao[item1[0]][item1[1]][item1[2]].descricao}
                  </p>
                  <p>
                    Carga incêndio:{' '}
                    {item1[3] ||
                      descricao[item1[0]][item1[1]][item1[2]]
                        .cargaincendio}{' '}
                    MJ/m²
                  </p>
                  <div>
                    {valor in listaOcupacao &&
                      listaOcupacao[valor](
                        item[0].altura,
                        item[0].areaTotal.toString(),
                        descricao[item1[0]][item1[1]][item1[2]].cargaincendio,
                        valoresOcupacao.length,
                        item[0].dataConstrucao,
                      )}
                  </div>
                </div>
              );
            })}
            <br />
            <li>Área construída: {item[0].areaConstruida} m²</li>
            <li>Área a construir: {item[0].areaAconstruir} m²</li>
            <li>Área total: {item[0].areaTotal} m²</li>
            <li>Altura: {item[0].altura} m</li>
            <li>Pavimentos: {item[0].pavimentos}</li>
            <li>Situação: {item[0].dataConstrucao}</li>
            <div></div>
          </ul>
        );
      })}
    </>
  );
};

export default Result;

{
  /* {final.length !== 0 && final.map((item, index) => {
        const valor = item.divisao.replace('-', '')
        return(
          <div key={index}>
            <h1>Risco {item.risco + 1}</h1>
            <ul>
              <li>{item.divisao}</li>
              <li>{item.descricao}</li>
              <li>{item.areaConstruida}</li>
              <li>{item.areaAconstruir}</li>
              <li>{item.areaTotal}</li>
              <li>{item.altura}</li>
              <li>{item.pavimentos}</li>
              <li>{item.cargaIncendio}</li>
              <li>{item.dataConstrucao}</li>
            </ul>
            {valor in listaOcupacao && typeof valor === 'string' && listaOcupacao[valor](item.altura, item.areaTotal.toString(), item.cargaIncendio, valoresOcupacao.length)}
          </div>
        )
      })} */
}
