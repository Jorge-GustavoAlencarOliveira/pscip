import React from 'react'
import ButtonNav from './buttonNav'

interface navbarProps {
  onshow: (index: number) => void;
  isActive: number
}

const Navbar = ({onshow, isActive}: navbarProps) => {
  return (
    <>
      <nav className='bg-primary'>
        <ul className='d-flex justify-content-around gap-2 px-0'>
          <ButtonNav index={0} state={isActive} onshow={() => onshow(0)}>Informações do projeto</ButtonNav>
          {/* <ButtonNav index={1} state={isActive} onshow={() => onshow(1)}>Dados da edificação</ButtonNav> */}
          <ButtonNav index={1} state={isActive} onshow={() => onshow(1)}>Regiões/Ocupação</ButtonNav>
          <ButtonNav index={2} state={isActive} onshow={() => onshow(2)}>Medidas de segurança</ButtonNav>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
