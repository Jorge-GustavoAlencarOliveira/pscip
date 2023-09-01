
interface brigadaProps {
  ate10: number;
  acima10: number;
  exigido: string;
  recomendado: string;
  descricao?: string[];
}
const tabelaBrigada: Array<brigadaProps> = [
  {
    ate10: 0,
    acima10: 0,
    exigido: 'Isento',
    recomendado: 'Isento',
  },
  {
    ate10: 1,
    acima10: 1,
    exigido: 'Básico',
    recomendado: 'Básico',
    descricao: [
      'Todos os empregados da edificação deverão compor a brigada de incêndio e, caso não haja empregados, recomenda-se que haja treinamento da população para evacuação e utilização dos equipamentos e medidas preventivas da edificação.',
    ],
  },
  {
    ate10: 0.5,
    acima10: 0.1,
    exigido: 'Básico',
    recomendado: 'Básico',
  },
  {
    ate10: 0.5,
    acima10: 0.1,
    exigido: 'Básico',
    recomendado: 'intermediário',
  },
  {
    ate10: 0.5,
    acima10: 0.1,
    exigido: 'Básico',
    recomendado: 'Básico',
  },
  {
    ate10: 0.4,
    acima10: 0.05,
    exigido: 'Básico',
    recomendado: 'Básico',
  },
  {
    ate10: 0.4,
    acima10: 0.05,
    exigido: 'Básico',
    recomendado: 'Intermediário',
  },
  {
    ate10: 0.5,
    acima10: 0.2,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: [
      'Quando a área do pavimento for superior a 3.000,0 m², deverá haver no mínimo 01 (um) brigadista profissional por pavimento, que será contado normalmente como parte do número de brigadistas exigidos para a edificação.',
    ],
  },
  {
    ate10: 0.3,
    acima10: 0.1,
    exigido: 'Básico',
    recomendado: 'Intermediário',
  },
  {
    ate10: 0.4,
    acima10: 0.1,
    exigido: 'Básico',
    recomendado: 'Básico',
  },
  {
    ate10: 0.4,
    acima10: 0.1,
    exigido: 'Básico',
    recomendado: 'Intermediário',
  },
  {
    ate10: 0.4,
    acima10: 0.1,
    exigido: 'Básico',
    recomendado: 'Intermediário',
  },
  {
    ate10: 0.4,
    acima10: 0.2,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: ['Será necessário o número mínimo de 02 (dois) brigadistas.'],
  },
  {
    ate10: 0.4,
    acima10: 0.2,
    exigido: 'Básico',
    recomendado: 'Intermediário',
  },
  {
    ate10: 0.4,
    acima10: 0.2,
    exigido: 'Básico',
    recomendado: 'Intermediário',
  },
  {
    ate10: 0.4,
    acima10: 0.2,
    exigido: 'Básico',
    recomendado: 'Intermediário',
  },
  {
    ate10: 0.8,
    acima10: 0.8,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: ['Será necessário o número mínimo de 02 (dois) brigadistas.'],
  },
  {
    ate10: 0.8,
    acima10: 0.8,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: ['Será necessário o número mínimo de 02 (dois) brigadistas.'],
  },
  {
    ate10: 1,
    acima10: 1,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: [
      'Será necessário o número mínimo de 02 (dois) brigadistas. quando a área (utilizada como divisão F-1) for superior a 2.000,0 m², deverá haver no mínimo 01 (um) brigadista profissional por pavimento, que será contado normalmente como parte do número de brigadistas exigidos para a edificação.',
    ],
  },
  {
    ate10: 1,
    acima10: 1,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: ['Será necessário o número mínimo de 02 (dois) brigadistas.'],
  },
  {
    ate10: 1,
    acima10: 1,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: ['Será necessário o número mínimo de 02 (dois) brigadistas.'],
  },
  {
    ate10: 0.6,
    acima10: 0.2,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: ['Será necessário o número mínimo de 02 (dois) brigadistas.'],
  },
  {
    ate10: 1,
    acima10: 1,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: ['Será necessário o número mínimo de 02 (dois) brigadistas.'],
  },
  {
    ate10: 1,
    acima10: 1,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: [
      'Será necessário o número mínimo de 02 (dois) brigadistas.',
      'Quando a área (utilizada como divisão F-6) for superior a 930,0 m², deverá haver no mínimo 01 (um) brigadista profissional por pavimento, que será contado normalmente como parte do número de brigadistas exigidos para a edificação.',
    ],
  },
  {
    ate10: 1,
    acima10: 1,
    exigido: 'Profissional',
    recomendado: 'Profissional',
    descricao: [
      'Eventos com classificação de risco mínimo e baixo estão isentos da medida brigada de incêndio.',
      'Eventos com população inferior a 500 (quinhentas) pessoas estão isentos da medida brigada de incêndio.',
      'Todos os locais de evento com previsão de população superior a 1.500 (mil e quinhentas) pessoas deverão contar com pessoa devidamente habilitada para operar o Desfibrilador Externo Automático (DEA).',
      'Para todos os eventos em que for exigida a medida brigada de incêndio, deverá haver no mínimo 2 (dois) brigadistas.',
    ],
  },
  {
    ate10: 0.6,
    acima10: 0.2,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: ['Será necessário o número mínimo de 02 (dois) brigadistas.'],
  },
  {
    ate10: 0.4,
    acima10: 0.1,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: ['Será necessário o número mínimo de 02 (dois) brigadistas.'],
  },
  {
    ate10: 1,
    acima10: 1,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: ['Será necessário o número mínimo de 02 (dois) brigadistas.'],
  },
  {
    ate10: 0.4,
    acima10: 0.1,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: ['Será necessário o número mínimo de 02 (dois) brigadistas.'],
  },
  {
    ate10: 1,
    acima10: 1,
    exigido: 'Básico',
    recomendado: 'Básico',
  },
  {
    ate10: 1,
    acima10: 1,
    exigido: 'Básico',
    recomendado: 'Básico',
  },
  {
    ate10: 1,
    acima10: 1,
    exigido: 'Básico',
    recomendado: 'Básico',
  },
  {
    ate10: 0.5,
    acima10: 0.1,
    exigido: 'Básico',
    recomendado: 'Intermediário',
  },
  {
    ate10: 0.5,
    acima10: 0.2,
    exigido: 'Básico',
    recomendado: '50% Básico, 50% Intermediário',
  },
  {
    ate10: 0.5,
    acima10: 0.1,
    exigido: 'Básico',
    recomendado: 'Básico',
  },
  {
    ate10: 1,
    acima10: 1,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: ['Será necessário o número mínimo de 02 (dois) brigadistas.'],
  },
  {
    ate10: 0.6,
    acima10: 0.2,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: [
      'Será necessário o número mínimo de 02 (dois) brigadistas.',
      'Nos pavimentos onde houver UTIs e centros cirúrgicos, 100% da população fixa desse pavimento deve fazer parte da brigada de incêndio, salvo os plantonistas e funcionários temporários não considerados como parte fixa da população.',
    ],
  },
  {
    ate10: 0.3,
    acima10: 0.1,
    exigido: 'Básico',
    recomendado: 'Intermediário',
  },
  {
    ate10: 1,
    acima10: 1,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: ['Será necessário o número mínimo de 02 (dois) brigadistas.'],
  },
  {
    ate10: 0.4,
    acima10: 0.1,
    exigido: 'Básico',
    recomendado: 'Intermediário',
  },
  {
    ate10: 0.4,
    acima10: 0.05,
    exigido: 'Básico',
    recomendado: 'Intermediário',
  },
  {
    ate10: 0.5,
    acima10: 0.07,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: ['Será necessário o número mínimo de 02 (dois) brigadistas.'],
  },
  {
    ate10: 0.6,
    acima10: 0.1,
    exigido: 'Básico',
    recomendado: '50% Básico, 50% Intermediário',
    descricao: ['Será necessário o número mínimo de 02 (dois) brigadistas.'],
  },
  {
    ate10: 0.6,
    acima10: 0.1,
    exigido: 'Isento',
    recomendado: 'Isento',
  },
  {
    ate10: 0.4,
    acima10: 0.1,
    exigido: 'Básico',
    recomendado: 'Intermediário',
  },
  {
    ate10: 0.5,
    acima10: 0.2,
    exigido: 'Básico',
    recomendado: 'Intermediário',
    descricao: ['Será necessário o número mínimo de 02 (dois) brigadistas.'],
  },
  {
    ate10: 0.5,
    acima10: 0.2,
    exigido: 'Básico',
    recomendado: '50% Básico, 50% Intermediário',
    descricao: ['Será necessário o número mínimo de 02 (dois) brigadistas.'],
  },
  {
    ate10: 1,
    acima10: 1,
    exigido: 'Básico',
    recomendado: 'Básico',
  },
  {
    ate10: 1,
    acima10: 1,
    exigido: 'Básico',
    recomendado: 'Avançado',
  },
  {
    ate10: 1,
    acima10: 1,
    exigido: 'Básico',
    recomendado: 'Avançado',
  },
  {
    ate10: 0,
    acima10: 0,
    exigido: 'Isento',
    recomendado: 'Isento',
  },
  {
    ate10: 0.6,
    acima10: 0.1,
    exigido: 'Básico',
    recomendado: 'Avançado',
  },
  {
    ate10: 1,
    acima10: 1,
    exigido: 'Básico',
    recomendado: 'Avançado',
  },
  {
    ate10: 0.3,
    acima10: 0.1,
    exigido: 'Básico',
    recomendado: 'Básico',
  },
  {
    ate10: 0.5,
    acima10: 0.2,
    exigido: 'Básico',
    recomendado: 'Intermediário',
  },
  {
    ate10: 0.3,
    acima10: 0.1,
    exigido: 'Básico',
    recomendado: 'Básico',
  },
  {
    ate10: 0.4,
    acima10: 0.15,
    exigido: 'Básico',
    recomendado: 'Básico',
  },
  {
    ate10: 0,
    acima10: 0,
    exigido: 'Isento',
    recomendado: 'Isento',
  },
];

const TabelaBrigada = () => {
  return {tabelaBrigada }
}

export default TabelaBrigada
