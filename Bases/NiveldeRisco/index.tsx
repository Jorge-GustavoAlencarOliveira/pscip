import React from 'react';
import Cnae from './cnae';
import { useNiveldeRisco } from './useNiveldeRisco';
import ModalCenter from '../../Components/Modal/Modal';
import { unknown } from 'zod';
import axios from 'axios';

const NivelDeRisco = () => {

  const { setInformation, niveldeRiscoChecked, niveldeRiscoDados} = useNiveldeRisco();
  const [showModal, setShowModal] = React.useState(false);
  const niveldeRisco = niveldeRiscoChecked(niveldeRiscoDados);

  return (
    <>
      <h2>Classificação do nível de risco</h2>
      <div className="d-flex gap-2 align-items-center mb-2 cursor-pointer">
        <input
          type="radio"
          name="area"
          id="area1"
          value="menos que 200"
          checked={niveldeRiscoDados.area === 'menos que 200'}
          onChange={({ target }) => setInformation('area', target.value)}
        />
        <label htmlFor="area1">
          Edificação ou espaço destinado ao uso coletivo com área construída
          igual ou inferior a 200 m²
        </label>
      </div>
      <div className="d-flex gap-2 align-items-center mb-2 cursor-pointer">
        <input
          type="radio"
          value="entre 200 e 930"
          id="area2"
          checked={niveldeRiscoDados.area === 'entre 200 e 930'}
          onChange={({ target }) => setInformation('area', target.value)}
        />
        <label htmlFor="area2">
          Edificação ou espaço destinado ao uso coletivo com área construída
          superior a 200 e igual ou inferior 930 m²
        </label>
      </div>
      <div className="d-flex gap-2 align-items-center mb-2 cursor-pointer">
        <input
          type="radio"
          value="mais de 930"
          id="area3"
          checked={niveldeRiscoDados.area === 'mais de 930'}
          onChange={({ target }) => setInformation('area', target.value)}
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
          onChange={({ target }) =>
            setInformation('alturaPavimento', target.checked)
          }
        />
        <label htmlFor="alturaPavimento">
          Edificação com mais de 03 (três) pavimentos* ou altura superior a 12 metros
        </label>
      </div>
      <div className="d-flex gap-2 align-items-center mb-2 cursor-pointer">
        <input
          type="checkbox"
          id="maisdeCem"
          checked={niveldeRiscoDados.maisdeCem}
          onChange={({ target }) => setInformation('maisdeCem', target.checked)}
        />
        <label htmlFor="maisdeCem">
          Edificação ou espaço destinado ao uso coletivo com lotação superior a
          100 (cem) pessoas
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
          Edificação em que o subsolo possua qualquer atividade ou uso distinto
          de estacionamento
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
        <span style={{color:`${niveldeRisco === "Nível de Risco I" ? '#65ad45' : (niveldeRisco === 'Nível de Risco II' ? '#c9a916' : '#b02712')}`}}>
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
    </>
  );
};

export default NivelDeRisco;
