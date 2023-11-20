import pdfFonts from 'pdfmake/build/vfs_fonts';
import { moduloProps } from '../Bases/Isolamento/IsolamentoReducer';
const pdfMake = require('pdfmake/build/pdfmake');

const PdfIsolamento = (modulos: moduloProps) => {
  const distancia1 =
    modulos.risco1?.distancia &&
    modulos.risco1.Dprojeto &&
    +modulos.risco1?.distancia < +modulos.risco1.Dprojeto
      ? 'Sim'
      : 'Não';
  const distancia2 =
    modulos.risco2?.distancia &&
    modulos.risco2.Dprojeto &&
    +modulos.risco2?.distancia < +modulos.risco2.Dprojeto
      ? 'Sim'
      : 'Não';
  const dados = [
    [
      {
        text: '01',
        style: 'tableHeader',
      },
      {
        text: 'Edificação expositora (item 4.1.1 da IT 05):',
        style: 'valorTabela',
      },
      {
        text: modulos.risco1?.risco,
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '02',
        style: 'tableHeader',
      },
      {
        text: 'Edificação em exposição (item 4.1.2 da IT 05):',
        style: 'valorTabela',
      },
      {
        text: modulos.risco2?.risco,
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '03',
        style: 'tableHeader',
      },
      {
        text: 'Número de pavimentos:',
        style: 'valorTabela',
      },
      {
        text: modulos.risco1?.pavimentos,
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '04',
        style: 'tableHeader',
      },
      {
        text: 'Atende aos critérios(1) para se enquadrar como “unidade autônoma compartimentada”?',
        style: 'valorTabela',
      },
      {
        text: modulos.risco1?.unidadeAutonoma,
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '05',
        style: 'tableHeader',
      },
      {
        text: 'Possui compartimentação horizontal?',
        style: 'valorTabela',
      },
      {
        text: modulos.risco1?.compartimentacaohorizontal,
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '06',
        style: 'tableHeader',
      },
      {
        text: 'Possui compartimentação vertical?',
        style: 'valorTabela',
      },
      {
        text: modulos.risco1?.compartimentacaovertical,
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '07',
        style: 'tableHeader',
      },
      {
        text: 'Parte da fachada considerada no cálculo (Tabela 1 da IT 05):',
        style: 'valorTabela',
      },
      {
        text: modulos.risco1?.parteFachada,
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '08',
        style: 'tableHeader',
      },
      {
        text: 'Maior dimensão da fachada (m):',
        style: 'valorTabela',
      },
      {
        text: modulos.risco1?.maiorDimensao.toString().replaceAll('.',','),
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '09',
        style: 'tableHeader',
      },
      {
        text: 'Menor dimensão da fachada (m):',
        style: 'valorTabela',
      },
      {
        text: modulos.risco1?.menorDimensao.toString().replaceAll('.',','),
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '10',
        style: 'tableHeader',
      },
      {
        text: 'Área da fachada de cálculo (m²):',
        style: 'valorTabela',
      },
      {
        text: modulos.risco1?.areaFachada?.toFixed(2).toString().replaceAll('.',','),
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '11',
        style: 'tableHeader',
      },
      {
        text: 'Carga incêndio da edificação (MJ/m²):',
        style: 'valorTabela',
      },
      {
        text: String(modulos.risco1?.cargaIncendio),
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '12',
        style: 'tableHeader',
      },
      {
        text: 'Classificação da severidade (Tabela 2 da IT 05):',
        style: 'valorTabela',
      },
      {
        text: String(modulos.risco1?.severidade),
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '13',
        style: 'tableHeader',
      },
      {
        text: 'X = maior dimensão/menor dimensão:',
        style: 'valorTabela',
      },
      {
        text: String(modulos.risco1?.x?.toFixed(2)).toString().replaceAll('.',','),
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '14',
        style: 'tableHeader',
      },
      {
        text: 'Somatória das áreas de aberturas (portas, janelas, vãos, etc.) da fachada de cálculo (m²):',
        style: 'valorTabela',
      },
      {
        text: String(modulos.risco1?.abertura).toString().replaceAll('.',','),
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '15',
        style: 'tableHeader',
      },
      {
        text: 'Y = (área das aberturas/área da fachada) x 100 (%):',
        style: 'valorTabela',
      },
      {
        text: String(modulos.risco1?.y?.toFixed(2)).toString().replaceAll('.',','),
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '16',
        style: 'tableHeader',
      },
      {
        text: 'Índice α = interseção entre a linha da Intensidade de Exposição dada pela classificação de severidade e a % de aberturas arredondada - Y) e a coluna do valor X (Tabela 4 da IT 05): ',
        style: 'valorTabela',
      },
      {
        text: String(modulos.risco1?.alfa).replaceAll('.',','),
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '17',
        style: 'tableHeader',
      },
      {
        text: 'Índice ß = o município possui Unidade do CBMMG?',
        style: 'valorTabela',
      },
      {
        text: 'ß = ' + String(modulos.risco1?.bombeiro).toString().replaceAll('.',','),
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '18',
        style: 'tableHeader',
      },
      {
        text: 'D = (menor dimensão da fachada x α) + ß (m):',
        style: 'valorTabela',
      },
      {
        text: String(modulos.risco1?.distancia?.toFixed(2)).toString().replaceAll('.',','),
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '19',
        style: 'tableHeader',
      },
      {
        text: ' Qual a distância em projeto (m)?',
        style: 'valorTabela',
      },
      {
        text: String(modulos.risco1?.Dprojeto),
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '17',
        style: 'tableHeader',
      },
      {
        text: 'A distância em projeto é ≥D ou Dr?',
        style: 'valorTabela',
      },
      {
        text: String(distancia1).toString().replaceAll('.',','),
        style: 'valorModulo',
      },
    ],
  ];
  const dados1 = [
    [
      {
        text: '01',
        style: 'tableHeader',
      },
      {
        text: 'Edificação expositora (item 4.1.1 da IT 05):',
        style: 'valorTabela',
      },
      {
        text: modulos.risco2?.risco,
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '02',
        style: 'tableHeader',
      },
      {
        text: 'Edificação em exposição (item 4.1.2 da IT 05):',
        style: 'valorTabela',
      },
      {
        text: modulos.risco1?.risco,
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '03',
        style: 'tableHeader',
      },
      {
        text: 'Número de pavimentos:',
        style: 'valorTabela',
      },
      {
        text: modulos.risco2?.pavimentos,
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '04',
        style: 'tableHeader',
      },
      {
        text: 'Atende aos critérios(1) para se enquadrar como “unidade autônoma compartimentada”?',
        style: 'valorTabela',
      },
      {
        text: modulos.risco2?.unidadeAutonoma,
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '05',
        style: 'tableHeader',
      },
      {
        text: 'Possui compartimentação horizontal?',
        style: 'valorTabela',
      },
      {
        text: modulos.risco2?.compartimentacaohorizontal,
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '06',
        style: 'tableHeader',
      },
      {
        text: 'Possui compartimentação vertical?',
        style: 'valorTabela',
      },
      {
        text: modulos.risco2?.compartimentacaovertical,
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '07',
        style: 'tableHeader',
      },
      {
        text: 'Parte da fachada considerada no cálculo (Tabela 1 da IT 05):',
        style: 'valorTabela',
      },
      {
        text: modulos.risco2?.parteFachada,
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '08',
        style: 'tableHeader',
      },
      {
        text: 'Maior dimensão da fachada (m):',
        style: 'valorTabela',
      },
      {
        text: modulos.risco2?.maiorDimensao.toString().replaceAll('.',','),
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '09',
        style: 'tableHeader',
      },
      {
        text: 'Menor dimensão da fachada (m):',
        style: 'valorTabela',
      },
      {
        text: modulos.risco2?.menorDimensao.toString().replaceAll('.',','),
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '10',
        style: 'tableHeader',
      },
      {
        text: 'Área da fachada de cálculo (m²):',
        style: 'valorTabela',
      },
      {
        text: modulos.risco2?.areaFachada?.toFixed(2).toString().replaceAll('.',','),
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '11',
        style: 'tableHeader',
      },
      {
        text: 'Carga incêndio da edificação (MJ/m²):',
        style: 'valorTabela',
      },
      {
        text: String(modulos.risco2?.cargaIncendio),
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '12',
        style: 'tableHeader',
      },
      {
        text: 'Classificação da severidade (Tabela 2 da IT 05):',
        style: 'valorTabela',
      },
      {
        text: String(modulos.risco2?.severidade),
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '13',
        style: 'tableHeader',
      },
      {
        text: 'X = maior dimensão/menor dimensão:',
        style: 'valorTabela',
      },
      {
        text: String(modulos.risco2?.x?.toFixed(2)).replaceAll('.',','),
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '14',
        style: 'tableHeader',
      },
      {
        text: 'Somatória das áreas de aberturas (portas, janelas, vãos, etc.) da fachada de cálculo (m²):',
        style: 'valorTabela',
      },
      {
        text: String(modulos.risco2?.abertura).replaceAll('.',','),
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '15',
        style: 'tableHeader',
      },
      {
        text: 'Y = (área das aberturas/área da fachada) x 100 (%):',
        style: 'valorTabela',
      },
      {
        text: String(modulos.risco2?.y?.toFixed(2)).replaceAll('.',','),
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '16',
        style: 'tableHeader',
      },
      {
        text: 'Índice α = interseção entre a linha da Intensidade de Exposição dada pela classificação de severidade e a % de aberturas arredondada - Y) e a coluna do valor X (Tabela 4 da IT 05): ',
        style: 'valorTabela',
      },
      {
        text: String(modulos.risco2?.alfa).replaceAll('.',','),
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '17',
        style: 'tableHeader',
      },
      {
        text: 'Índice ß = o município possui Unidade do CBMMG?',
        style: 'valorTabela',
      },
      {
        text: 'ß = ' + String(modulos.risco2?.bombeiro).replaceAll('.',','),
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '18',
        style: 'tableHeader',
      },
      {
        text: 'D = (menor dimensão da fachada x α) + ß (m):',
        style: 'valorTabela',
      },
      {
        text: String(modulos.risco2?.distancia?.toFixed(2)).replaceAll('.',','),
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '19',
        style: 'tableHeader',
      },
      {
        text: ' Qual a distância em projeto (m)?',
        style: 'valorTabela',
      },
      {
        text: String(modulos.risco2?.Dprojeto).replaceAll('.',','),
        style: 'valorModulo',
      },
    ],
    [
      {
        text: '17',
        style: 'tableHeader',
      },
      {
        text: 'A distância em projeto é ≥D ou Dr?',
        style: 'valorTabela',
      },
      {
        text: String(distancia2),
        style: 'valorModulo',
      },
    ],
  ];

  pdfMake.vfs = pdfFonts.pdfMake.vfs;
  const reporTitle = [
    {
      text: 'E.4.4 - MEMORIAL DE CÁLCULO DE ISOLAMENTO DE RISCO ENTRE EDIFICAÇÕES',
      fontSize: 15,
      bold: true,
      margin: [15, 15, 15, 25],
      alignment: 'center',
    },
  ];

  const details = [
    {
      style: 'Tabela',
      table: {
        widths: [15, 'auto', 'auto'],
        headerRows: 1,
        alignment: 'start',
        // keepWithHeaderRows: 1,
        body: [
          [
            { text: 'Nº' },
            {
              text: 'MEMORIAL DE CÁLCULO DE ISOLAMENTO DE RISCO',
              style: 'tableHeader',
              colSpan: 2,
              alignment: 'center',
              bold: true,
            },
            {},
          ],
          ...dados,
        ],
      },
    },
    { text: 'Observações:', margin: [15, 30, 15, 15] },
    {
      text: 'Ass. Responsável Técnico - CREA/CAU',
      alignment: 'center',
      margin: [15, 60, 15, 15],
    },
  ];

  const details1 = [
    {
      style: 'Tabela',
      table: {
        widths: [15, 'auto', 'auto'],
        headerRows: 1,
        alignment: 'start',
        // keepWithHeaderRows: 1,
        body: [
          [
            { text: 'Nº' },
            {
              text: 'MEMORIAL DE CÁLCULO DE ISOLAMENTO DE RISCO',
              style: 'tableHeader',
              colSpan: 2,
              alignment: 'center',
              bold: true,
            },
            {},
          ],
          ...dados1,
        ],
      },
    },
    { text: 'Observações:', margin: [15, 30, 15, 15] },
    {
      text: 'Ass. Responsável Técnico - CREA/CAU',
      alignment: 'center',
      margin: [15, 60, 15, 15],
    },
  ];
  const rodape: string[] = [];
  const docDefinitions = {
    pageSize: 'A4',
    pageMargins: [15, 50, 15, 40],
    header: [reporTitle],
    content: [details],
    footer: [rodape],
    styles: {
      Tabela: {
        margin: [30, 20, 15, 15],
      },
      valorTabela: {
        fontSize: 12,
      },
      valorModulo: {
        fontSize: 12,
        alignment: 'center',
      },
      tabelaMenor: { margin: [0, 0, 0, 0] },
    },
  };
  const docDefinitions1 = {
    pageSize: 'A4',
    pageMargins: [15, 50, 15, 40],
    header: [reporTitle],
    content: [details1],
    footer: [rodape],
    styles: {
      Tabela: {
        margin: [30, 20, 15, 15],
      },
      valorTabela: {
        fontSize: 12,
      },
      valorModulo: {
        fontSize: 12,
        alignment: 'center',
      },
      tabelaMenor: { margin: [0, 0, 0, 0] },
    },
  };
  pdfMake.createPdf(docDefinitions).download();
  pdfMake.createPdf(docDefinitions1).download();
};

export default PdfIsolamento;
