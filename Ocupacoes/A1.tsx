import React from 'react';
import Altura from '../Bases/altura';
import Area from '../Bases/area';
import Cargaincendio from '../Bases/cargaincendio';
import ReservaTecnica from '../Bases/reserva';
import Extintor from '../Bases/extintor';
import Brigada from '../Bases/brigada';

interface a1Props {
  index: string;
  area: number;
  altura: number;
}

function numeroSaidas(index: string, altura: number) {
  if (index === 'A-2') {
    if (altura <= 12) {
      return 'Número de saídas: 1, Tipo de Escada: NE';
    }
    if (altura > 12 && altura <= 30) {
      return 'Número de saídas: 1, Tipo de Escada: EP';
    }
    if (altura > 30) {
      return 'Número de saídas: 1, Tipo de Escada: PF';
    }
  }
  if (index === 'A-3') {
    if (altura <= 12) {
      return 'Número de saídas: 1, Tipo de Escada: NE';
    }
    if (altura > 12 && altura <= 30) {
      return 'Número de saídas: 1, Tipo de Escada: EP';
    }
    if (altura > 30) {
      return 'Número de saídas: 2, Tipo de Escada: PF';
    }
  }
}

const medidas = [
  'Acesso de viaturas',
  'Segurança Estrutural contra Incêndio',
  'Compartimentação Vertical',
  'Saídas de Emergência',
  'Brigada de Incêndio',
  'Iluminação de Emergência',
  'Alarme de Incêndio',
  'Sinalização de Emergência',
  'Extintores',
  'Hidrantes e Mangotinhos',
  'Controle de Materiais de Acabamento e de Revestimento',
];

