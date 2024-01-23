import React from 'react';

interface buttonNextProps {
  onclick?: () => void;
  enabled?: boolean;
  type?: 'button' | 'submit' | 'reset'
}

const ButtonNext = ({ onclick, enabled, type }: buttonNextProps) => {
  return (
    <>
      <button
        disabled={enabled}
        className="btn btn-primary float-end"
        onClick={onclick}
        type={type}
      >
        Próximo
      </button>
    </>
  );
};

export default ButtonNext;
