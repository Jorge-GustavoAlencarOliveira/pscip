import React from 'react';
import { NiveldeRiscoProps, useContextProjeto } from '../Context/contextProjeto';

type buttonProps = {
  children: React.ReactNode;
  onshow: () => void;
  activeIndex: number;
  index: number
};

const navLink = {
  background: '#cfe2ff',
  border: '1px solid #dee2e6',
  borderTopLeftRadius: '10px', 
  borderTopRightRadius: '10px',
  color: '#000'
}

const navLinkActive = {
  border: 'none',
  color: '#fff',
  borderTopLeftRadius: '10px', 
  borderTopRightRadius: '10px',
  background: '#0d6efd',
  padding: '8px'
}

const ButtonNav = ({ children, onshow, activeIndex, index }: buttonProps) => {
  const [active, setActive] = React.useState(true)
  React.useEffect(() => {
    if(index === activeIndex) setActive(false)
  },[activeIndex])
  const {regioes, addAllDataBuilding} = useContextProjeto()
  React.useEffect(() => {
     if(index === 2 || index === 3 || index === 4 || index === 5)
     setActive(true)
     addAllDataBuilding('riscosEspeciais', [])
     addAllDataBuilding('niveldeRisco', {} as {nivel: '', props: NiveldeRiscoProps})     
  }, [regioes])
  
  return (
    <button
      style= {index === activeIndex ? navLinkActive : navLink }
      onClick={onshow}
      disabled={active}
      className='me-1'
    >
      {children}
    </button>
  );
};

export default ButtonNav;
