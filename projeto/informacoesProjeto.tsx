import React from 'react';
import ButtonNext from '../Components/Navbar/buttonNext';

interface pageProps {
  isActive: boolean;
  onshow: (index: number) => void;
}

const InformacoesProjeto = ({ isActive, onshow }: pageProps) => {
    return (
      <div className={isActive ? 'd-block' : 'd-none'}>
        <h1>Informações do Projeto</h1>
        <ButtonNext onclick={() => onshow(1)} />
      </div>
    );
};

export default InformacoesProjeto;
