import React from 'react';
import Result from '../../result/result';
import ButtonNext from '../Navbar/buttonNext';

interface pageProps {
  isActive: boolean;
  onshow: (index: number) => void;
}

const MedidasSeguranca = ({ isActive, onshow }: pageProps) => {
  if (isActive)
    return (
      <div className='d-flex flex-column'>
        <div className='mb-4'>
          <h4 className='text-primary'>Medidas de Segurança</h4>
          <span>Essas são as medidas de seguranças mínimas para a sua edificação.</span>
        </div>
        <div className='flex-grow-1'>
          <Result />
        </div>
        <div>
          <ButtonNext onclick={() => onshow(5)} />
        </div>
      </div>
    );
  return null;
};

export default MedidasSeguranca;
