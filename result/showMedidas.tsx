import React from 'react';
import { DataStorage } from '../dataContext';
import Accordion from '../Components/Accordion/accordion';
import Pavimento from '../Bases/SaidadeEmergencia/pavimento';
import Isolamento from '../Bases/Isolamento/Isolamento';
import { medidasSeguranca } from '../Bases/medidas';

interface dadosProps {
  areaConstruida?: string;
  areaAconstruir?: string;
  altura?: string;
  pavimentos?: string;
  areaTotal?: number;
  dataConstrucao?: string;
  compartimentacao?: string;
}

interface showMedidasProps {
  medidas: string[];
  dados: dadosProps;
  ocupacao?: string;
  ocupacoes?: number[][];
}

const ShowMedidas = ({
  medidas,
  dados,
  ocupacao,
  ocupacoes,
}: showMedidasProps) => {
  const { valoresOcupacao } = React.useContext(DataStorage);
  
  return (
    <div className='my-4'>
      {medidas?.map((item, index) => {
        return(
          <Accordion key={index} title={item}>
            {medidasSeguranca(item)}
          </Accordion>
        )
      })}
      {valoresOcupacao && valoresOcupacao.length > 1 && (
        <Accordion title="Separação entre Edificações">
          <Isolamento/>
        </Accordion>
      )}
    </div>
  );
};

export default ShowMedidas;

{/* <li>
          <Link
            href={{
              pathname: '/medidas/isolamentoderisco',
            }}
            className="text-decoration-none"
            >
            Separação entre edificações
          </Link>
        </li> */}

// const links = item
//   .replaceAll(
//     '(nos salões de festas e auditórios com previsão de população superior a 200 pessoas)',
//     '',
//   )
//   .replaceAll(
//     '(nos condomínios com arruamento interno, independente da área)',
//     '',
//   )
//   .replaceAll(' ', '')
//   .replaceAll('ç', 'c')
//   .replaceAll('ã', 'a')
//   .replaceAll('ê', 'e')
//   .replaceAll('í', 'i')
//   .toLowerCase();
// return (
  //   <li key={index}>
  //     <Link
  //       className="text-decoration-none"
  //       href={{
    //         pathname: `/medidas/${links}`,
    //         query: query1,
    //       }}
    //     >
    //       {item}
//     </Link>
//   </li>
// );
// console.log(dados)
// const query = Object.keys(dados)
//   .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(dados[key])}`)
//   .join('&');
// console.log(query)
// const query1 = ocupacao ? query : `${query}&ocupacao=${ocupacao}`;