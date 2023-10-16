import React from 'react';
import ModuloRegiao from '../Components/Regiao-ocupacao/moduloRegiao';
import { RegiaomoduloProps } from '../Components/Regiao-ocupacao/regiaoReducer';

interface pageProps {
  isActive: boolean;
  onshow: (index: number) => void;
  edificacao?: RegiaomoduloProps[]
}

const RegioesOcupacoes = ({ isActive, onshow, edificacao }: pageProps) => {
  return (
    <div className={isActive ? 'd-block' : 'd-none'}>
      <ModuloRegiao onShow={() => onshow(2)} edificacao={edificacao}/>     
    </div>
  );
};

export default RegioesOcupacoes;

