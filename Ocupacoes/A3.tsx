import { cleanNumber } from "../Bases/formatarNumero";
import { edificacaoExistente } from "../Bases/edificacaoExistente";
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
  const userArea = cleanNumber(area)/100;
  
  function showMedidas() {
    if (
      userAltura <= 12 &&
      userArea <= 1200 
      
    ) {
      const medFinal = [
        'Saídas de Emergencia',
        'Iluminação de Emergência',
        'Sinalização de Emergência',
        'Extintores',
      ];
      return (edificacaoExistente(medFinal, construcao));
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
      return (edificacaoExistente(medFinal, construcao));
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
      return (edificacaoExistente(medFinal, construcao));
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
      return (edificacaoExistente(medFinal, construcao));
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
      return (edificacaoExistente(medFinal, construcao));
    }
  }
  return showMedidas();
};

export default A3;