import pdfFonts from 'pdfmake/build/vfs_fonts';
const pdfMake = require('pdfmake/build/pdfmake');

export interface moduloProps {
  id: number;
  pavimento?: string;
  populacao?: number;
  divisao?: number;
  brigadistas?: number;
}

const Pdf = (modulos: moduloProps[], total: number | undefined) => {
  const dados = modulos.map((pavimento) => {
    return [
      { text: pavimento.pavimento, alignment: 'center' },
      {
        text: String(pavimento.populacao),
        alignment: 'center',
      },
      {
        text: String(pavimento.brigadistas),
        alignment: 'center',
      },
      {
        text: 'Básico',
        alignment: 'center',
      },
    ];
  });

  pdfMake.vfs = pdfFonts.pdfMake.vfs;
  const reporTitle = [
    {
      text: 'E.3.1 QUADRO RESUMO DE INFORMAÇÕES DA BRIGADA DE INCÊNDIO',
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
        widths: [100, 'auto', 'auto', 'auto'],
        headerRows: 2,
        alignment: 'center',
        // keepWithHeaderRows: 1,
        body: [
          [
            {
              text: 'QUADRO RESUMO DE INFORMAÇÕES DA BRIGADA DE INCÊNDIO',
              style: 'tableHeader',
              colSpan: 4,
              alignment: 'center',
              bold: true,
            },
            {},
            {},
            {},
          ],
          [
            {
              text: 'Nome do pavimento',
              style: 'tableHeader',
              alignment: 'center',
              bold: true,
            },
            {
              text: 'População fixa do pavimento',
              style: 'tableHeader',
              alignment: 'center',
              bold: true,
            },
            {
              text: 'Número de brigadistas',
              style: 'tableHeader',
              alignment: 'center',
              bold: true,
            },
            {
              text: 'Nível de Treinamento',
              style: 'tableHeader',
              alignment: 'center',
              bold: true,
            },
          ],
          ...dados,
          [
            {
              text: `Total de Brigadistas: ${total}`,
              style: 'tableHeader',
              colSpan: 4,
              alignment: 'star',
              bold: true,
            },
            {},
            {},
            {},
          ],
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
        margin: [30, 60, 15, 15],
      },
    },
  };
  pdfMake.createPdf(docDefinitions).download();
};

export default Pdf;
