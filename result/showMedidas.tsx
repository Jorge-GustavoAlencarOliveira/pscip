import React from "react";
import { DataStorage } from "../dataContext";
import Link from "next/link";

interface dadosProps { 
  areaConstruida?: string;
  areaAconstruir?: string;
  altura?: string;
  pavimentos?: string;
  areaTotal?: number;
  dataConstrucao?: string;
  compartimentacao?: string;
}

interface showMedidasProps{
  medidas: string[];
  dados: dadosProps;
  ocupacao?: string;
  ocupacoes?: number[][]
}


const ShowMedidas = ({ medidas, dados, ocupacao, ocupacoes }: showMedidasProps) => {
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
                    altura: dados.altura,
                    area: dados.areaTotal,
                    ocupacao: ocupacao,
                  },
                }}
              >
                {item}
              </Link>
            </li>
          );
        })}
        {valoresOcupacao && valoresOcupacao.length > 1 && (
          <li>
            <Link
              href={{
                pathname: '/medidas/isolamentoderisco',
              }}
              className="text-decoration-none"
            >
              Separação entre edificações
            </Link>
          </li>
        )}
      </ul>
    );
};

export default ShowMedidas