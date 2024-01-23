import React from 'react'
import ButtonNav from './buttonNav'
interface navbarProps {
  onshow: (index: number) => void;
  activeIndex: number
}

const Navbar = ({onshow, activeIndex}: navbarProps) => {
  return (
    <>
      <nav className='bg-ligth'>
        <ul className='mb-3 nav nav-tabs'>
          <ButtonNav index={0} activeIndex={activeIndex} onshow={() => onshow(0)}>Informações do projeto</ButtonNav>
          <ButtonNav index={1} activeIndex={activeIndex} onshow={() => onshow(1)}>Regiões/Ocupações</ButtonNav>
          <ButtonNav index={2} activeIndex={activeIndex} onshow={() => onshow(2)}>Riscos Especiais</ButtonNav>
          <ButtonNav index={3} activeIndex={activeIndex} onshow={() => onshow(3)}>Nível de Risco</ButtonNav>
          <ButtonNav index={4} activeIndex={activeIndex} onshow={() => onshow(4)}>Medidas de segurança</ButtonNav>
          <ButtonNav index={5} activeIndex={activeIndex} onshow={() => onshow(5)}>Dimensionamento</ButtonNav>
          <ButtonNav index={6} activeIndex={activeIndex} onshow={() => onshow(6)}>Gerenciamento</ButtonNav>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
