import React from 'react';
import Cnae from '../../Bases/NiveldeRisco/cnae';
import { useNiveldeRisco } from '../../Bases/NiveldeRisco/useNiveldeRisco';
import ModalCenter from '../../Components/Modal/Modal';
import ButtonNext from '../Navbar/buttonNext';
import { useContextProjeto } from '../Context/contextProjeto';
import { cleanNumberInteiro } from '../../Bases/formatarNumero';
import { setupAPIClient } from '@/services/api';

interface pageProps {
  isActive: boolean;
  onshow: (index: number) => void;
}

const NivelDeRisco = ({ isActive, onshow }: pageProps) => {
  const { regioes, addAllDataBuilding, nivelRisco, project_id } =
    useContextProjeto();
  const newNiveldeRisco = { ...nivelRisco?.props };
  const {
    setInformation,
    niveldeRiscoChecked,
    niveldeRiscoDados,
    nivelderisco,
  } = useNiveldeRisco({lista: newNiveldeRisco});
  const [showModal, setShowModal] = React.useState(false);
  const niveldeRisco = niveldeRiscoChecked(niveldeRiscoDados);

  React.useEffect(() => {
    if (regioes[0]?.dados[0]) {
      const { areaTotal, pavimentos, altura } = regioes[0].dados[0];
      nivelderisco.area(cleanNumberInteiro(areaTotal.toString()));
      nivelderisco.alturaPavimento(+pavimentos, altura);
    }
  }, [, regioes]);

  async function updateNiveldeRisco() {
    try {
      const api = setupAPIClient()
      await api.put('/project/nivelrisco', {
        id: project_id,
        nivelRisco: {
          nivel: niveldeRisco,
          props: niveldeRiscoDados,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  if (isActive) {
    return (
      <>
        <div className="mb-4">
          <h4 className="text-primary">Classificação do nível de risco</h4>
          <span>
            Selecione as opções que correspondam as características da
            edificação.
          </span>
        </div>
        <div className="d-flex gap-2 align-items-center mb-2 cursor-pointer">
          <input
            type="checkbox"
            name="area"
            id="area1"
            checked={niveldeRiscoDados.area === 'menos que 200'}
            readOnly
          />
          <label htmlFor="area1">
            Edificação ou espaço destinado ao uso coletivo com área construída
            igual ou inferior a 200 m²
          </label>
        </div>
        <div className="d-flex gap-2 align-items-center mb-2 cursor-pointer">
          <input
            type="checkbox"
            id="area2"
            checked={niveldeRiscoDados.area === 'entre 200 e 930'}
            readOnly
          />
          <label htmlFor="area2">
            Edificação ou espaço destinado ao uso coletivo com área construída
            superior a 200 e igual ou inferior 930 m²
          </label>
        </div>
        <div className="d-flex gap-2 align-items-center mb-2 cursor-pointer">
          <input
            type="checkbox"
            id="area3"
            checked={niveldeRiscoDados.area === 'mais de 930'}
            readOnly
          />
          <label htmlFor="area3">
            Edificação ou espaço destinado ao uso coletivo com área construída
            superior a 930 m²
          </label>
        </div>
        <div className="d-flex gap-2 align-items-center mb-2 cursor-pointer">
          <input
            type="checkbox"
            id="patrimonioHistorico"
            checked={niveldeRiscoDados.patrimonioHistorico}
            onChange={({ target }) =>
              setInformation('patrimonioHistorico', target.checked)
            }
          />
          <label htmlFor="patrimonioHistorico">
            Edificação ou espaço destinado ao uso coletivo que componham o
            Patrimônio Histórico Cultural
          </label>
        </div>
        <div className="d-flex gap-2 align-items-center mb-2 cursor-pointer">
          <input
            type="checkbox"
            id="alturaPavimento"
            checked={niveldeRiscoDados.alturaPavimento}
            readOnly
          />
          <label htmlFor="alturaPavimento">
            Edificação com mais de 03 (três) pavimentos* ou altura superior a 12
            metros
          </label>
        </div>
        <div className="d-flex gap-2 align-items-center mb-2 cursor-pointer">
          <input
            type="checkbox"
            id="maisdeCem"
            checked={niveldeRiscoDados.maisdeCem}
            onChange={({ target }) =>
              setInformation('maisdeCem', target.checked)
            }
          />
          <label htmlFor="maisdeCem">
            Edificação ou espaço destinado ao uso coletivo com lotação superior
            a 100 (cem) pessoas
          </label>
        </div>
        <div className="d-flex gap-2 align-items-center mb-2 cursor-pointer">
          <input
            type="checkbox"
            id="subsolo"
            checked={niveldeRiscoDados.subsolo}
            onChange={({ target }) => setInformation('subsolo', target.checked)}
          />
          <label htmlFor="subsolo">
            Edificação em que o subsolo possua qualquer atividade ou uso
            distinto de estacionamento
          </label>
        </div>
        <div className="d-flex gap-2 align-items-center mb-2 cursor-pointer">
          <input
            type="checkbox"
            id="liquidoCombustivel"
            checked={niveldeRiscoDados.liquidoCombustivel}
            onChange={({ target }) =>
              setInformation('liquidoCombustivel', target.checked)
            }
          />
          <label htmlFor="liquidoCombustivel">
            Armazenamento de líquido combustível ou inflamável, ainda que
            fracionado, em volume superior a 1000 L
          </label>
        </div>
        <div className="d-flex gap-2 align-items-center mb-2 cursor-pointer">
          <input
            type="checkbox"
            id="gasGLP"
            checked={niveldeRiscoDados.gasGLP}
            onChange={({ target }) => setInformation('gasGLP', target.checked)}
          />
          <label htmlFor="gasGLP">
            Armazenamento de gás liquefeito de petróleo (GLP) em quantidade
            superior a 190 Kg
          </label>
        </div>
        <div className="d-flex gap-2 align-items-center mb-2 cursor-pointer">
          <input
            type="checkbox"
            id="empresa"
            checked={niveldeRiscoDados.empresa}
            onChange={({ target }) => setInformation('empresa', target.checked)}
          />
          <label htmlFor="empresa">
            Empresa cuja atividade(s) econômica(s), principal ou secundária,
            conste na Tabela C.2 da IT 01
          </label>
          <button
            className="btn btn-secondary"
            onClick={() => setShowModal(true)}
          >
            Consultar CNAE
          </button>
        </div>
        <div>
          <span>A edificação é: </span>
          <span
            style={{
              color: `${
                niveldeRisco === 'Nível de Risco I'
                  ? '#65ad45'
                  : niveldeRisco === 'Nível de Risco II'
                  ? '#c9a916'
                  : '#b02712'
              }`,
            }}
          >
            {niveldeRisco}
          </span>
        </div>
        <ModalCenter
          show={showModal}
          size="lg"
          onHide={() => setShowModal(false)}
          header="Digite o número do CNAE ou descrição da atividade"
        >
          <Cnae />
        </ModalCenter>
        <div className="mt-4">
          <ButtonNext
            onclick={() => {
              addAllDataBuilding('niveldeRisco', {
                nivel: niveldeRisco,
                props: niveldeRiscoDados,
              });
              updateNiveldeRisco();
              onshow(4);
            }}
          />
        </div>
      </>
    );
  }
  return null;
};

export default NivelDeRisco;
