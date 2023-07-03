const medidas = [
  'Acesso de viaturas',
  'Segurança Estrutural contra Incêndio',
  'Compartimentação Vertical',
  'Saídas de Emergencia',
  'Brigada de Incêndio',
  'Iluminação de Emergência',
  'Alarme de Incêndio',
  'Sinalização de Emergência',
  'Extintores',
  'Hidrantes e Mangotinhos',
  'Controle de Materiais de Acabamento e de Revestimento',
];

interface a1Props {
  altura: string;
  area: string;
  cargaIncendio: number;
  isolamento: number;
  construcao: string
}

const A3 = ({ altura, area, cargaIncendio, isolamento, construcao }: a1Props) => {
  const userAltura = Number(altura);
  const userArea = Number(area);
 

  function edificacaoExistente(medidas: string[]){
    if(construcao === 'Existente'){
      const final =  medidas.filter(item => item !== 'Acesso de viaturas' 
      ).filter(item1 => item1 !== 'Segurança Estrutural contra Incêndio').filter(item2 => item2 !== 'Compartimentação Horizontal').filter(item3 => item3 !== 'Compartimentação Vertical').filter(item4 => item4 !== 'Chuveiros Automáticos').filter(item5 => item5 !== 'Controle de Fumaça')
      return final
    } 
    return medidas
  }
  function showMedidas() {
    if (
      userAltura <= 12 &&
      userArea <= 1200 
      
    ) {
      const medFinal = [
        'Acesso de viaturas (nos condomínios com arruamento interno, independente da área)',
        'Saídas de Emergencia',
        'Iluminação de Emergência',
        'Sinalização de Emergência',
        'Extintores',
        'Controle de Materiais de Acabamento e de Revestimento (nos salões de festas e auditórios com previsão de população superior a 200 pessoas)',
      ];
      return (edificacaoExistente(medFinal));
    }

    if (userAltura <= 12 && userArea > 1200  ) {
      const medFinal = [
        'Acesso de viaturas (nos condomínios com arruamento interno, independente da área)',
        'Saídas de Emergencia',
        'Iluminação de Emergência',
        'Sinalização de Emergência',
        'Extintores',
        'Hidrantes e Mangotinhos',
        'Controle de Materiais de Acabamento e de Revestimento (nos salões de festas e auditórios com previsão de população superior a 200 pessoas)',
      ];
      return (edificacaoExistente(medFinal));
    }
    if (userAltura > 12 && userAltura <= 30) {
      const medFinal = [
        'Acesso de viaturas',
        'Segurança Estrutural contra Incêndio',
        'Saídas de Emergencia',
        'Iluminação de Emergência',
        'Sinalização de Emergência',
        'Extintores',
        'Hidrantes e Mangotinhos',
        'Controle de Materiais de Acabamento e de Revestimento',
      ];
      return (edificacaoExistente(medFinal));
    }
    if (userAltura > 30 && userAltura <= 54) {
      const medFinal = [
        'Acesso de viaturas',
        'Segurança Estrutural contra Incêndio',
        'Compartimentação Vertical',
        'Saídas de Emergencia',
        'Iluminação de Emergência',
        'Alarme de Incêndio',
        'Sinalização de Emergência',
        'Extintores',
        'Hidrantes e Mangotinhos',
        'Controle de Materiais de Acabamento e de Revestimento',
      ];
      return (edificacaoExistente(medFinal));
    }
    if (userAltura > 54) {
      const medFinal = [
        'Acesso de viaturas',
        'Segurança Estrutural contra Incêndio',
        'Compartimentação Vertical',
        'Saídas de Emergencia',
        'Brigada de Incêndio',
        'Iluminação de Emergência',
        'Alarme de Incêndio',
        'Sinalização de Emergência',
        'Extintores',
        'Hidrantes e Mangotinhos',
        'Controle de Materiais de Acabamento e de Revestimento',
      ];
      return (edificacaoExistente(medFinal));
    }
  }
  return showMedidas();
};

export default A3;