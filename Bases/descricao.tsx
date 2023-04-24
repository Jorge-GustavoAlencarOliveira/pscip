const descricao = [
  [
    [
      {
        divisao: 'A-1',
        descricao: 'Casas térreas ou assobradadas (isoladas e não isoladas)',
        cargaincendio: 300,
      },
      {
        divisao: 'A-1',
        descricao: 'Condomínios horizontais',
        cargaincendio: 300,
      },
      {
        divisao: 'A-1',
        descricao: 'Residências terapêuticas',
        cargaincendio: 300,
      },
    ],
    [
      {
        divisao: 'A-2',
        descricao: 'Edifícios de apartamentos',
        cargaincendio: 300,
      },
    ],
    [
      { divisao: 'A-3', descricao: 'Alojamento', cargaincendio: 300 },
      { divisao: 'A-3', descricao: 'Convento', cargaincendio: 300 },
      { divisao: 'A-3', descricao: 'Internato', cargaincendio: 300 },
      { divisao: 'A-3', descricao: 'Mosteiro', cargaincendio: 300 },
      { divisao: 'A-3', descricao: 'Pensionato', cargaincendio: 300 },
      {
        divisao: 'A-3',
        descricao:
          'Residência geriátrica (com capacidade máxima de 16 leitos), sem acompanhamento médico',
        cargaincendio: 300,
      },
    ],
  ],
];
const Descricao = () => {
  return { descricao };
};

export default Descricao;
