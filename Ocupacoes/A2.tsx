import React from 'react';
import { DataStorage } from '../dataContext';
import Link from 'next/link';
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
const A1 = () => {
  const { altura, area } = React.useContext(DataStorage);
  const userAltura = Number(altura);
  const userArea = Number(area);
  const [medFinal, setMediaFinal] = React.useState<string[]>([]);
  const [cond, setCond] = React.useState<string>('');
  const [salao, setSalao] = React.useState<string>('');
  const [enable, setEnable] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (userAltura > 12) {
      setEnable(false);
    }
  }, []);

  React.useEffect(() => {
    if(userAltura <= 12 && userArea <= 1200){
      if (cond !== '' && salao != '') {
        setEnable(false);
      }
    }
    if(userAltura <= 12){
      if (salao !== '') {
        setEnable(false);
      }
    }
  }, [cond, salao]);

  function showMedidas() {
    

    if (userAltura <= 12 && userArea <= 1200) {
      const medFinal = [
        'Saídas de Emergencia',
        'Iluminação de Emergência',
        'Sinalização de Emergência',
        'Extintores',
      ];
      setMediaFinal(medFinal);
    }
    if (userAltura <= 12 && userArea <= 1200 && cond === 'sim') {
      const medFinal = [
        'Acesso de viaturas',
        'Saídas de Emergencia',
        'Iluminação de Emergência',
        'Sinalização de Emergência',
        'Extintores',
      ];
      setMediaFinal(medFinal);
    }
    if (
      userAltura <= 12 &&
      userArea <= 1200 &&
      salao === 'sim' &&
      cond === 'nao'
    ) {
      const medFinal = [
        'Saídas de Emergencia',
        'Iluminação de Emergência',
        'Sinalização de Emergência',
        'Extintores',
        'Controle de Materiais de Acabamento e de Revestimento (nos salões de festas e auditórios com previsão de população superior a 200 pessoas)',
      ];
      setMediaFinal(medFinal);
    }
    if (
      userAltura <= 12 &&
      userArea <= 1200 &&
      salao === 'sim' &&
      cond === 'sim'
    ) {
      const medFinal = [
        'Acesso de viaturas',
        'Saídas de Emergencia',
        'Iluminação de Emergência',
        'Sinalização de Emergência',
        'Extintores',
        'Controle de Materiais de Acabamento e de Revestimento (nos salões de festas e auditórios com previsão de população superior a 200 pessoas)',
      ];
      setMediaFinal(medFinal);
    }
    if (userAltura <= 12 && userArea > 1200) {
      const medFinal = [
        'Acesso de viaturas',
        'Saídas de Emergencia',
        'Iluminação de Emergência',
        'Sinalização de Emergência',
        'Extintores',
        'Hidrantes e Mangotinhos',
      ];
      setMediaFinal(medFinal);
    }
    if (userAltura <= 12 && userArea > 1200 && salao === 'sim') {
      const medFinal = [
        'Acesso de viaturas',
        'Saídas de Emergencia',
        'Iluminação de Emergência',
        'Sinalização de Emergência',
        'Extintores',
        'Hidrantes e Mangotinhos',
        'Controle de Materiais de Acabamento e de Revestimento (nos salões de festas e auditórios com previsão de população superior a 200 pessoas)',
      ];
      setMediaFinal(medFinal);
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
      setMediaFinal(medFinal);
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
      setMediaFinal(medFinal);
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
      setMediaFinal(medFinal);
    }
  }

  return (
    <div>
      {userAltura <= 12 && userArea <= 1200 && (
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
      {userAltura <= 12 && (
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
              return <li key={item}><Link href={`/medidas/${item.replaceAll(' ', '').replace('ç', 'c').replace('ã', 'a').replace('ê', 'e').replace('í', 'i').toLowerCase()}`}>{item}</Link></li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default A1;
