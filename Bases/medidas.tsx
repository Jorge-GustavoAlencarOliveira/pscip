import Pavimento from './SaidadeEmergencia/pavimento';
import Brigada from './Brigada/Brigada';
import CompartimentacaoMaxima from './Compartimentacao/compartimentacaoMaxima';
import Extintor from './extintor';
import ReservaTecnica from './ReservaTecnica/reserva';
import Isolamento from './Isolamento/Isolamento';

export const medidasSeguranca = (medida: string) => {
  switch (medida) {
    case 'Acesso de viaturas':
      return 'Acesso de Viatura';
    case 'Segurança Estrutural contra Incêndio':
      return 'Segurança Estrutural contra Incêndio';
    case 'Compartimentação Vertical':
      return <CompartimentacaoMaxima />;
    case 'Saídas de Emergencia':
      return <Pavimento />;
    case 'Brigada de Incêndio':
      return <Brigada />;
    case 'Iluminação de Emergência':
      return 'Iluminação de Emergência';
    case 'Alarme de Incêndio':
      return 'Alarme de Incêndio';
    case 'Sinalização de Emergência':
      return 'Sinalização de Emergência';
    case 'Extintores':
      return 'Extintor';
    case 'Hidrantes e Mangotinhos':
      return 'Hidrantes e Mangotinhos';
    case 'Controle de Materiais de Acabamento e de Revestimento':
      return 'Controle de Materiais de Acabamento e de Revestimento';
    default: 'Medida de Segurança não encontrada'
  }
};

