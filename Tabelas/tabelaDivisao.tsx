const divisao = [
  [
    'A-1 Habitação unifamiliar',
    'A-2 Habitação multifamiliar',
    'A-3 Habitação coletiva',
  ],
  ['B-1 Hotel e assemelhado', 'B-2 Hotel residencial'],
  [
    'C-1 Comércio com baixa carga de incêndio',
    'C-2 Comércio com média e alta carga de incêndio',
    'C-3 Centros comerciais de compras (Shopping centers)',
  ],
  [
    'D-1 Local para prestação de serviço profissional ou condução de negócios',
    'D-2 Agência bancária',
    'D-3 Serviço de reparação (exceto os classificados em G-4))',
    'D-4 Laboratório',
  ],
  [
    'E-1 Escola em geral',
    'E-2 Escola especial',
    'E-3 Espaço para cultura física ',
    'E-4 Centro de treinamento profissional',
    'E-5 Pré-escola',
    'E-6 Escola para portadores de deficiências',
  ],
  [
    'F-1 Local onde há objeto de valor inestimável',
    'F-2 Local religioso e velório',
    'F-3 Centro esportivo e de exibição',
    'F-4 Estação e terminal de passageiro',
    'F-5 Arte cênica e auditório',
    'F-6 Casas de show',
    'F-7 Construção provisória e evento temporário',
    'F-8 Local para refeição',
    'F-9 Recreação',
    'F-10 Exposição de objetos e animais',
    'F-11 Clubes sociais e de diversão',
  ],
  [
    'G-1 Estacionamento sem acesso de público e sem abastecimento',
    'G-2 Estacionamento com acesso de público e sem abastecimento',
    'G-3 Local dotado de abastecimento de combustível',
    'G-4 Serviço de conservação, manutenção, garagem e reparos, com ou sem abastecimento ',
    'G-5 Hangares ',
  ],
  [
    'H-1 Hospital veterinário e assemelhados',
    'H-2 Locais onde pessoas requerem cuidados especiais por limitações físicas ou mentais',
    'H-3 Hospital e assemelhado',
    'H-4 Edificações das forças armadas e policiais',
    'H-5 Local onde a liberdade das pessoas sofre restrições',
    'H-6 Clínicas e consultório médico e odontológico',
  ],
  [
    'I-1 Indústria com carga de incêndio até 300MJ/m²',
    'I-2 Indústria com carga de incêndio entre de 301 e 1.200MJ/m²',
    'I-3 Indústria com carga de incêndio superior a 1.200MJ/m2',
  ],
  [
    'J-1 Depósitos de material incombustível',
    'J-2 Depósito com carga de incêndio até 300MJ/m²',
    'J-3 Depósitos com carga de incêndio entre 301 e 1.200MJ/m²',
    'J-4 Depósitos com carga de incêndio superior a 1.200MJ/m²',
  ],
  ['L-1 Comércio', 'L-2 Indústria', 'L-3 Depósito'],
  [
    'M-1 Túnel',
    'M-2 Líquido ou gás inflamável ou combustível',
    'M-3 Central de comunicação e energia',
    'M-4 Canteiro de obras',
    'M-5 Silos',
    'M-6 Terra selvagem',
    'M-7 Pátio de Containers',
    'M-8 Agronegócio',
  ],
];

const TabelaDivisao = () => {
  return {divisao}
}

export default TabelaDivisao
