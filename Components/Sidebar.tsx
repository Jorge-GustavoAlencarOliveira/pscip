import React from 'react'
import Link from 'next/link'
import {FaBook, FaCalculator, FaHome, FaPage4, FaPagelines, FaReadme, FaUser} from 'react-icons/fa'
import styles from '../src/pages/home.module.css'

const Sidebar = () => {
  return (
    <div className={`col-2 bg-primary px-2 ${styles.SideBar}`}>
      <nav className='d-flex flex-column gap-3 py-5 '>
        <Link href='#' className='d-flex gap-2 align-items-center text-decoration-none text-white'>
          <FaReadme /> 
          <span>
          Meus Projetos
          </span>
         </Link>
         <Link href='#' className='d-flex gap-2 align-items-center text-decoration-none text-white'>
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
          Calculadora de incêndio
          </span>
         </Link>
        <Link href='#'>Jucemg</Link>
        <Link href='#'>Legislação</Link>
      </nav>
    </div>
  )
}

export default Sidebar
