type populacaoProps = {
  populacao: (credential: number, credential1: any) => number;
};

type divisaoProps = [string, number[], populacaoProps][];

const divisao: divisaoProps = [
  [
    'A-1',
    [60, 45, 100],
    {
      populacao: (dormitorio: number) => {
        return dormitorio * 2;
      },
    },
  ],
  [
    'A-2',
    [60, 45, 100],
    {
      populacao: (dormitorio: number) => {
        return dormitorio * 2;
      },
    },
  ],
  [
    'A-3',
    [60, 45, 100],
    {
      populacao: (dormitorio: number, area: number) => {
        return dormitorio * 2 + area / 4;
      },
    },
  ],
  [
    'B-1',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 15;
      },
    },
  ],
  [
    'B-2',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 15;
      },
    },
  ],
  [
    'C-1',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 3;
      },
    },
  ],
  [
    'C-2',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 3;
      },
    },
  ],
  [
    'C-3',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 3;
      },
    },
  ],
  [
    'D-1',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 7;
      },
    },
  ],
  [
    'D-2',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 7;
      },
    },
  ],
  [
    'D-3',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 7;
      },
    },
  ],
  [
    'D-4',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 7;
      },
    },
  ],
  [
    'E-1',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 1.5;
      },
    },
  ],
  [
    'E-2',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 1.5;
      },
    },
  ],
  [
    'E-3',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 1.5;
      },
    },
  ],
  [
    'E-4',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 1.5;
      },
    },
  ],
  [
    'E-5',
    [30, 22, 30],
    {
      populacao: (area: number) => {
        return area / 1.5;
      },
    },
  ],
  [
    'E-6',
    [30, 22, 30],
    {
      populacao: (area: number) => {
        return area / 1.5;
      },
    },
  ],
  [
    'F-1',
    [100, 75, 100],
    {
      populacao: (area: number) => {
        return area / 1.5;
      },
    },
  ],
  [
    'F-2',
    [100, 75, 100],
    {
      populacao: (area: number) => {
        return area;
      },
    },
  ],
  [
    'F-3',
    [100, 75, 100],
    {
      populacao: (area: number) => {
        return area * 2;
      },
    },
  ],
  [
    'F-4',
    [100, 75, 100],
    {
      populacao: (area: number) => {
        return area / 3;
      },
    },
  ],
  [
    'F-5',
    [100, 75, 100],
    {
      populacao: (area: number) => {
        return area / 1;
      },
    },
  ],
  [
    'F-6',
    [100, 75, 100],
    {
      populacao: (area: number) => {
        return area * 2;
      },
    },
  ],
  [
    'F-7',
    [100, 75, 100],
    {
      populacao: (area: number) => {
        return area * 2;
      },
    },
  ],
  [
    'F-8',
    [100, 75, 100],
    {
      populacao: (area: number) => {
        return area / 1;
      },
    },
  ],
  [
    'F-9',
    [100, 75, 100],
    {
      populacao: (area: number) => {
        return area / 1;
      },
    },
  ],
  [
    'F-10',
    [100, 75, 100],
    {
      populacao: (area: number) => {
        return area / 1.5;
      },
    },
  ],
  [
    'F-11',
    [100, 75, 100],
    {
      populacao: (area: number) => {
        return area / 1;
      },
    },
  ],
  [
    'G-1',
    [100, 60, 100],
    {
      populacao: (vagas: number) => {
        return vagas / 40;
      },
    },
  ],
  [
    'G-2',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 40;
      },
    },
  ],
  [
    'G-3',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 40;
      },
    },
  ],
  [
    'G-4',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 40;
      },
    },
  ],
  [
    'G-5',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 40;
      },
    },
  ],
  [
    'H-1',
    [60, 45, 100],
    {
      populacao: (area: number) => {
        return area / 7;
      },
    },
  ],
  [
    'H-2',
    [30, 22, 30],
    {
      populacao: (dormitorio: number, area: number) => {
        return dormitorio * 2 + area / 4;
      },
    },
  ],
  [
    'H-3',
    [100, 60, 100],
    {
      populacao: (leito: number, area: number) => {
        return leito * 1.5 + area / 7;
      },
    },
  ],
  [
    'H-4',
    [60, 45, 100],
    {
      populacao: (area: number) => {
        return area / 7;
      },
    },
  ],
  [
    'H-5',
    [60, 45, 100],
    {
      populacao: (area: number) => {
        return area;
      },
    },
  ],
  [
    'H-6',
    [60, 45, 100],
    {
      populacao: (area: number) => {
        return area / 7;
      },
    },
  ],
  [
    'I-1',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 10;
      },
    },
  ],
  [
    'I-2',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 10;
      },
    },
  ],
  [
    'I-3',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 10;
      },
    },
  ],
  [
    'J-1',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 30;
      },
    },
  ],
  [
    'J-2',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 30;
      },
    },
  ],
  [
    'J-3',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 30;
      },
    },
  ],
  [
    'J-4',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 30;
      },
    },
  ],
  [
    'L-1',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 3;
      },
    },
  ],
  [
    'L-2',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 10;
      },
    },
  ],
  [
    'L-3',
    [100, 60, 100],
    {
      populacao: (area: number) => {
        return area / 10;
      },
    },
  ],
];

const TabelaSaidaEmergencia = () => {
  return {divisao}
}

export default TabelaSaidaEmergencia
