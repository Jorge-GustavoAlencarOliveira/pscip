import React from 'react';

interface buttonNextProps {
  onclick: () => void;
}

const ButtonNext = ({ onclick }: buttonNextProps) => {
  return (
    <>
      <button className='btn btn-primary' onClick={onclick}>Próximo</button>
    </>
  );
};

export default ButtonNext;
