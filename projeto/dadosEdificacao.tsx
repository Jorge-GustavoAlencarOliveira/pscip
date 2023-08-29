import React from 'react';
import ButtonNext from './Navbar/buttonNext';

interface pageProps {
  isActive: boolean;
  onshow: (index: number) => void;
}

const DadosEdificacao = ({ isActive, onshow }: pageProps) => {
  return (
    <div className={isActive ? 'd-block' : 'd-none'}>
      <h1>Dados da Edificação</h1>
      <ButtonNext onclick={() => onshow(2)} />
    </div>
  );
};

export default DadosEdificacao;
