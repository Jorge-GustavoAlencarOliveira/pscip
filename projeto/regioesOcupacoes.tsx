import React from 'react';
import ButtonNext from '../Components/Navbar/buttonNext';
import Ocupacao from '../Components/ocupacao';
import Regioes from '../Components/regiao';

interface pageProps {
  isActive: boolean;
  onshow: (index: number) => void;
}

const RegioesOcupacoes = ({ isActive, onshow }: pageProps) => {
  const [separacao, setSeparacao] = React.useState<string>('');
    return (
        <div className={isActive ? 'd-block' : 'd-none'}>
          <span className="fw-bold">Existe separação entre edificações?</span>
          <div className="d-flex gap-5">
            <div className="d-flex gap-1 align-items-center">
              <input
                type="radio"
                id="separacaoSim"
                name="isolamento"
                value="separacaoSim"
                onChange={({ target }) => setSeparacao(target.value)}
                checked={separacao === 'separacaoSim'}
              />
              <label htmlFor="separacaoSim">Sim</label>
            </div>
            <div className="d-flex gap-1 align-items-center">
              <input
                type="radio"
                id="separacaoNao"
                name="isolamento"
                value="separacaoNao"
                onChange={({ target }) => setSeparacao(target.value)}
                checked={separacao === 'separacaoNao'}
              />
              <label htmlFor="separacaoNao">Não</label>
            </div>
          </div>
          <div>{separacao === 'separacaoNao' && <Ocupacao nextsection={() => onshow(3)}/>}</div>
          <div>{separacao === 'separacaoSim' && <Regioes nextsection={() => onshow(3)}/>}</div>
        </div>
    );
};

export default RegioesOcupacoes;
