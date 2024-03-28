import { useContextProjeto } from '../Context/contextProjeto';
import ListaMedidas from '../../Bases/GerenciarMedidas/listaMedidas';
import { medidasdeSegurancaMinimas } from '../../Bases/GerenciarMedidas/medidasMinimas';

interface pageProps {
  isActive: boolean;
  onshow: (index: number) => void;
}

const MedidasSeguranca = ({ isActive, onshow }: pageProps) => {

  const { allDataBuilding: {regioes} } = useContextProjeto();
  const medidas = medidasdeSegurancaMinimas(regioes);
  
  if (isActive)
    return (
      <div className="d-flex flex-column">
        <div className="mb-4">
          <h4 className="text-primary">Medidas de Segurança</h4>
          <span>
            Essas são as medidas de seguranças mínimas para a sua edificação.
          </span>
        </div>
        <div className="flex-grow-1">
          {medidas && <ListaMedidas medidas={medidas[0]} onshow={() => onshow(5)} />}
        </div>
      </div>
    );
  return null;
};

export default MedidasSeguranca;
