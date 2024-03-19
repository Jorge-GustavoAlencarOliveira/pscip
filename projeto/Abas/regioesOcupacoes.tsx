import React, { useContext } from 'react';
import ModuloRegiao from '../../Components/Regiao-ocupacao/moduloRegiao';
import { RegiaomoduloProps } from '../../Components/Regiao-ocupacao/regiaoReducer';

interface pageProps {
  isActive: boolean;
  onshow: (index: number) => void;
}

const RegioesOcupacoes = ({ isActive, onshow}: pageProps) => {
  return (
    <div className={isActive ? 'd-block' : 'd-none'}>
      <ModuloRegiao onShow={() => onshow(2)}  />
    </div>
  );
};

export default RegioesOcupacoes;
