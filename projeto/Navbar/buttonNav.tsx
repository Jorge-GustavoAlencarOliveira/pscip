import React from 'react';

type buttonProps = {
  children: React.ReactNode;
  onshow: () => void;
  state: number;
  index: number
};

const ButtonNav = ({ children, onshow, state, index }: buttonProps) => {
  const [active, setActive] = React.useState(true)
  React.useEffect(() => {
    if(index === state) setActive(false)
  },[state])
  return (
    <button
      style={{ color: state === index ? 'blue' : '#fff' }}
      className="btn btn-primary"
      onClick={() => onshow()}
      disabled={active}
    >
      {children}
    </button>
  );
};

export default ButtonNav;
