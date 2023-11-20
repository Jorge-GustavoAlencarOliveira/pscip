const medidas = [
  ['Saídas de Emergencia', 'Conforme IT08'],
  ['Iluminação de Emergência', 'Conforme NBR 10.898:2013'],
  ['Sinalização de Emergência', 'Conforme IT15'],
  ['Extintores', 'Conforme IT16'],
  ['Acesso de viaturas', ''],
  ['Segurança Estrutural contra Incêndio', ''],
  ['Compartimentação Vertical', ''],
  ['Compartimentação horizontal', ''],
  ['Separação entre edificações', ''],
  ['Brigada de Incêndio', ''],
  ['Alarme de Incêndio', ''],
  ['Hidrantes e Mangotinhos', ''],
  ['Controle de Materiais de Acabamento e de Revestimento', ''],
  ['Plano de intervenção', ''],
  ['Sistema de detecção de incêndio', ''],
  ['Chuveiros automáticos', ''],
  ['Sistema de resfriamento', ''],
  ['Sistema de proteção por espuma', ''],
  ['Sistema fixo de gases', ''],
  ['Controle de materiais de acabamento e de revestimento', ''],
  ['Controle de fumaça', ''],
];

const normas = ['Decreto nº 43.805/2004','Decreto nº 44.270/2006','Decreto nº 44.746/2008','Decreto nº 47.998/2020'];

const tabelas = ['Tabela 01 da IT 01 10ª Edição',
'Tabela 02 da IT 01 10ª Edição',
'Tabela 03 da IT 01 10ª Edição',
'Tabela 04 da IT 01 10ª Edição',
'Tabela 05 da IT 01 10ª Edição',
'Tabela 06 da IT 01 10ª Edição',
'Tabela 07 da IT 01 10ª Edição',
'Tabela 08 da IT 01 10ª Edição',
'Tabela 09 da IT 01 10ª Edição',
'Tabela 10 da IT 01 10ª Edição',
'Tabela 11 da IT 01 10ª Edição',
'Tabela 12 da IT 01 10ª Edição',
'Tabela 13 da IT 01 10ª Edição',
'Tabela 14 da IT 01 10ª Edição',
'Tabela 15 da IT 01 10ª Edição',
'Tabela 16 da IT 01 10ª Edição',
'Tabela 17 da IT 01 10ª Edição',
'Tabela 18 da IT 01 10ª Edição',
];

const dataconstrucao = ['Existente', 'Construída', 'Nova']

export const TabelasQuadro = () => {
  return {normas, tabelas, medidas, dataconstrucao}
}
