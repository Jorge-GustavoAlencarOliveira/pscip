import pdfFonts from 'pdfmake/build/vfs_fonts';
import { ModuloDeterministicoProps } from '../Bases/Carga/Deterministico/useReducerDeterministico';
import {
  tabelac1,
  valorestabelac1,
} from '../Bases/CargaIncendio/TabelaDeterministico';
import { somasValores} from '../Bases/Carga/Deterministico/useDeterministico';
import { definicaoCargaIncendio, numberFormat } from '../Bases/Carga/Deterministico/useDeterministico';

const pdfMake = require('pdfmake/build/pdfmake');

function compareValues (a:number, b: number){
  if(a > b) return a
  else return b
}

export const pdfMetodoDeterministico = (
  modulos: ModuloDeterministicoProps[],
) => {
  const valores = definicaoCargaIncendio(modulos)
  const modulo = modulos.map(({ resultado, materiais, id, area }, index) => {
    const moduloShow = [
      [
        {
          text: `Módulo ${index + 1}`,
          style: 'tableHeader',
          colSpan: 5,
          alignment: 'center',
          bold: true,
          fillColor: '#5ea3d7'
        },
        {},
        {},
        {},
        {},
      ],
      [
        {
          text: 'ITEM',
          style: 'tableHeader',
          alignment: 'center',
          bold: true,
          fillColor: '#deeaf6'
        },
        {
          text: 'TIPO DO MATERIAL EXISTENTE NA ÁREA CONSIDERADA',
          style: 'tableHeader',
          alignment: 'center',
          bold: true,
          fillColor: '#deeaf6'
        },
        {
          text: 'MASSA TOTAL DE CADA MATERIAL NA ÁREA CONSIDERADA Mi (Kg)',
          style: 'tableHeader',
          alignment: 'center',
          bold: true,
          fillColor: '#deeaf6'
        },
        {
          text: 'POTENCIAL CALORÍFICO ESPECÍFICO Hi (MJ/Kg)',
          style: 'tableHeader',
          alignment: 'center',
          bold: true,
          fillColor: '#deeaf6'
        },
        {
          text: 'POTENCIAL CALORÍFICO POR MATERIAL Mi x Hi (MJ)',
          style: 'tableHeader',
          alignment: 'center',
          bold: true,
          fillColor: '#deeaf6'
        },
      ],
    ];

    const materiaisShow = materiais.map(({ id, tipo, massa }) => {
      const valor = numberFormat(+massa * valorestabelac1[+tipo])
      return [
        { text: id, alignment: 'center' },
        { text: tabelac1[+tipo], alignment: 'center' },
        { text: numberFormat(+massa), alignment: 'center' },
        { text: numberFormat(valorestabelac1[+tipo]), alignment: 'center' },
        {
          text: valor,
          alignment: 'center',
        },
      ];
    });

    const resultadoShow = [
      [
        {
          text: 'Total do potencial calorífico da área considerada ΣMi x Hi (MJ)',
          style: 'tableHeader',
          colSpan: 3,
          alignment: 'center',
          bold: true,
          fillColor: '#deeaf6'
        },
        {},
        {},
        {text: numberFormat(somasValores(materiais)),
        colSpan: 2,
        alignment: 'center', 
        },
        {},
      ],
      [
        {
          text: 'Área considerada para o cálculo Af (m²)',
          style: 'tableHeader',
          colSpan: 3,
          alignment: 'center',
          bold: true,
          fillColor: '#deeaf6'
        },
        {},
        {},
        {text: numberFormat(+area),
        colSpan: 2,
        alignment: 'center', 
        },
        {},
      ],
      [
        {
          text: 'Carga de incêndio específica da área considerada para o cálculo Qfi = Σ Mi x Hi (MJ/m²)/ Af',
          style: 'tableHeader',
          colSpan: 3,
          alignment: 'center',
          bold: true,
          fillColor: '#deeaf6'
        },
        {},
        {},
        {text: numberFormat(resultado),
        colSpan: 2,
        alignment: 'center', 
        },
        {},
      ],
    ]
    return [moduloShow[0], moduloShow[1], ...materiaisShow, resultadoShow[0], resultadoShow[1], resultadoShow[2]];
  });

  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const details = [
    {
      style: 'Tabela',
      table: {
        widths: ['auto', 'auto', 'auto', 'auto', 'auto'],
        alignment: 'center',
        body: [
          [
            {
              text: 'MEMORIAL DE CÁLCULO DE CARGA DE INCÊNDIO',
              style: 'tableHeader',
              colSpan: 5,
              alignment: 'center',
              bold: true,
              fontSize: 13,
              fillColor: '#5ea3d7'
            },
            {},
            {},
            {},
            {},
          ],
          ...modulo?.[0],
          ...modulo?.[1],
          [
            {
              text: 'Resultado',
              style: 'tableHeader',
              colSpan: 5,
              alignment: 'center',
              bold: true,
              fillColor: '#5ea3d7'
            },
            {},
            {},
            {},
            {},
          ],
          [
            {
              text: 'Média dos 02 módulos de maior valor (MJ/m²)',
              style: 'tableHeader',
              colSpan: 3,
              alignment: 'center',
              bold: true,
              fillColor: '#deeaf6'
            },
            {},
            {},
            {text: numberFormat((valores[0]+valores[1])/2),
            colSpan: 2,
            alignment: 'center', 
            },
            {},
          ],
          [
            {
              text: '85% do módulo de maior valor (MJ/m²)',
              style: 'tableHeader',
              colSpan: 3,
              alignment: 'center',
              bold: true,
              fillColor: '#deeaf6'
            },
            {},
            {},
            {text: numberFormat(valores[0]*0.85),
            colSpan: 2,
            alignment: 'center', 
            },
            {},
          ],
          [
            {
              text: 'Carga incêndio adotada',
              style: 'tableHeader',
              colSpan: 3,
              alignment: 'center',
              bold: true,
              fillColor: '#deeaf6'
            },

            {},
            {},
            {text: `${numberFormat(compareValues((valores[0]*0.85), ((valores[0]+valores[1])/2)))} MJ/m²`,
            colSpan: 2,
            alignment: 'center', 
            bold: true,
            },
            {},
          ],
        ]
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
    pageMargins: [15, 30, 15, 40],
    content: [details],
    footer: [rodape],
    styles: {
      Tabela: {
        margin: [30, 30, 15, 15],
        fontSize: 11,
      },
    },
  };
  setTimeout(() => {
    pdfMake.createPdf(docDefinitions, null, null, pdfFonts.pdfMake.vfs).download();
  }, 1000);
};
