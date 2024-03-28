import React from 'react';
import Cnae from '../../Bases/NiveldeRisco/cnae';
import { useNiveldeRisco } from '../../Bases/NiveldeRisco/useNiveldeRisco';
import ModalCenter from '../../Components/Modal/Modal';
import ButtonNext from '../Navbar/buttonNext';
import { useContextProjeto } from '../Context/contextProjeto';
import { setupAPIClient } from '@/services/api';
import { ButtonUpdate } from '../../Components/UI/buttonUpdate';
import {cleanNumberInteiro } from '../../Bases/formatarNumero';

interface pageProps {
  isActive: boolean;
  onshow: (index: number) => void;
}

const NivelDeRisco = ({ isActive, onshow }: pageProps) => {
  const { addAllDataBuilding, allDataBuilding: {niveldeRisco, regioes}, project_id, action } =
    useContextProjeto();
  const { niveldeRiscoChecked } = useNiveldeRisco();
  const [showModal, setShowModal] = React.useState(false);

  const [niveldeRiscoDados, setNiveldeRiscoDados] = React.useState({
    area: '',
    patrimonioHistorico:
      niveldeRisco?.props?.patrimonioHistorico || false,
    alturaPavimento: false,
    maisdeCem: niveldeRisco?.props?.maisdeCem || false,
    subsolo: niveldeRisco?.props?.subsolo || false,
    liquidoCombustivel:
      niveldeRisco?.props?.liquidoCombustivel || false,
    gasGLP: niveldeRisco?.props?.gasGLP || false,
    empresa: niveldeRisco?.props?.empresa || false,
  });

  function definedArea(area: number) {
    if (area <= 200) {
      return setNiveldeRiscoDados((item) => ({
        ...item,
        area: 'menos que 200',
      }));
    } 
    if ((area > 200) && (area <= 930)) {
      return setNiveldeRiscoDados((item) => ({
        ...item,
        area: 'entre 200 e 930',
      }));
    } 
    if (area > 930) {
      return setNiveldeRiscoDados((item) => ({ ...item, area: 'mais de 930' }));
    }
    else return console.log('dado incorreto');
  }

  function definedAlturaPavimento(pavimentos: number, altura: number) {
    if (pavimentos > 3 || altura > 12) {
      return setNiveldeRiscoDados((item) => ({
        ...item,
        alturaPavimento: true,
      }));
    } else
      return setNiveldeRiscoDados((item) => ({
        ...item,
        alturaPavimento: false,
      }));
  }

  React.useEffect(() => {
    if (regioes[0]?.dados[0]) {
      const { areaTotal, pavimentos, altura } =
        regioes[0].dados[0];
      definedAlturaPavimento(
        cleanNumberInteiro(pavimentos),
        cleanNumberInteiro(altura),
      );
      definedArea(cleanNumberInteiro(areaTotal.toString()));
    }
  }, [, addAllDataBuilding]);

  async function updateNiveldeRisco() {
    try {
      const api = setupAPIClient();
      await api.put('/project/nivelrisco', {
        id: project_id,
        nivelRisco: {
          nivel: niveldeRiscoChecked(niveldeRiscoDados),
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
            checked={niveldeRiscoDados?.area === 'menos que 200'}
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
            checked={niveldeRiscoDados?.area === 'entre 200 e 930'}
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
            checked={niveldeRiscoDados?.area === 'mais de 930'}
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
            onChange={({ target }) =>
              setNiveldeRiscoDados((item) => ({
                ...item,
                patrimonioHistorico: target.checked,
              }))
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
            checked={niveldeRiscoDados?.alturaPavimento}
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
            onChange={({ target }) =>
              setNiveldeRiscoDados((item) => ({
                ...item,
                maisdeCem: target.checked,
              }))
            }
            checked={niveldeRiscoDados?.maisdeCem}
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
            onChange={({ target }) =>
              setNiveldeRiscoDados((item) => ({
                ...item,
                subsolo: target.checked,
              }))
            }
            checked={niveldeRiscoDados?.subsolo}
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
            onChange={({ target }) =>
              setNiveldeRiscoDados((item) => ({
                ...item,
                liquidoCombustivel: target.checked,
              }))
            }
            checked={niveldeRiscoDados?.liquidoCombustivel}
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
            onChange={({ target }) =>
              setNiveldeRiscoDados((item) => ({
                ...item,
                gasGLP: target.checked,
              }))
            }
            checked={niveldeRiscoDados?.gasGLP}
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
            onChange={({ target }) =>
              setNiveldeRiscoDados((item) => ({
                ...item,
                empresa: target.checked,
              }))
            }
            checked={niveldeRiscoDados?.empresa}
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
                niveldeRiscoChecked(niveldeRiscoDados) === 'Nível de Risco I'
                  ? '#65ad45'
                  : niveldeRiscoChecked(niveldeRiscoDados) ===
                    'Nível de Risco II'
                  ? '#c9a916'
                  : '#b02712'
              }`,
            }}
          >
            {niveldeRiscoChecked(niveldeRiscoDados)}
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
          {action === 'true' ? (
            <ButtonUpdate handleClick={updateNiveldeRisco}>
              Salvar alterações
            </ButtonUpdate>
          ) : (
            <ButtonNext
              onclick={() => {
                addAllDataBuilding('niveldeRisco', {
                  nivel: niveldeRiscoChecked(niveldeRiscoDados),
                  props: niveldeRiscoDados,
                });
                updateNiveldeRisco();
                onshow(4);
              }}
            />
          )}
        </div>
      </>
    );
  }
  return null;
};

export default NivelDeRisco;
