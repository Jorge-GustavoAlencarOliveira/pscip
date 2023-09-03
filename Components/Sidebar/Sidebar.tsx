import React from 'react'
import Link from 'next/link'
import {FaBook, FaCalculator, FaHome, FaReadme, FaUser} from 'react-icons/fa'
import styles from '../../src/pages/home.module.css'

const Sidebar = () => {
  return (
    <div className={`bg-primary px-3 ${styles.SideBar}`}>
      <nav className='d-flex flex-column gap-3 py-5 '>
        <Link href='/meusprojetos' className='d-flex gap-2 align-items-center text-decoration-none text-white'>
          <FaReadme /> 
          <span>
          Meus Projetos
          </span>
         </Link>
         <Link href='/minhaconta' className='d-flex gap-2 align-items-center text-decoration-none text-white'>
          <FaUser /> 
          <span>
          Minha Conta
          </span>
         </Link>
         <Link href='#' className='d-flex gap-2 align-items-center text-decoration-none text-white'>
          <FaHome /> 
          <span>
          Entenda seu imóvel
          </span>
         </Link>
         <Link href='#' className='d-flex gap-2 align-items-center text-decoration-none text-white'>
          <FaBook /> 
          <span>
          Memoriais de incêndio
          </span>
         </Link>
         <Link href='#' className='d-flex gap-2 align-items-center text-decoration-none text-white'>
          <FaCalculator /> 
          <span>
          Calculadoras
          </span>
         </Link>
      </nav>
    </div>
  )
}

export default Sidebar
