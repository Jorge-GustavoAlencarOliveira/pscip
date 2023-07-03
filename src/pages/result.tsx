import React from 'react';
import { DataStorage } from '../../dataContext';
import TabelaDescricao from '../../Tabelas/tabelaDescricao';
import { listaOcupacao } from '../../Ocupacoes/ListaOcupacoes';
import Link from 'next/link';

const ShowMedidads = ({ medidas }: { medidas: string[] }) => {
  const { valoresOcupacao } = React.useContext(DataStorage);
  return (
    <ul>
      {medidas.map((item, index) => {
        const links = item
          .replaceAll(
            '(nos salões de festas e auditórios com previsão de população superior a 200 pessoas)',
            '',
          )
          .replaceAll(
            '(nos condomínios com arruamento interno, independente da área)',
            '',
          )
          .replaceAll(' ', '')
          .replaceAll('ç', 'c')
          .replaceAll('ã', 'a')
          .replaceAll('ê', 'e')
          .replaceAll('í', 'i')
          .toLowerCase();
        return (
          <li key={index}>
            <Link
              className="text-decoration-none"
              href={{
                pathname: `/medidas/${links}`,
                query: {
                  // altura: altura,
                  // area: area,
                  // carga: cargaIncendio,
                  ocupacao: 'A-2',
                },
              }}
            >
              {item}
            </Link>
          </li>
        );
      })}
      {valoresOcupacao.length > 1 && (
        <li>
          <Link
            href={{
              pathname: '/medidas/isolamentoderisco',
            }}
          >
            Separação entre edificações
          </Link>
        </li>
      )}
    </ul>
  );
};

const Result = () => {
  const { descricao } = TabelaDescricao();
  const { valoresOcupacao } = React.useContext(DataStorage);
  const [medidas1, setMedidas] = React.useState<string[]>([]);

  React.useEffect(() => {
    setMedidas([]);
    valoresOcupacao.map((item) => {
      if (item[0].compartimentacao === 'compartimentacaoNao') {
        item[1].map((item1) => {
          const valor = descricao[item1[0]][item1[1]][item1[2]].divisao;
          const medidas =
            valor in listaOcupacao &&
            listaOcupacao[valor](
              item[0].altura,
              item[0].areaTotal.toString(),
              descricao[item1[0]][item1[1]][item1[2]].cargaincendio,
              valoresOcupacao.length,
              item[0].dataConstrucao,
            );
          if (medidas) {
            medidas.map((item2) => {
              setMedidas((item) => [...item, item2]);
            });
          }
        });
      }
    });
  }, []);

  const final = [...new Set(medidas1)];

  return (
    <>
      {valoresOcupacao.map((item, index) => {
        return (
          <div key={index}>
            {valoresOcupacao.length > 1 && <h1>Risco {index + 1}</h1>}
            {item[1].map((item1, index1) => {
              const valor = descricao[item1[0]][item1[1]][item1[2]].divisao;
              const medidas =
                valor in listaOcupacao &&
                listaOcupacao[valor](
                  item[0].altura,
                  item[0].areaTotal.toString(),
                  descricao[item1[0]][item1[1]][item1[2]].cargaincendio,
                  valoresOcupacao.length,
                  item[0].dataConstrucao,
                );
              if (item[0].compartimentacao === 'compartimentacaoSim') {
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
                    <div>{medidas && <ShowMedidads medidas={medidas} />}</div>
                  </div>
                );
              } else {
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
                  </div>
                );
              }
            })}
            <div>{final.length !== 0 && <ShowMedidads medidas={final} />}</div>
            <br />
            <p>Área construída: {item[0].areaConstruida} m²</p>
            <p>Área a construir: {item[0].areaAconstruir} m²</p>
            <p>Área total: {item[0].areaTotal} m²</p>
            <p>Altura: {item[0].altura} m</p>
            <p>Pavimentos: {item[0].pavimentos}</p>
            <p>Situação: {item[0].dataConstrucao}</p>
          </div>
        );
      })}
    </>
  );
};

export default Result;
