import React from 'react';
import Ocupacao from '../Components/ocupacao';
import Regioes from '../Components/regiao';
import { array } from '../dataContext';


interface pageProps {
  isActive: boolean;
  onshow: (index: number) => void;
  edificacao?: array
}

const RegioesOcupacoes = ({ isActive, onshow, edificacao }: pageProps) => {
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
      <div>
        {separacao === 'separacaoNao' && (
          <Ocupacao nextsection={() => onshow(2)} />
        )}
      </div>
      <div>
        {separacao === 'separacaoSim' && (
          <Regioes nextsection={() => onshow(2)} />
        )}
      </div>
    </div>
  );
};

export default RegioesOcupacoes;
