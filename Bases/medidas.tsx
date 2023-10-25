import Pavimento from './SaidadeEmergencia/pavimento';
import Brigada from './Brigada/Brigada';
import CompartimentacaoMaxima from './Compartimentacao/compartimentacaoMaxima';
import Extintor from './extintor';
import ReservaTecnica from './ReservaTecnica/reserva';
import Isolamento from './Isolamento/Isolamento';
import { dadosProps } from '../Components/Hooks/useDados';
import Numerodesaidas from './NumeroSaidas/numerodesaidas';

type MedidasProps = {
  medida?: string
  dados: dadosProps,
  ocupacoes: number[][] | undefined,
  divisao: number[] | undefined,

}

const Saidas = ({dados, ocupacoes, divisao}: MedidasProps) => {
  return(
    <>
      <Pavimento/>
      <Numerodesaidas altura={dados.altura} ocupacoes={ocupacoes} divisao={divisao}/>
    </>
  )
}

export const medidasSeguranca = ({medida, dados, ocupacoes, divisao}: MedidasProps) => {
  switch (medida) {
    case 'Acesso de viaturas':
      return 'Acesso de Viatura';
    case 'Segurança Estrutural contra Incêndio':
      return 'Segurança Estrutural contra Incêndio';
    case 'Compartimentação Vertical':
      return <CompartimentacaoMaxima />;
    case 'Saídas de Emergencia':
      return <Saidas dados={dados} ocupacoes={ocupacoes} divisao={divisao}/>;
    case 'Brigada de Incêndio':
      return <Brigada />;
    case 'Iluminação de Emergência':
      return 'Iluminação de Emergência';
    case 'Alarme de Incêndio':
      return 'Alarme de Incêndio';
    case 'Sinalização de Emergência':
      return 'Sinalização de Emergência';
    case 'Extintores':
      return <Extintor ocupacoes={ocupacoes} divisao={divisao}/>;
    case 'Hidrantes e Mangotinhos':
      return <ReservaTecnica area={dados.areaTotal.toString()} ocupacoes={ocupacoes} divisao={divisao}/>;
    case 'Controle de Materiais de Acabamento e de Revestimento':
      return 'Controle de Materiais de Acabamento e de Revestimento';
    default: 'Medida de Segurança não encontrada'
  }
};