const A1 = ({ index, area, altura }: a1Props) => {
  const valorAltura = Altura(altura);
  const valorArea = Area(index, area);
  const [medFinal, setMediaFinal] = React.useState<string[]>([]);
  const [cond, setCond] = React.useState<string>('');
  const [salao, setSalao] = React.useState<string>('');
  const [enable, setEnable] = React.useState<boolean>(true);
  const [saidas, setSaidas] = React.useState<string | undefined>('');

  React.useEffect(() => {
    if (area > 1200 || altura > 12) {
      setEnable(false);
    }
  }, []);

  React.useEffect(() => {
    if (cond !== '' || salao != '') {
      setEnable(false);
    }
  }, [cond, salao]);

  function showMedidas() {
    const saida = numeroSaidas(index, altura);
    setSaidas(saida);

    if (valorAltura === 'baixo' && valorArea === 'pts') {
      const medFinal = [
        'Saídas de Emergência',
        'Iluminação de Emergência',
        'Sinalização de Emergência',
        'Extintores',
      ];
      setMediaFinal(medFinal);
    }
    if (valorAltura === 'baixo' && valorArea === 'pts' && cond === 'sim') {
      const medFinal = [
        'Acesso de viaturas',
        'Saídas de Emergência',
        'Iluminação de Emergência',
        'Sinalização de Emergência',
        'Extintores',
      ];
      setMediaFinal(medFinal);
    }
    if (valorAltura === 'baixo' && valorArea === 'pts' && salao === 'sim') {
      const medFinal = [
        'Saídas de Emergência',
        'Iluminação de Emergência',
        'Sinalização de Emergência',
        'Extintores',
        'Controle de Materiais de Acabamento e de Revestimento',
      ];
      setMediaFinal(medFinal);
    }
    if (
      valorAltura === 'baixo' &&
      valorArea === 'pts' &&
      salao === 'sim' &&
      cond === 'sim'
    ) {
      const medFinal = [
        'Acesso de viaturas',
        'Saídas de Emergência',
        'Iluminação de Emergência',
        'Sinalização de Emergência',
        'Extintores',
        'Controle de Materiais de Acabamento e de Revestimento (nos salões de festas e auditórios com previsão de população superior a 200 pessoas)',
      ];
      setMediaFinal(medFinal);
    }
    if (valorAltura === 'baixo' && valorArea === 'pt') {
      const medFinal = [
        'Acesso de viaturas',
        'Saídas de Emergência',
        'Iluminação de Emergência',
        'Sinalização de Emergência',
        'Extintores',
        'Hidrantes e Mangotinhos',
      ];
      setMediaFinal(medFinal);
    }
    if (valorAltura === 'baixo' && valorArea === 'pt' && salao === 'sim') {
      const medFinal = [
        'Acesso de viaturas',
        'Saídas de Emergência',
        'Iluminação de Emergência',
        'Sinalização de Emergência',
        'Extintores',
        'Hidrantes e Mangotinhos',
        'Controle de Materiais de Acabamento e de Revestimento (nos salões de festas e auditórios com previsão de população superior a 200 pessoas)',
      ];
      setMediaFinal(medFinal);
    }
    if (valorAltura === 'media') {
      const medFinal = [
        'Acesso de viaturas',
        'Segurança Estrutural contra Incêndio',
        'Saídas de Emergência',
        'Iluminação de Emergência',
        'Sinalização de Emergência',
        'Extintores',
        'Hidrantes e Mangotinhos',
        'Controle de Materiais de Acabamento e de Revestimento',
      ];
      setMediaFinal(medFinal);
    }
    if (valorAltura === 'alta') {
      const medFinal = [
        'Acesso de viaturas',
        'Segurança Estrutural contra Incêndio',
        'Compartimentação Vertical',
        'Saídas de Emergência',
        'Iluminação de Emergência',
        'Alarme de Incêndio',
        'Sinalização de Emergência',
        'Extintores',
        'Hidrantes e Mangotinhos',
        'Controle de Materiais de Acabamento e de Revestimento',
      ];
      setMediaFinal(medFinal);
    }
    if (valorAltura === 'muito') {
      const medFinal = [
        'Acesso de viaturas',
        'Segurança Estrutural contra Incêndio',
        'Compartimentação Vertical',
        'Saídas de Emergência',
        'Brigada de Incêndio',
        'Iluminação de Emergência',
        'Alarme de Incêndio',
        'Sinalização de Emergência',
        'Extintores',
        'Hidrantes e Mangotinhos',
        'Controle de Materiais de Acabamento e de Revestimento',
      ];
      setMediaFinal(medFinal);
    }
  }

  return (
    <div>
      {altura <= 12 && area <= 1200 && (
        <div>
          <span>Trata-se de condomínio com arruamento interno?</span>
          <input
            type="radio"
            name="condominio"
            id="simPossui"
            value="sim"
            checked={cond === 'sim'}
            onChange={({ target }) => setCond(target.value)}
          />
          <label htmlFor="simPossui">Sim</label>
          <input
            type="radio"
            name="condominio"
            id="naoPossui"
            value="nao"
            checked={cond === 'nao'}
            onChange={({ target }) => setCond(target.value)}
            required
          />
          <label htmlFor="naoPossui">Não</label>
        </div>
      )}
      {altura <= 12 && (
        <div>
          <span>
            Possui salões de festas e auditórios com previsão de população
            superior a 200 pessoas?
          </span>
          <input
            type="radio"
            name="salao"
            id="simPossuiS"
            value="sim"
            checked={salao === 'sim'}
            onChange={({ target }) => setSalao(target.value)}
          />
          <label htmlFor="simPossuiS">Sim</label>
          <input
            type="radio"
            name="salao"
            id="naoPossuiS"
            value="nao"
            checked={salao === 'nao'}
            onChange={({ target }) => setSalao(target.value)}
          />
          <label htmlFor="naoPossuiS">Não</label>
        </div>
      )}
      <button disabled={enable} onClick={showMedidas}>
        Mostrar medidas
      </button>
      {medFinal.length != 0 && (
        <div>
          <h1>Medidas de Segurança</h1>
          <ul>
            {medFinal.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
          <h1>Número de saídas</h1>
          <p>{saidas}</p>
          <Cargaincendio index={index} />
          <Extintor index={index} />
          {altura > 12 || area > 1200 ? (
            <ReservaTecnica index={index} area={area} />
          ) : null}
          {altura > 54 && <Brigada index={index} />}
        </div>
      )}
    </div>
  );
};

export default A1;
