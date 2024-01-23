import Pavimento from './SaidadeEmergencia/pavimento';
import Brigada from './Brigada/Brigada';
import CompartimentacaoMaxima from './Compartimentacao/compartimentacaoMaxima';
import Extintor from './extintor';
import ReservaTecnica from './ReservaTecnica/reserva';
import Isolamento from './Isolamento/Isolamento';
import Numerodesaidas from './NumeroSaidas/numerodesaidas';

type MedidasProps = {
  medida?: string
  altura?: number,
  ocupacoes?: number[][] | undefined,
  divisao?: number[] | undefined,
  areaTotal?: number

}

const Saidas = ({altura, ocupacoes, divisao}: MedidasProps) => {
  return(
    <>
      <Pavimento/>
      <Numerodesaidas altura={+altura} ocupacoes={ocupacoes} divisao={divisao}/>
    </>
  )
}

export const medidasSeguranca = ({medida, altura, ocupacoes, divisao, areaTotal}: MedidasProps) => {
  switch (medida) {
    case 'Acesso de viaturas':
      return 'Acesso de Viatura';
    case 'Segurança Estrutural contra Incêndio':
      return 'Segurança Estrutural contra Incêndio';
    case 'Compartimentação Vertical':
      return <CompartimentacaoMaxima />;
    case 'Saídas de Emergencia':
      return <Saidas altura={altura} ocupacoes={ocupacoes} divisao={divisao}/>;
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
      return <ReservaTecnica area={areaTotal.toString()} ocupacoes={ocupacoes} divisao={divisao}/>;
    case 'Controle de Materiais de Acabamento e de Revestimento':
      return 'Controle de Materiais de Acabamento e de Revestimento';
    case 'Separação entre Edificações': 
      return <Isolamento/>
    default: 'Medida de Segurança não encontrada'
  }
};

